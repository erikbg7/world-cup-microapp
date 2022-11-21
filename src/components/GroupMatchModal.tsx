import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Dialog, Transition } from '@headlessui/react';

import TeamDetails from './TeamDetails';
import GroupSection from './GroupsSection';
import { IMatch } from '../config/matches';
import { GroupIdentifier } from '../models/groups';
import { getGroupStageResults } from '../services/firebase/methods';
import CloseIcon from './icons/CloseIcon';
import DiamondDivider from './DiamondDivider';

interface Props {
  match: IMatch;
  title: string;
}

interface IGroupMatchModalHandler {
  open: () => void;
}

const GroupMatchModal = React.forwardRef<IGroupMatchModalHandler, Props>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeModal = () => setIsOpen(false);

  React.useImperativeHandle(ref, () => ({ open: () => setIsOpen(true) }));

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
                  className="absolute top-10 right-10 hover:bg-qatar/20 p-2 rounded-lg"
                  onClick={closeModal}
                >
                  <CloseIcon className="h-10 w-10 mx-auto" />
                </button>

                <div className="responsive-screen flex flex-col justify-center items-center w-full h-full pb-20">
                  <div className="text-4xl font-extralight w-full px-4 py-12 text-center">
                    {props.title}
                  </div>

                  <DiamondDivider />

                  <div className="flex justify-around items-center w-full pb-16 pt-10">
                    <TeamDetails
                      name={props.match.team1.name}
                      flag={props.match.team1.flag}
                      score={props.match.scores?.[0]}
                      matchState={
                        Number(props.match.scores?.[0]) > Number(props.match.scores?.[1])
                          ? 'border-win'
                          : 'border-loose'
                      }
                      flagClassName="h-12 w-20"
                      nameClassName="text-lg"
                      wrapperClassName="flex-col"
                    />
                    <span className="text-3xl font-extralight">vs</span>
                    <TeamDetails
                      name={props.match.team2.name}
                      flag={props.match.team2.flag}
                      score={props.match.scores?.[1]}
                      matchState={
                        Number(props.match.scores?.[1]) > Number(props.match.scores?.[0])
                          ? 'border-win'
                          : 'border-loose'
                      }
                      flagClassName="h-12 w-20"
                      nameClassName="text-lg"
                      wrapperClassName="flex-col"
                    />
                  </div>
                  {props.match.group && <DynamicGroupSection group={props.match.group} />}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

const DynamicGroupSection: React.FC<{ group: GroupIdentifier }> = (props) => {
  const { data } = useQuery(['group-results'], getGroupStageResults);

  return (
    <GroupSection
      showGroup={false}
      className="w-full px-2 py-0"
      group={props.group}
      teams={data?.[props.group]}
    />
  );
};

GroupMatchModal.displayName = 'GroupMatchModal';

export default GroupMatchModal;
export type { IGroupMatchModalHandler };
