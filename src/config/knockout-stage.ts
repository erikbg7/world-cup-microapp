import { ITeam, TEAMS } from './teams';

interface IKnockoutMatch {
  date: number;
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
      {
        date: 1670079600000,
        team1: { ...TEAMS.TBD, name: '1ºA' },
        team2: { ...TEAMS.TBD, name: '2ºB' },
      },
      {
        date: 1670094000000,
        team1: { ...TEAMS.TBD, name: '1ºC' },
        team2: { ...TEAMS.TBD, name: '2ºD' },
      },
      {
        date: 1670252400000,
        team1: { ...TEAMS.TBD, name: '1ºD' },
        team2: { ...TEAMS.TBD, name: '2ºC' },
      },
      {
        date: 1670266800000,
        team1: { ...TEAMS.TBD, name: '1ºB' },
        team2: { ...TEAMS.TBD, name: '2ºA' },
      },
      {
        date: 1670166000000,
        team1: { ...TEAMS.TBD, name: '1ºE' },
        team2: { ...TEAMS.TBD, name: '2ºF' },
      },
      {
        date: 1670180400000,
        team1: { ...TEAMS.TBD, name: '1ºG' },
        team2: { ...TEAMS.TBD, name: '2ºH' },
      },
      {
        date: 1670338800000,
        team1: { ...TEAMS.TBD, name: '1ºF' },
        team2: { ...TEAMS.TBD, name: '2ºE' },
      },
      {
        date: 1670353200000,
        team1: { ...TEAMS.TBD, name: '1ºH' },
        team2: { ...TEAMS.TBD, name: '2ºG' },
      },
    ],
  },
  {
    type: 'Quarterfinals',
    matches: [
      {
        date: 1670612400000,
        team1: TEAMS.TBD,
        team2: TEAMS.TBD,
      },
      {
        date: 1670598000000,
        team1: TEAMS.TBD,
        team2: TEAMS.TBD,
      },
      {
        date: 1670698800000,
        team1: TEAMS.TBD,
        team2: TEAMS.TBD,
      },
      {
        date: 1670684400000,
        team1: TEAMS.TBD,
        team2: TEAMS.TBD,
      },
    ],
  },
  {
    type: 'Semifinals',
    matches: [
      {
        date: 1670958000000,
        team1: { ...TEAMS.TBD, name: '1ºA' },
        team2: { ...TEAMS.TBD, name: '1ºA' },
      },
      {
        date: 1671044400000,
        team1: { ...TEAMS.TBD, name: '1ºA' },
        team2: { ...TEAMS.TBD, name: '1ºA' },
      },
    ],
  },
  {
    type: 'Final',
    matches: [
      {
        date: 1671375600000,
        team1: { ...TEAMS.TBD, name: '1ºA' },
        team2: { ...TEAMS.TBD, name: '1ºA' },
      },
    ],
  },
];
export type { IRound, IKnockoutMatch };
export { KNOCKOUT_STAGE_ROUNDS };
