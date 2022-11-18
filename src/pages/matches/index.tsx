import React from 'react';
import Image from 'next/image';
import { GROUP_STAGE_MATCHES, IMatch, IMatchDay } from '../../config/matches';
import GroupMatchModal, { IGroupMatchModalHandler } from '../../components/GroupMatchModal';
import DateTime from '../../components/DateTime';
import { ITeam } from '../../config/teams';
import StadiumIcon from '../../components/icons/StadiumIcon';
import ClockIcon from '../../components/icons/ClockIcon';

const MatchesPage = () => {
  return (
    <div className="py-5">
      {Object.entries(GROUP_STAGE_MATCHES).map(([id, matchDay]) => (
        <MatchesDay key={id} id={id} matchDay={matchDay} />
      ))}
    </div>
  );
};

const MatchesDay: React.FC<{ id: string; matchDay: IMatchDay }> = ({ id, matchDay }) => {
  return (
    <section className="px-6 sm:px-12 pb-6">
      <h2 className="text-xl font-semibold py-3">{id}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden">
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
      <div className="flex border border-qatar hover:cursor-pointer p-5" onClick={handleMatchClick}>
        <div className="flex flex-1">
          <div className="flex flex-col justify-between py-2">
            <TeamData {...team1} />
            <div className="text-sm w-full text-center font-light">v</div>
            <TeamData {...team2} />
          </div>
        </div>
        <div className="flex flex-1 border-l border-l-qatar">
          <div className="flex flex-col w-full h-full py-4 pl-6 text-sm font-light">
            <div className="flex items-center py-1">
              <DiamondBullet />
              <span className="ml-2">Group A</span>
            </div>
            <div className="flex items-center py-1">
              <ClockIcon className="h-3 w-3" />
              <DateTime className="font-semibold ml-2" timestamp={time} format="dateHHHHDDMM" />
            </div>
            <div className="flex items-center py-1">
              <StadiumIcon className="inline-block h-3 w-3" />
              <span className="ml-2">TBD</span>
            </div>
          </div>
        </div>
      </div>
      <GroupMatchModal
        ref={modalRef}
        title={`Group Stage · Group ${group}`}
        match={{ group, time, team1, team2 } as IMatch}
      />
    </>
  );
};

const TeamData: React.FC<ITeam> = ({ flag, name, fifaCode }) => {
  return (
    <div className="flex items-center">
      <div className="relative h-6 w-9 mr-3">
        <Image fill sizes="100vw" className="object-fill rounded-sm" src={flag} alt={name} />
      </div>
      <div className="font-extrabold">{fifaCode}</div>
    </div>
  );
};

const DiamondBullet = () => {
  return <div className="inline-block h-1.5 w-1.5 ml-1 bg-teal rotate-45" />;
};

export default MatchesPage;
