import { useQuery } from '@tanstack/react-query';
import GroupSection from '../../components/GroupsSection';
import type { GroupIdentifier } from '../../models/groups';
import { getGroupStageResults } from '../../services/firebase/methods';

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as GroupIdentifier[];

const GroupStagePage = () => {
  const { data } = useQuery(['group-results'], getGroupStageResults);

  return (
    <div className="py-5">
      {GROUPS.map((group) => (
        <GroupSection key={group} group={group} teams={data?.[group]} />
      ))}
    </div>
  );
};

export default GroupStagePage;
