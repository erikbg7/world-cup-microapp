import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Dialog, Transition } from '@headlessui/react';

import TeamDetails from './TeamDetails';
import GroupSection from './GroupsSection';
import CloseIcon from '../icons/CloseIcon';
import DiamondDivider from './DiamondDivider';
import MatchDetailsSection, { ITouple } from './MatchDetailsSection';
import { IMatch } from '../config/matches';
import { ILiveMatch } from '../config/liveScore';
import { GroupIdentifier } from '../models/groups';
import { fetchMatchDetails } from '../services/api';
import { getGroupStageResults } from '../services/firebase/methods';

interface Props {
  match: IMatch;
  title: string;
  isLive?: boolean;
}

interface IGroupMatchModalHandler {
  open: (liveMatch?: ILiveMatch) => void;
}

const GroupMatchModal = React.forwardRef<IGroupMatchModalHandler, Props>(
  ({ match, title, isLive }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState<ILiveMatch | undefined>();

    const closeModal = () => setIsOpen(false);

    React.useImperativeHandle(ref, () => ({
      open: (liveMatch) => {
        setModalData(liveMatch);
        setIsOpen(true);
      },
    }));

    const teams: ITouple = [match.team1.fifaCode, match.team2.fifaCode];
    const hasScores = !!match.scores?.[0] && !!match.scores?.[1];
    const isTeam1Winner = Number(match.scores?.[0]) > Number(match.scores?.[1]);
    const isTeam2Winner = Number(match.scores?.[1]) > Number(match.scores?.[0]);

    const getScore = (index: 0 | 1) => modalData?.scores?.[index] || match.scores?.[index];

    return (
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="absolute bottom-0 right-0 z-10" onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center justify-center text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden text-left align-middle shadow-xl transition-all bg-cream">
                  <button
                    className="absolute top-5 right-5 hover:bg-qatar/20 p-2 rounded-lg focus:outline-none"
                    onClick={closeModal}
                  >
                    <CloseIcon className="h-10 w-10 mx-auto" />
                  </button>

                  <div className="responsive-screen flex flex-col justify-center items-center w-full h-full pb-5">
                    <div className="text-4xl font-extralight w-full px-4 py-12 text-center">
                      {title}
                    </div>

                    <DiamondDivider />

                    <div className="flex justify-around items-center w-full pb-5 pt-10">
                      <TeamDetails
                        name={match.team1.name}
                        flag={match.team1.flag}
                        score={getScore(0)}
                        isWinner={hasScores && isTeam1Winner}
                        flagClassName="h-12 w-20"
                        nameClassName="text-lg"
                        wrapperClassName="flex-col"
                        scoreClassName="m-4"
                      />
                      <span className="text-3xl font-extralight">vs</span>
                      <TeamDetails
                        name={match.team2.name}
                        flag={match.team2.flag}
                        score={getScore(1)}
                        isWinner={hasScores && isTeam2Winner}
                        flagClassName="h-12 w-20"
                        nameClassName="text-lg"
                        wrapperClassName="flex-col"
                        scoreClassName="m-4"
                      />
                    </div>
                    {match.group && <DynamicGroupSection group={match.group} />}
                    {isLive && <DynamicDetailsSection id={match.matchId} teams={teams} />}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
);

const DynamicDetailsSection: React.FC<{ id: IMatch['matchId']; teams: ITouple }> = (props) => {
  const { data } = useQuery([props.id], fetchMatchDetails(props.id!));

  return (
    <MatchDetailsSection
      teams={props.teams}
      events={data?.results}
      referee={'Juan Silvestre (Mexico)'}
    />
  );
};

const DynamicGroupSection: React.FC<{ group: GroupIdentifier }> = (props) => {
  const { data } = useQuery(['group-results'], getGroupStageResults);

  return (
    <GroupSection
      showGroup={false}
      className="w-full px-2 py-0 overflow-auto flex-1"
      group={props.group}
      teams={data?.[props.group]}
    />
  );
};

GroupMatchModal.displayName = 'GroupMatchModal';

export default GroupMatchModal;
export type { IGroupMatchModalHandler };
