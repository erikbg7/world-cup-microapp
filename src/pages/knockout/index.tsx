import React from 'react';
import clsx from 'clsx';
import TeamDetails from '../../components/TeamDetails';
import { IRound, KNOCKOUT_STAGE_ROUNDS } from '../../config/knockout-stage';

const KnockoutStagePage = () => {
  return (
    <div className="responsive-screen flex lg:justify-center py-20 pl-2.5 ">
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
      {matches.map((match) => (
        <div key={match.team1.name + match.team2.name} className="relative">
          {type !== 'Round of 16' && (
            <div
              className={clsx('w-[1px] bg-[#3c4043] absolute left-[-7px]', {
                ['h-[108px] top-[-8px]']: type === 'Quarterfinals',
                ['h-[226px] top-[-63px]']: type === 'Semifinals',
                ['h-[454px] top-[-164px]']: type === 'Final',
              })}
            ></div>
          )}

          <div
            id={type}
            className={clsx(
              'border-[#3c4043] border-[1px] text-[#bdc1c6] pt-2 pb-2 pl-2] rounded-lg mt-2.5 mb-2.5 w-44',
              {
                ['mb-[128px]']: type === 'Quarterfinals',
                ['mb-[20px]']: ['3/12, 20:00', '5/12, 20:00', '4/12, 20:00'].includes(match.date),
                ['mt-[178px]']: match.date === '13/12, 20:00',
                ['mt-[354px]']: match.date === '14/12, 20:00',
                ['mt-[390px]']: match.date === '18/12, 16:00',
              }
            )}
          >
            <p className="text-xs pl-2.5 mb-2">{match.date}</p>
            <div className="">
              <TeamDetails
                name={match.team1.name}
                flag={match.team1.flag}
                flagClassName="w-6 h-6 bg-[#B2B2B2] mt-0 mb-1"
                nameClassName="text-sm"
              />
              <TeamDetails
                name={match.team2.name}
                flag={match.team2.flag}
                flagClassName="w-6 h-6 bg-[#B2B2B2] mt-0 mb-1"
                nameClassName="text-sm"
              />
            </div>
          </div>
          {type !== 'Final' && (
            <div className="w-4 h-[1px] bg-[#3c4043] absolute right-[-14px] top-12"></div>
          )}
          <div className="w-2 h-[1px] bg-[#3c4043] absolute left-[-6px] top-12"></div>
        </div>
      ))}
    </>
  );
};

export default KnockoutStagePage;
