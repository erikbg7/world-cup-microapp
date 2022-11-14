import { ITeam, TEAMS } from './teams';

interface IKnockoutMatch {
  date: string;
  team1: ITeam;
  team2: ITeam;
}

interface IRound {
  type: 'Round of 16' | 'Quarterfinals' | 'Semifinals' | 'Final';
  matches: IKnockoutMatch[];
}

const KNOCKOUT_STAGE_ROUNDS: IRound[] = [
  {
    type: 'Round of 16',
    matches: [
      { date: '3/12, 16:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '3/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '5/12, 16:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '5/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '4/12, 16:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '4/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '6/12, 16:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '6/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
    ],
  },
  {
    type: 'Quarterfinals',
    matches: [
      { date: '9/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '9/12, 16:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '10/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '10/12, 16:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
    ],
  },
  {
    type: 'Semifinals',
    matches: [
      { date: '13/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
      { date: '14/12, 20:00', team1: TEAMS.TBD, team2: TEAMS.TBD },
    ],
  },
  {
    type: 'Final',
    matches: [{ date: '18/12, 16:00', team1: TEAMS.TBD, team2: TEAMS.TBD }],
  },
];
export type { IRound, IKnockoutMatch };
export { KNOCKOUT_STAGE_ROUNDS };
