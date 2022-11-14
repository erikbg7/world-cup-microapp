import React from 'react';
import clsx from 'clsx';
import TeamDetails from '../../components/TeamDetails';
import { PLAYOFFS_MATCHES, IMatch, IMatchDay } from '../../config/matches';

const Bracket = () => {
  return (
    <div className="py-20 pl-2.5 flex flex-row">
      {Object.entries(PLAYOFFS_MATCHES).map(([id, matchDay]) => (
        <div
          className={clsx('', {
            ['ml-5 pt-14']: id === 'Round of 8',
            ['ml-5']: id === 'Semifinals' || id === 'Final',
          })}
          key={id}
        >
          <Playoff id={id} matchDay={matchDay} />
        </div>
      ))}
    </div>
  );
};

const Playoff: React.FC<{ id: string; matchDay: IMatchDay }> = ({ id, matchDay }) => {
  return (
    <>
      {matchDay.matches.map((match) => (
        <div key={match.team1.name + match.team2.name} className="relative">
          {id !== 'Round of 16' && (
            <div
              className={clsx('w-[1px] bg-[#3c4043] absolute left-[-7px]', {
                ['h-[108px] top-[-8px]']: id === 'Round of 8',
                ['h-[226px] top-[-63px]']: id === 'Semifinals',
                ['h-[454px] top-[-164px]']: id === 'Final',
              })}
            ></div>
          )}

          <div
            className={clsx(
              'w-40 border-[#3c4043] border-[1px] text-[#bdc1c6] pt-2 pb-2 pl-2] rounded-lg mt-2.5 mb-2.5 w-44',
              {
                ['mb-[128px]']: id === 'Round of 8',
                ['mb-[20px]']: ['3/12, 20:00', '5/12, 20:00', '4/12, 20:00'].includes(match.time),
                ['mt-[178px]']: match.time === '13/12, 20:00',
                ['mt-[354px]']: match.time === '14/12, 20:00',
                ['mt-[390px]']: match.time === '18/12, 16:00',
              }
            )}
          >
            <p className="text-xs pl-2.5 mb-2">{match.time}</p>
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
          {id !== 'Final' && (
            <div className="w-4 h-[1px] bg-[#3c4043] absolute right-[-14px] top-12"></div>
          )}
          <div className="w-2 h-[1px] bg-[#3c4043] absolute left-[-6px] top-12"></div>
        </div>
      ))}
    </>
  );
};

export default Bracket;
