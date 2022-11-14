import React from 'react';
import { GROUP_STAGE, IGroup } from '../../config/group-stage';
import GroupSection from '../../components/GroupsSection';

const GroupStagePage = () => {
  return (
    <div className="responsive-screen py-20">
      {Object.values(GROUP_STAGE).map((group: IGroup) => (
        <GroupSection key={group.group} {...group} />
      ))}
    </div>
  );
};

export default GroupStagePage;
