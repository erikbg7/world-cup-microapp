import React from 'react';
import { GROUP_STAGE, IGroup } from '../../config/groups';

const Standings = () => {
  return (
    <div className="py-20">
      {Object.values(GROUP_STAGE).map((group: IGroup) => (
        <GroupSection key={group.group} {...group} />
      ))}
    </div>
  );
};

const GroupSection: React.FC<IGroup> = ({ group, teams }) => {
  return (
    <section className="p-6 sm:p-12">
      <h2 className="text-xl p-3">Group {group}</h2>
      <table className="w-full text-center">
        <tbody>
          <tr>
            <th>Teams</th>
            <th></th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GD</th>
            <th>Points</th>
          </tr>
          {teams.map((team) => {
            return (
              <tr key={team.name} className="border-t border-gray-600 text-gray-300 py-1">
                <td>1</td>
                <td>{team.name}</td>
                <td>0</td>
                <td>0</td>
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

export default Standings;
