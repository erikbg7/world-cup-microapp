import React from 'react';
import Image from 'next/image';
import { GROUP_STAGE_MATCHES, IMatch, IMatchDay } from '../../config/matches';
import GroupMatchModal, { IGroupMatchModalHandler } from '../../components/GroupMatchModal';
import DateTime from '../../components/DateTime';
import { ITeam } from '../../config/teams';
import StadiumIcon from '../../components/icons/StadiumIcon';
import ClockIcon from '../../components/icons/ClockIcon';
import DiamondBullet from '../../components/DiamondBullet';

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

const MatchItem: React.FC<IMatch> = ({ group, time, team1, team2, stadium, scores }) => {
  const modalRef = React.useRef<IGroupMatchModalHandler>(null);

  const handleMatchClick = () => modalRef.current?.open();

  return (
    <>
      <div
        className="flex border border-qatar hover:cursor-pointer h-36 p-5"
        onClick={handleMatchClick}
      >
        <div className="flex flex-1">
          <div className="flex flex-col justify-between py-2">
            <TeamData {...{ ...team1, score: scores?.[0] }} />
            <div className="text-sm w-full text-center font-light">v</div>
            <TeamData {...{ ...team2, score: scores?.[1] }} />
          </div>
        </div>
        <div className="flex flex-1 border-l border-l-qatar">
          <table className="flex flex-col justify-center w-full h-full pl-6 text-sm font-light">
            <tr className="flex items-center py-1">
              <td className="flex items-center">
                <DiamondBullet size={1.5} className="ml-1" />
              </td>
              <td>
                <span className="ml-2">Group {group}</span>
              </td>
            </tr>
            <tr className="flex items-center py-1">
              <td className="flex items-center">
                <ClockIcon className="h-3 w-3" />
              </td>
              <td>
                <DateTime className="font-semibold ml-2" timestamp={time} format="dateHHHHDDMM" />
              </td>
            </tr>
            <tr className="flex items-center py-1">
              <td className="flex items-center">
                <StadiumIcon className="inline-block h-3 w-3" />
              </td>
              <td className="ml-2">{stadium || 'TBD'}</td>
            </tr>
          </table>
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

const TeamData: React.FC<ITeam> = ({ flag, name, fifaCode, score }) => {
  return (
    <div className="flex items-center">
      <span className="pr-2">{score}</span>
      <div className="relative h-6 w-9 mr-3">
        <Image fill sizes="100vw" className="object-fill rounded-sm" src={flag} alt={name} />
      </div>
      <div className="font-extrabold">{fifaCode}</div>
    </div>
  );
};

export default MatchesPage;
