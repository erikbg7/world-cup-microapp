import React from 'react';
import { GROUP_STAGE, IGroup } from '../../config/group-stage';
import GroupSection from '../../components/GroupsSection';

const StandingsPage = () => {
  return (
    <div className="py-20">
      {Object.values(GROUP_STAGE).map((group: IGroup) => (
        <GroupSection key={group.group} {...group} />
      ))}
    </div>
  );
};

export default StandingsPage;
