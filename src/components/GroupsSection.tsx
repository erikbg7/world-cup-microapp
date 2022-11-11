import React from 'react';
import Image from 'next/image';
import { IGroup } from '../config/groups';
import clsx from 'clsx';

interface Props extends IGroup {
  showGroup?: boolean;
  className?: string;
}

const GroupSection: React.FC<Props> = ({ group, teams, className, showGroup = true }) => {
  return (
    <section className={clsx('p-6 sm:p-12', className)}>
      {showGroup && <h2 className="text-xl p-3">Group {group}</h2>}
      <table className="w-full text-center">
        <tbody>
          <tr>
            <th>Teams</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>Points</th>
          </tr>
          {teams.map((team, i) => {
            return (
              <tr key={team.name} className="border-t border-gray-600 text-gray-300">
                <td className="flex items-center py-2">
                  <span className="font-mono">{i + 1}</span>
                  <div className="relative h-6 w-6 mx-4 border border-white-300 rounded-sm">
                    <Image src={team.flag} alt={team.name} layout="fill" objectFit="fill" />
                  </div>
                  {team.name}
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default GroupSection;
