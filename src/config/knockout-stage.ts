import { ITeam, TEAMS } from './teams';

interface IKnockoutMatch {
  date: number;
  team1: ITeam;
  team2: ITeam;
}

interface IRound {
  type: 'Round of 16' | 'Quarterfinals' | 'Semifinals' | 'ThirdPlace' | 'Final';
  matches: IKnockoutMatch[];
}

const KNOCKOUT_STAGE_ROUNDS: IRound[] = [
  {
    type: 'Round of 16',
    matches: [
      {
        date: 1670079600000,
        team1: { ...TEAMS.Netherlands },
        team2: { ...TEAMS.USA },
      },
      {
        date: 1670094000000,
        team1: { ...TEAMS.Argentina },
        team2: { ...TEAMS.Australia },
      },
      {
        date: 1670252400000,
        team1: { ...TEAMS.Japan },
        team2: { ...TEAMS.Croatia },
      },
      {
        date: 1670266800000,
        team1: { ...TEAMS.Brazil },
        team2: { ...TEAMS.SouthKorea },
      },
      {
        date: 1670166000000,
        team1: { ...TEAMS.France },
        team2: { ...TEAMS.Poland },
      },
      {
        date: 1670180400000,
        team1: { ...TEAMS.England },
        team2: { ...TEAMS.Senegal },
      },
      {
        date: 1670338800000,
        team1: { ...TEAMS.Morocco },
        team2: { ...TEAMS.Spain },
      },
      {
        date: 1670353200000,
        team1: { ...TEAMS.Portugal },
        team2: { ...TEAMS.Switzerland },
      },
    ],
  },
  {
    type: 'Quarterfinals',
    matches: [
      {
        date: 1670612400000,
        team1: { ...TEAMS.Netherlands },
        team2: { ...TEAMS.Argentina },
      },
      {
        date: 1670598000000,
        team1: TEAMS.Croatia,
        team2: TEAMS.Brazil,
      },
      {
        date: 1670698800000,
        team1: TEAMS.France,
        team2: TEAMS.England,
      },
      {
        date: 1670684400000,
        team1: TEAMS.Morocco,
        team2: TEAMS.Portugal,
      },
    ],
  },
  {
    type: 'Semifinals',
    matches: [
      {
        date: 1670958000000,
        team2: TEAMS.Argentina,
        team1: TEAMS.Croatia,
      },
      {
        date: 1671044400000,
        team1: TEAMS.France,
        team2: TEAMS.Morocco,
      },
    ],
  },
  // {
  //   type: 'ThirdPlace',
  //   matches: [
  //     {
  //       date: 1671289200,
  //       team2: TEAMS.Morocco,
  //       team1: TEAMS.Croatia,
  //     },
  //   ],
  // },
  {
    type: 'Final',
    matches: [
      {
        date: 1671375600000,
        team1: TEAMS.Argentina,
        team2: TEAMS.France,
      },
    ],
  },
];
export type { IRound, IKnockoutMatch };
export { KNOCKOUT_STAGE_ROUNDS };
