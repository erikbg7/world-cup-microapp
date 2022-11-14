import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { TEAMS } from '../config/teams';
import { GroupIdentifier, IGroupStageTeamResults } from '../pages/groups';

interface Props {
  group: GroupIdentifier;
  teams: IGroupStageTeamResults[];
  showGroup?: boolean;
  className?: string;
}

const GroupSection: React.FC<Props> = ({ group, teams, className, showGroup = true }) => {
  console.log({ teams });
  return (
    <section className={clsx('p-6 sm:p-12', className)}>
      {showGroup && <h2 className="text-xl p-3">Group {group}</h2>}
      <table className="w-full text-center">
        <tbody>
          <tr>
            <th>Teams</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Pts</th>
          </tr>
          {teams.map((team, i) => {
            const flag = Object.values(TEAMS).find((t) => t.name === team.name)!.flag;

            return (
              <tr key={team.name} className="border-t border-gray-600 text-gray-300">
                <td className="flex items-center py-2">
                  <span className="font-mono">{i + 1}</span>
                  <div className="relative h-6 w-6 mx-4 border border-white-300 rounded-sm">
                    <Image fill sizes="100vw" className="object-fill" src={flag} alt={team.name} />
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
        </tbody>
      </table>
    </section>
  );
};

export default GroupSection;
