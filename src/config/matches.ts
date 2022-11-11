import { COUNTRIES } from './groups';

interface IMatch {
  group?: string;
  time: string;
  team1: string;
  team2: string;
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
        team1: COUNTRIES.Qatar,
        team2: COUNTRIES.Ecuador,
      },
    ],
  },
  'Group Stage · Mon, Nov 21': {
    day: 'Mon, Nov 21',
    matches: [
      {
        group: 'B',
        time: '12:00',
        team1: COUNTRIES.England,
        team2: COUNTRIES.Iran,
      },
      {
        group: 'B',
        time: '17:00',
        team1: COUNTRIES.Senegal,
        team2: COUNTRIES.Netherlands,
      },
      {
        group: 'B',
        time: '20:00',
        team1: COUNTRIES.USA,
        team2: COUNTRIES.Wales,
      },
    ],
  },
  'Group Stage · Tue, Nov 22': {
    day: 'Tue, Nov 22',
    matches: [
      {
        group: 'C',
        time: '11:00',
        team1: COUNTRIES.Argentina,
        team2: COUNTRIES.SaudiArabia,
      },
      {
        group: 'C',
        time: '14:00',
        team1: COUNTRIES.Denmark,
        team2: COUNTRIES.Tunisia,
      },
      {
        group: 'C',
        time: '17:00',
        team1: COUNTRIES.Mexico,
        team2: COUNTRIES.Poland,
      },
      {
        group: 'C',
        time: '20:00',
        team1: COUNTRIES.France,
        team2: COUNTRIES.Australia,
      },
    ],
  },
  'Group Stage · Wed, Nov 23': {
    day: 'Wed, Nov 23',
    matches: [
      {
        group: 'F',
        time: '11:00',
        team1: COUNTRIES.Morocco,
        team2: COUNTRIES.Croatia,
      },
      {
        group: 'E',
        time: '14:00',
        team1: COUNTRIES.Germany,
        team2: COUNTRIES.Japan,
      },
      {
        group: 'E',
        time: '17:00',
        team1: COUNTRIES.Spain,
        team2: COUNTRIES.CostaRica,
      },
      {
        group: 'F',
        time: '20:00',
        team1: COUNTRIES.Belgium,
        team2: COUNTRIES.Canada,
      },
    ],
  },
  'Group Stage · Thu, Nov 24': {
    day: 'Thu, Nov 24',
    matches: [
      {
        group: 'G',
        time: '11:00',
        team1: COUNTRIES.Switzerland,
        team2: COUNTRIES.Cameroon,
      },
      {
        group: 'H',
        time: '14:00',
        team1: COUNTRIES.Uruguay,
        team2: COUNTRIES.SouthKorea,
      },
      {
        group: 'H',
        time: '17:00',
        team1: COUNTRIES.Portugal,
        team2: COUNTRIES.Ghana,
      },
      {
        group: 'G',
        time: '20:00',
        team1: COUNTRIES.Brazil,
        team2: COUNTRIES.Serbia,
      },
    ],
  },
  'Group Stage · Fri, Nov 25': {
    day: 'Fri, Nov 25',
    matches: [
      {
        group: 'B',
        time: '11:00',
        team1: COUNTRIES.Wales,
        team2: COUNTRIES.Iran,
      },
      {
        group: 'A',
        time: '14:00',
        team1: COUNTRIES.Qatar,
        team2: COUNTRIES.Senegal,
      },
      {
        group: 'A',
        time: '17:00',
        team1: COUNTRIES.Netherlands,
        team2: COUNTRIES.Ecuador,
      },
      {
        group: 'B',
        time: '20:00',
        team1: COUNTRIES.England,
        team2: COUNTRIES.USA,
      },
    ],
  },
  'Group Stage · Sat, Nov 26': {
    day: 'Sat, Nov 26',
    matches: [
      {
        group: 'D',
        time: '11:00',
        team1: COUNTRIES.Tunisia,
        team2: COUNTRIES.Australia,
      },
      {
        group: 'C',
        time: '14:00',
        team1: COUNTRIES.Poland,
        team2: COUNTRIES.SaudiArabia,
      },
      {
        group: 'D',
        time: '17:00',
        team1: COUNTRIES.France,
        team2: COUNTRIES.Denmark,
      },
      {
        group: 'C',
        time: '20:00',
        team1: COUNTRIES.Argentina,
        team2: COUNTRIES.Mexico,
      },
    ],
  },
  'Group Stage · Sun, Nov 27': {
    day: 'Sun, Nov 27',
    matches: [
      {
        group: 'E',
        time: '11:00',
        team1: COUNTRIES.Japan,
        team2: COUNTRIES.CostaRica,
      },
      {
        group: 'F',
        time: '14:00',
        team1: COUNTRIES.Belgium,
        team2: COUNTRIES.Morocco,
      },
      {
        group: 'F',
        time: '17:00',
        team1: COUNTRIES.Croatia,
        team2: COUNTRIES.Canada,
      },
      {
        group: 'E',
        time: '20:00',
        team1: COUNTRIES.Spain,
        team2: COUNTRIES.Germany,
      },
    ],
  },
  'Group Stage · Mon, Nov 28': {
    day: 'Mon, Nov 28',
    matches: [
      {
        group: 'G',
        time: '11:00',
        team1: COUNTRIES.Cameroon,
        team2: COUNTRIES.Serbia,
      },
      {
        group: 'H',
        time: '14:00',
        team1: COUNTRIES.SouthKorea,
        team2: COUNTRIES.Ghana,
      },
      {
        group: 'G',
        time: '17:00',
        team1: COUNTRIES.Brazil,
        team2: COUNTRIES.Switzerland,
      },
      {
        group: 'H',
        time: '20:00',
        team1: COUNTRIES.Portugal,
        team2: COUNTRIES.Uruguay,
      },
    ],
  },
  'Group Stage · Tue, Nov 29': {
    day: 'Tue, Nov 29',
    matches: [
      {
        group: 'A',
        time: '16:00',
        team1: COUNTRIES.Ecuador,
        team2: COUNTRIES.Senegal,
      },
      {
        group: 'A',
        time: '16:00',
        team1: COUNTRIES.Netherlands,
        team2: COUNTRIES.Qatar,
      },
      {
        group: 'B',
        time: '20:00',
        team1: COUNTRIES.Iran,
        team2: COUNTRIES.USA,
      },
      {
        group: 'B',
        time: '20:00',
        team1: COUNTRIES.Wales,
        team2: COUNTRIES.England,
      },
    ],
  },
  'Group Stage · Wed, Nov 30': {
    day: 'Wed, Nov 30',
    matches: [
      {
        group: 'D',
        time: '16:00',
        team1: COUNTRIES.Tunisia,
        team2: COUNTRIES.France,
      },
      {
        group: 'D',
        time: '16:00',
        team1: COUNTRIES.Australia,
        team2: COUNTRIES.Denmark,
      },
      {
        group: 'C',
        time: '20:00',
        team1: COUNTRIES.Poland,
        team2: COUNTRIES.Argentina,
      },
      {
        group: 'C',
        time: '20:00',
        team1: COUNTRIES.SaudiArabia,
        team2: COUNTRIES.Mexico,
      },
    ],
  },
  'Group Stage · Thu, Dec 1': {
    day: 'Thu, Dec 1',
    matches: [
      {
        group: 'F',
        time: '16:00',
        team1: COUNTRIES.Croatia,
        team2: COUNTRIES.Belgium,
      },
      {
        group: 'F',
        time: '16:00',
        team1: COUNTRIES.Canada,
        team2: COUNTRIES.Morocco,
      },
      {
        group: 'E',
        time: '20:00',
        team1: COUNTRIES.Japan,
        team2: COUNTRIES.Spain,
      },
      {
        group: 'E',
        time: '20:00',
        team1: COUNTRIES.CostaRica,
        team2: COUNTRIES.Germany,
      },
    ],
  },
  'Group Stage · Fri, Dec 2': {
    day: 'Fri, Dec 2',
    matches: [
      {
        group: 'H',
        time: '16:00',
        team1: COUNTRIES.SouthKorea,
        team2: COUNTRIES.Portugal,
      },
      {
        group: 'H',
        time: '16:00',
        team1: COUNTRIES.Ghana,
        team2: COUNTRIES.Uruguay,
      },
      {
        group: 'G',
        time: '20:00',
        team1: COUNTRIES.Serbia,
        team2: COUNTRIES.Switzerland,
      },
      {
        group: 'G',
        time: '20:00',
        team1: COUNTRIES.Cameroon,
        team2: COUNTRIES.Brazil,
      },
    ],
  },
};

export { GROUP_STAGE_MATCHES };
export type { IMatch, IMatchDay };
