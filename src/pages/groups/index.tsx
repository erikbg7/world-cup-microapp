import { GetServerSideProps, NextPage } from 'next';
import GroupSection from '../../components/GroupsSection';
import { ITeam } from '../../config/teams';
import { fetchGroupStageResults } from '../../services/api';

type GroupIdentifier = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

interface IGroupStageTeamResults {
  name: ITeam['name'];
  played: string;
  won: string;
  lost: string;
  draw: string;
  points: string;
}

interface IGroupResults extends Record<GroupIdentifier, IGroupStageTeamResults[]> {}

const GroupStagePage: NextPage<{ results: IGroupResults }> = ({ results }) => {
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

// TODO: Convert to ISR
const getServerSideProps = async () => {
  try {
    const results = await fetchGroupStageResults();
    return {
      props: { results: results },
      // revalidate: 30,
    };
  } catch (e) {
    console.error({ e });
    return { props: { results: {} } };
  }
};

export { getServerSideProps };
export default GroupStagePage;

export type { GroupIdentifier, IGroupResults, IGroupStageTeamResults };
