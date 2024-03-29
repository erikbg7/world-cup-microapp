import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { TEAMS } from '../config/teams';
import { GroupIdentifier, IGroupStageTeamResults } from '../models/groups';

interface Props {
  group: GroupIdentifier;
  teams?: IGroupStageTeamResults[];
  showGroup?: boolean;
  className?: string;
}

const GroupSection: React.FC<Props> = ({ group, teams, className, showGroup = true }) => {
  return (
    <section className={clsx('p-4 sm:p-12', className)}>
      {showGroup && <h2 className="text-xl p-3 font-bold">Group {group}</h2>}
      <table className="w-full text-center">
        <tbody>
          <tr className="px-2">
            <th className="text-left px-4">Teams</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Pts</th>
          </tr>
          {teams?.length ? <TableRows teams={teams} /> : <TableRowsSkeleton />}
        </tbody>
      </table>
    </section>
  );
};

const TableRows: React.FC<{ teams: IGroupStageTeamResults[] }> = ({ teams }) => {
  return (
    <>
      {teams.map((team, i) => {
        const flag = Object.values(TEAMS).find((t) => t.name === team.name)?.flag || TEAMS.TBD.flag;

        return (
          <tr key={team.name} className="border-t border-qatar">
            <td className="flex items-center py-2">
              <span className="font-mono mx-1">{i + 1}</span>
              <div className="relative h-6 w-8 mx-3 rounded-sm">
                <Image fill sizes="100px" className="object-fill" src={flag} alt={team.name} />
              </div>
              {team.name}
            </td>
            <td>{team.played}</td>
            <td>{team.won}</td>
            <td>{team.draw}</td>
            <td>{team.lost}</td>
            <td>{team.points}</td>
          </tr>
        );
      })}
    </>
  );
};

const TableRowsSkeleton = () => {
  const FakeResult = <span className="bg-qatar/20 rounded-sm"> 00 </span>;

  return (
    <>
      {[0, 1, 2, 3].map((index) => {
        return (
          <tr key={index} className="animate-pulse border-t border-gray-400 text-transparent">
            <td className="flex items-center py-2">
              <span className="bg-qatar/20 rounded-sm mx-1">00</span>
              <span className="bg-qatar/20 rounded-sm mx-1">image</span>
              <span className="bg-qatar/20 rounded-sm mx-1">placeholder team</span>
            </td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
          </tr>
        );
      })}
    </>
  );
};

export default GroupSection;
