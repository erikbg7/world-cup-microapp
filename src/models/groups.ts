import { ITeam } from '../config/teams';

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

export type { GroupIdentifier, IGroupResults, IGroupStageTeamResults };
