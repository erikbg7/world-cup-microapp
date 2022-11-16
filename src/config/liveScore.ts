import { ITeam, TEAMS } from './teams';

interface ILiveMatch {
  group: string;
  time: string;
  team1: ITeam;
  team2: ITeam;
  scores: string[];
  result: string;
}
const LIVE_SCORES: ILiveMatch[] = [
  {
    group: 'Group A',
    time: '1668902400000', //1668613400622
    team1: TEAMS.Qatar,
    team2: TEAMS.Ecuador,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group A',
    time: '1668988800000',
    team1: TEAMS.Senegal,
    team2: TEAMS.Netherlands,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group B',
    time: '1668988800000',
    team1: TEAMS.England,
    team2: TEAMS.Iran,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group B',
    time: '1669075200000',
    team1: TEAMS.USA,
    team2: TEAMS.Wales,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group C',
    time: '1669075200000',
    team1: TEAMS.Argentina,
    team2: TEAMS.SaudiArabia,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group C',
    time: '1669075200000',
    team1: TEAMS.Mexico,
    team2: TEAMS.Poland,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group D',
    time: '1669075200000',
    team1: TEAMS.Denmark,
    team2: TEAMS.Tunisia,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group D',
    time: '1669161600000',
    team1: TEAMS.France,
    team2: TEAMS.Australia,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group E',
    time: '1669161600000',
    team1: TEAMS.Germany,
    team2: TEAMS.Japan,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group E',
    time: '1669161600000',
    team1: TEAMS.Spain,
    team2: TEAMS.CostaRica,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group F',
    time: '1669161600000',
    team1: TEAMS.Morocco,
    team2: TEAMS.Croatia,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group F',
    time: '1669248000000',
    team1: TEAMS.Belgium,
    team2: TEAMS.Canada,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group G',
    time: '1669248000000',
    team1: TEAMS.Switzerland,
    team2: TEAMS.Cameroon,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group G',
    time: '1669334400000',
    team1: TEAMS.Brazil,
    team2: TEAMS.Serbia,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group H',
    time: '1669248000000',
    team1: TEAMS.Uruguay,
    team2: TEAMS.SouthKorea,
    scores: ['0', '0'],
    result: '',
  },
  {
    group: 'Group H',
    time: '1669248000000',
    team1: TEAMS.Portugal,
    team2: TEAMS.Ghana,
    scores: ['0', '0'],
    result: '',
  },
];

export { LIVE_SCORES };
export type { ILiveMatch };
