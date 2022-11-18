import React from 'react';
import clsx from 'clsx';
import { IRound, KNOCKOUT_STAGE_ROUNDS } from '../../config/knockout-stage';
import TeamDetails from '../../components/TeamDetails';
import DateTime from '../../components/DateTime';
import GroupMatchModal, { IGroupMatchModalHandler } from '../../components/GroupMatchModal';
import { IMatch } from '../../config/matches';
import ClockIcon from '../../components/icons/ClockIcon';

const KnockoutStagePage = () => {
  return (
    <div className="flex lg:justify-center pl-2.5 ">
      {KNOCKOUT_STAGE_ROUNDS.map((round) => (
        <div
          key={round.type}
          className={clsx('', {
            ['ml-5 pt-14']: round.type === 'Quarterfinals',
            ['ml-5']: round.type === 'Semifinals' || round.type === 'Final',
          })}
        >
          <KnockoutRound {...round} />
        </div>
      ))}
    </div>
  );
};

const KnockoutRound: React.FC<IRound> = ({ type, matches }) => {
  return (
    <>
      {matches.map((match, idx) => (
        <div key={match.team1.name + match.team2.name} className="relative">
          <MatchItem idx={idx as number} match={{ ...match, time: match.date }} type={type} />
        </div>
      ))}
    </>
  );
};

interface IMatchItem {
  idx: number;
  match: IMatch;
  type: string;
}

const MatchItem: React.FC<IMatchItem> = ({ idx, match, type }) => {
  const modalRef = React.useRef<IGroupMatchModalHandler>(null);

  const handleMatchClick = () => modalRef.current?.open();
  return (
    <>
      <div
        id={type}
        onClick={handleMatchClick}
        className={clsx(
          'border border-qatar p-1 mt-2.5 mb-2.5 w-36',
          'hover:cursor-pointer hover:bg-gray-300',
          {
            ['mb-[108px]']: type === 'Quarterfinals',
            ['mt-[163px]']: type === 'Semifinals' && idx === 0,
            ['mt-[308px]']: type === 'Semifinals' && idx === 1,
            ['mt-[370px]']: type === 'Final',
          }
        )}
      >
        <p className="flex items-center text-xs px-1 mb-2">
          <ClockIcon className="w-3 h-3 mr-2" />
          <DateTime className="font-semibold" timestamp={match.time} format="dateHHHHDDMM" />
        </p>
        <div className="">
          <TeamDetails
            name={match.team1.name}
            flag={match.team1.flag}
            flagClassName="w-8 h-5 h-6 m-1"
            nameClassName="text-sm font-light"
          />
          <TeamDetails
            name={match.team2.name}
            flag={match.team2.flag}
            flagClassName="w-8 h-5 m-1"
            nameClassName="text-sm font-light"
          />
        </div>
      </div>
      <GroupMatchModal
        ref={modalRef}
        title={type}
        match={{ team1: match.team1, team2: match.team2 } as IMatch}
      />
    </>
  );
};

export default KnockoutStagePage;
