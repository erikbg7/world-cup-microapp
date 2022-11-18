import React from 'react';
import DiamondDivider from '../../components/DiamondDivider';
import TeamDetails from '../../components/TeamDetails';
import { TEAMS } from '../../config/teams';

const Teams = () => {
  return (
    <div className="w-full h-full flex-1 overflow-auto">
      <ul>
        {Object.values(TEAMS)
          .filter((t) => t.name !== 'TBD')
          .map((t) => (
            <li key={t.name} className="flex flex-col m-2">
              <TeamDetails
                name={t.name}
                flag={t.flag}
                flagClassName="h-12 w-20"
                nameClassName="text-2xl font-semibold"
              />
              <table className="table-auto m-2">
                <tbody>
                  <tr className="border-2 border-qatar my-2">
                    <td className="font-semibold px-1 text-lg">Goal Keepers</td>
                    <td className="text-lg">{t.goalkeepers.join(' · ')}</td>
                  </tr>
                  <tr className="border-2 border-qatar my-2">
                    <td className="font-semibold px-1 text-lg">Midfielders</td>
                    <td className="text-lg">{t.midfielders.join(' · ')}</td>
                  </tr>
                  <tr className="border-2 border-qatar my-2">
                    <td className="font-semibold px-1 text-lg">Defenders</td>
                    <td className="text-lg">{t.defenders.join(' · ')}</td>
                  </tr>
                  <tr className="border-2 border-qatar my-2">
                    <td className="font-semibold px-1 text-lg">Forwards</td>
                    <td className="text-lg">{t.forwards.join(' · ')}</td>
                  </tr>
                </tbody>
              </table>
              <DiamondDivider className="my-8" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Teams;
