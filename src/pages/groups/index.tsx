import { useQuery } from '@tanstack/react-query';
import GroupSection from '../../components/GroupsSection';
import GroupsSectionSkeleton from '../../components/GroupsSectionSkeleton';
import { fetchGroupStageResults } from '../../services/api';
import type { GroupIdentifier, IGroupResults, IGroupStageTeamResults } from '../../models/groups';

const GroupStagePage = () => {
  const { data, isError, isLoading } = useQuery(['groupResults'], fetchGroupStageResults);
  const results = data as IGroupResults;

  if (isError || isLoading) {
    return (
      <div className="overflow-auto flex-1 py-5">
        <div className="my-7 mx-2">
          <h2 className="text-xl p-3">Group A</h2>
          <GroupsSectionSkeleton />
        </div>
        <div className="my-7 mx-2">
          <h2 className="text-xl p-3">Group B</h2>
          <GroupsSectionSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-auto flex-1 py-5">
      {Object.entries(results).map(([group, teams]) => (
        <GroupSection
          key={group}
          group={group as GroupIdentifier}
          teams={teams as IGroupStageTeamResults[]}
        />
      ))}
    </div>
  );
};

export default GroupStagePage;
