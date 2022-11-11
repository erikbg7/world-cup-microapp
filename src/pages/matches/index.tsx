import React from 'react';
import { GROUP_STAGE_MATCHES, IMatch, IMatchDay } from '../../config/matches';

const TestPage = () => {
  return (
    <div className="py-20">
      {Object.entries(GROUP_STAGE_MATCHES).map(([id, matchDay]) => (
        <MatchesSection key={id} id={id} matchDay={matchDay} />
      ))}
    </div>
  );
};

const MatchesSection: React.FC<{ id: string; matchDay: IMatchDay }> = ({ id, matchDay }) => {
  return (
    <section className="px-12">
      <h2 className="text-gray-300 text-sm py-3 px-6">{id}</h2>
      <div className="grid grid-cols-2 gap-[1px] py-[1px] bg-gray-600">
        {matchDay.matches.map((match) => (
          <MatchItem key={match.team1 + match.team2} {...match} />
        ))}
      </div>
    </section>
  );
};

const MatchItem: React.FC<IMatch> = ({ group, time, team1, team2 }) => {
  return (
    <div className="bg-blackishLight py-4 px-6 hover:bg-black hover:cursor-pointer">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Group {group}</span>
        <span className="text-lg font-semibold">{time}</span>
      </div>
      <div className="flex items-center text-center text-gray-300 h-20 py-2">
        <div className="flex-1">{team1}</div>
        <div className="h-full w-[1px] bg-gray-600"></div>
        <div className="flex-1">{team2}</div>
      </div>
    </div>
  );
};

export default TestPage;
