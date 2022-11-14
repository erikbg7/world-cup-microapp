import React from 'react';
import { GROUP_STAGE_MATCHES, IMatch, IMatchDay } from '../../config/matches';
import GroupMatchModal, { IGroupMatchModalHandler } from '../../components/GroupMatchModal';
import TeamDetails from '../../components/TeamDetails';

const MatchesPage = () => {
  return (
    <div className="py-20">
      {Object.entries(GROUP_STAGE_MATCHES).map(([id, matchDay]) => (
        <MatchesDay key={id} id={id} matchDay={matchDay} />
      ))}
    </div>
  );
};

const MatchesDay: React.FC<{ id: string; matchDay: IMatchDay }> = ({ id, matchDay }) => {
  return (
    <section className="px-6 sm:px-12">
      <h2 className="text-gray-300 text-sm py-3 px-6">{id}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] py-[1px] bg-gray-600">
        {matchDay.matches.map((match) => (
          <MatchItem key={match.team1.name + match.team2.name} {...match} />
        ))}
      </div>
    </section>
  );
};

const MatchItem: React.FC<IMatch> = ({ group, time, team1, team2 }) => {
  const modalRef = React.useRef<IGroupMatchModalHandler>(null);

  const handleMatchClick = () => modalRef.current?.open();

  return (
    <>
      <div
        className="bg-blackishLight py-4 px-6 hover:bg-black hover:cursor-pointer"
        onClick={handleMatchClick}
      >
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Group {group}</span>
          <span className="text-lg font-semibold">{time}</span>
        </div>
        <div className="flex items-center text-center text-gray-300 h-20 py-2">
          <TeamDetails
            name={team1.name}
            flag={team1.flag}
            flagClassName="h-8 w-12"
            wrapperClassName="flex-col"
          />
          <div className="h-full w-[1px] bg-gray-600"></div>
          <TeamDetails
            name={team2.name}
            flag={team2.flag}
            flagClassName="h-8 w-12"
            wrapperClassName="flex-col"
          />
        </div>
      </div>
      <GroupMatchModal ref={modalRef} match={{ group, time, team1, team2 } as IMatch} />
    </>
  );
};

export default MatchesPage;
