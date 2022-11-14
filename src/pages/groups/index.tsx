import fs from 'fs';
import path from 'path';
import { NextPage } from 'next';
import GroupSection from '../../components/GroupsSection';
import { ITeam } from '../../config/teams';

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
    <div className="responsive-screen py-20">
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

const getServerSideProps = async () => {
  try {
    const response = await fetch('/api/group-results');
    const results = response.json();

    return {
      props: { results },
      revalidate: 30,
    };
  } catch (_) {
    const grupResultsPath = path.join(process.cwd(), 'content', 'results.json');
    const groupResultsFile = fs.readFileSync(grupResultsPath, 'utf8');
    const results = JSON.parse(groupResultsFile) as IGroupResults;

    return {
      props: { results },
      revalidate: 30,
    };
  }
};

export { getServerSideProps };
export default GroupStagePage;

export type { GroupIdentifier, IGroupResults, IGroupStageTeamResults };
