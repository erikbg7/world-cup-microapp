import { ITeam, TEAMS } from './teams';

interface IMatch {
  group?: string;
  time: string;
  team1: ITeam;
  team2: ITeam;
}

interface IMatchDay {
  day: string;
  matches: IMatch[];
}

const GROUP_STAGE_MATCHES: Record<string, IMatchDay> = {
  'Group Stage · Sun, Nov 20': {
    day: 'Sun, Nov 20',
    matches: [
      {
        group: 'A',
        time: '17:00',
        team1: TEAMS.Qatar,
        team2: TEAMS.Ecuador,
      },
    ],
  },
  'Group Stage · Mon, Nov 21': {
    day: 'Mon, Nov 21',
    matches: [
      {
        group: 'B',
        time: '12:00',
        team1: TEAMS.England,
        team2: TEAMS.Iran,
      },
      {
        group: 'B',
        time: '17:00',
        team1: TEAMS.Senegal,
        team2: TEAMS.Netherlands,
      },
      {
        group: 'B',
        time: '20:00',
        team1: TEAMS.USA,
        team2: TEAMS.Wales,
      },
    ],
  },
  'Group Stage · Tue, Nov 22': {
    day: 'Tue, Nov 22',
    matches: [
      {
        group: 'C',
        time: '11:00',
        team1: TEAMS.Argentina,
        team2: TEAMS.SaudiArabia,
      },
      {
        group: 'C',
        time: '14:00',
        team1: TEAMS.Denmark,
        team2: TEAMS.Tunisia,
      },
      {
        group: 'C',
        time: '17:00',
        team1: TEAMS.Mexico,
        team2: TEAMS.Poland,
      },
      {
        group: 'C',
        time: '20:00',
        team1: TEAMS.France,
        team2: TEAMS.Australia,
      },
    ],
  },
  'Group Stage · Wed, Nov 23': {
    day: 'Wed, Nov 23',
    matches: [
      {
        group: 'F',
        time: '11:00',
        team1: TEAMS.Morocco,
        team2: TEAMS.Croatia,
      },
      {
        group: 'E',
        time: '14:00',
        team1: TEAMS.Germany,
        team2: TEAMS.Japan,
      },
      {
        group: 'E',
        time: '17:00',
        team1: TEAMS.Spain,
        team2: TEAMS.CostaRica,
      },
      {
        group: 'F',
        time: '20:00',
        team1: TEAMS.Belgium,
        team2: TEAMS.Canada,
      },
    ],
  },
  'Group Stage · Thu, Nov 24': {
    day: 'Thu, Nov 24',
    matches: [
      {
        group: 'G',
        time: '11:00',
        team1: TEAMS.Switzerland,
        team2: TEAMS.Cameroon,
      },
      {
        group: 'H',
        time: '14:00',
        team1: TEAMS.Uruguay,
        team2: TEAMS.SouthKorea,
      },
      {
        group: 'H',
        time: '17:00',
        team1: TEAMS.Portugal,
        team2: TEAMS.Ghana,
      },
      {
        group: 'G',
        time: '20:00',
        team1: TEAMS.Brazil,
        team2: TEAMS.Serbia,
      },
    ],
  },
  'Group Stage · Fri, Nov 25': {
    day: 'Fri, Nov 25',
    matches: [
      {
        group: 'B',
        time: '11:00',
        team1: TEAMS.Wales,
        team2: TEAMS.Iran,
      },
      {
        group: 'A',
        time: '14:00',
        team1: TEAMS.Qatar,
        team2: TEAMS.Senegal,
      },
      {
        group: 'A',
        time: '17:00',
        team1: TEAMS.Netherlands,
        team2: TEAMS.Ecuador,
      },
      {
        group: 'B',
        time: '20:00',
        team1: TEAMS.England,
        team2: TEAMS.USA,
      },
    ],
  },
  'Group Stage · Sat, Nov 26': {
    day: 'Sat, Nov 26',
    matches: [
      {
        group: 'D',
        time: '11:00',
        team1: TEAMS.Tunisia,
        team2: TEAMS.Australia,
      },
      {
        group: 'C',
        time: '14:00',
        team1: TEAMS.Poland,
        team2: TEAMS.SaudiArabia,
      },
      {
        group: 'D',
        time: '17:00',
        team1: TEAMS.France,
        team2: TEAMS.Denmark,
      },
      {
        group: 'C',
        time: '20:00',
        team1: TEAMS.Argentina,
        team2: TEAMS.Mexico,
      },
    ],
  },
  'Group Stage · Sun, Nov 27': {
    day: 'Sun, Nov 27',
    matches: [
      {
        group: 'E',
        time: '11:00',
        team1: TEAMS.Japan,
        team2: TEAMS.CostaRica,
      },
      {
        group: 'F',
        time: '14:00',
        team1: TEAMS.Belgium,
        team2: TEAMS.Morocco,
      },
      {
        group: 'F',
        time: '17:00',
        team1: TEAMS.Croatia,
        team2: TEAMS.Canada,
      },
      {
        group: 'E',
        time: '20:00',
        team1: TEAMS.Spain,
        team2: TEAMS.Germany,
      },
    ],
  },
  'Group Stage · Mon, Nov 28': {
    day: 'Mon, Nov 28',
    matches: [
      {
        group: 'G',
        time: '11:00',
        team1: TEAMS.Cameroon,
        team2: TEAMS.Serbia,
      },
      {
        group: 'H',
        time: '14:00',
        team1: TEAMS.SouthKorea,
        team2: TEAMS.Ghana,
      },
      {
        group: 'G',
        time: '17:00',
        team1: TEAMS.Brazil,
        team2: TEAMS.Switzerland,
      },
      {
        group: 'H',
        time: '20:00',
        team1: TEAMS.Portugal,
        team2: TEAMS.Uruguay,
      },
    ],
  },
  'Group Stage · Tue, Nov 29': {
    day: 'Tue, Nov 29',
    matches: [
      {
        group: 'A',
        time: '16:00',
        team1: TEAMS.Ecuador,
        team2: TEAMS.Senegal,
      },
      {
        group: 'A',
        time: '16:00',
        team1: TEAMS.Netherlands,
        team2: TEAMS.Qatar,
      },
      {
        group: 'B',
        time: '20:00',
        team1: TEAMS.Iran,
        team2: TEAMS.USA,
      },
      {
        group: 'B',
        time: '20:00',
        team1: TEAMS.Wales,
        team2: TEAMS.England,
      },
    ],
  },
  'Group Stage · Wed, Nov 30': {
    day: 'Wed, Nov 30',
    matches: [
      {
        group: 'D',
        time: '16:00',
        team1: TEAMS.Tunisia,
        team2: TEAMS.France,
      },
      {
        group: 'D',
        time: '16:00',
        team1: TEAMS.Australia,
        team2: TEAMS.Denmark,
      },
      {
        group: 'C',
        time: '20:00',
        team1: TEAMS.Poland,
        team2: TEAMS.Argentina,
      },
      {
        group: 'C',
        time: '20:00',
        team1: TEAMS.SaudiArabia,
        team2: TEAMS.Mexico,
      },
    ],
  },
  'Group Stage · Thu, Dec 1': {
    day: 'Thu, Dec 1',
    matches: [
      {
        group: 'F',
        time: '16:00',
        team1: TEAMS.Croatia,
        team2: TEAMS.Belgium,
      },
      {
        group: 'F',
        time: '16:00',
        team1: TEAMS.Canada,
        team2: TEAMS.Morocco,
      },
      {
        group: 'E',
        time: '20:00',
        team1: TEAMS.Japan,
        team2: TEAMS.Spain,
      },
      {
        group: 'E',
        time: '20:00',
        team1: TEAMS.CostaRica,
        team2: TEAMS.Germany,
      },
    ],
  },
  'Group Stage · Fri, Dec 2': {
    day: 'Fri, Dec 2',
    matches: [
      {
        group: 'H',
        time: '16:00',
        team1: TEAMS.SouthKorea,
        team2: TEAMS.Portugal,
      },
      {
        group: 'H',
        time: '16:00',
        team1: TEAMS.Ghana,
        team2: TEAMS.Uruguay,
      },
      {
        group: 'G',
        time: '20:00',
        team1: TEAMS.Serbia,
        team2: TEAMS.Switzerland,
      },
      {
        group: 'G',
        time: '20:00',
        team1: TEAMS.Cameroon,
        team2: TEAMS.Brazil,
      },
    ],
  },
};

export { GROUP_STAGE_MATCHES };
export type { IMatch, IMatchDay };
