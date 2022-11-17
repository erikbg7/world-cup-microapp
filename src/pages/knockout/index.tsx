import React from 'react';
import clsx from 'clsx';
import { IRound, KNOCKOUT_STAGE_ROUNDS } from '../../config/knockout-stage';
import TeamDetails from '../../components/TeamDetails';
import DateTime from '../../components/DateTime';
import GroupMatchModal, { IGroupMatchModalHandler } from '../../components/GroupMatchModal';
import { IMatch } from '../../config/matches';

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
          {type !== 'Round of 16' && (
            <div
              className={clsx('w-[1px] bg-white absolute left-[-7px]', {
                ['h-[108px] top-[-8px]']: type === 'Quarterfinals',
                ['h-[226px] top-[-63px]']: type === 'Semifinals',
                ['h-[454px] top-[-164px]']: type === 'Final',
              })}
            ></div>
          )}

          <MatchItem idx={idx as number} match={{ ...match, time: match.date }} type={type} />

          {type !== 'Final' && (
            <div className="w-4 h-[1px] bg-white absolute right-[-14px] top-12"></div>
          )}
          {type !== 'Round of 16' && (
            <div className="w-2 h-[1px] bg-white absolute left-[-6px] top-12"></div>
          )}
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
          'border-[#3c4043] bg-white border pt-2 pb-2 pl-2 rounded-lg mt-2.5 mb-2.5 w-44',
          'hover:cursor-pointer hover:bg-gray-300',
          {
            ['mb-[128px]']: type === 'Quarterfinals',
            ['mb-[20px]']: type === 'Round of 16' && [1, 3, 5].includes(idx),
            ['mt-[178px]']: type === 'Semifinals' && idx === 0,
            ['mt-[354px]']: type === 'Semifinals' && idx === 1,
            ['mt-[390px]']: type === 'Final',
          }
        )}
      >
        <p className="text-xs pl-2.5 mb-2">
          <DateTime timestamp={match.time} format="dateAndTime" />
        </p>
        <div className="">
          <TeamDetails
            name={match.team1.name}
            flag={match.team1.flag}
            flagClassName="w-[33px] h-6 bg-[#B2B2B2] mt-0 mb-1"
            nameClassName="text-sm font-semibold"
          />
          <TeamDetails
            name={match.team2.name}
            flag={match.team2.flag}
            flagClassName="w-[33px] h-6 bg-[#B2B2B2] mt-0 mb-1"
            nameClassName="text-sm font-semibold"
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
