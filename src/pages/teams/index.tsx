import React from 'react';
import TeamDetails from '../../components/TeamDetails';
import { TEAMS } from '../../config/teams';

const Teams = () => {
  return (
    <div>
      <ul>
        {Object.values(TEAMS).map((t) => (
          <li key={t.name}>
            <TeamDetails
              name={t.name}
              flag={t.flag}
              flagClassName="h-12 w-20"
              nameClassName="text-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
