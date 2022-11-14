import React from 'react';
import { GROUP_STAGE, IGroup } from '../../config/group-stage';
import GroupSection from '../../components/GroupsSection';

const GroupStagePage = () => {
  return (
    <div className="overflow-auto flex-1 py-5">
      {Object.values(GROUP_STAGE).map((group: IGroup) => (
        <GroupSection key={group.group} {...group} />
      ))}
    </div>
  );
};

export default GroupStagePage;
