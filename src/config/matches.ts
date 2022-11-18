import { ITeam, TEAMS } from './teams';
import { GroupIdentifier } from '../models/groups';
import { STADIUMS, Stadium } from './stadiums';

interface IMatch {
  group?: GroupIdentifier;
  stadium?: Stadium;
  time: number;
  team1: ITeam;
  team2: ITeam;
}

interface IMatchDay {
  day: number;
  matches: IMatch[];
}

const GROUP_STAGE_MATCHES: Record<string, IMatchDay> = {
  'Group Stage · Sun, Nov 20': {
    day: 1668960000000,
    matches: [
      {
        group: 'A',
        stadium: STADIUMS.AlBaytStadium,
        time: 1668960000000,
        team1: TEAMS.Qatar,
        team2: TEAMS.Ecuador,
      },
    ],
  },
  'Group Stage · Mon, Nov 21': {
    day: 1669028400000,
    matches: [
      {
        group: 'B',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669028400000,
        team1: TEAMS.England,
        team2: TEAMS.Iran,
      },
      {
        group: 'A',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669046400000,
        team1: TEAMS.Senegal,
        team2: TEAMS.Netherlands,
      },
      {
        group: 'B',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669057200000,
        team1: TEAMS.USA,
        team2: TEAMS.Wales,
      },
    ],
  },
  'Group Stage · Tue, Nov 22': {
    day: 1669111200000,
    matches: [
      {
        group: 'C',
        stadium: STADIUMS.LusailStadium,
        time: 1669111200000,
        team1: TEAMS.Argentina,
        team2: TEAMS.SaudiArabia,
      },
      {
        group: 'D',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669122000000,
        team1: TEAMS.Denmark,
        team2: TEAMS.Tunisia,
      },
      {
        group: 'C',
        stadium: STADIUMS.Stadium974,
        time: 1669132800000,
        team1: TEAMS.Mexico,
        team2: TEAMS.Poland,
      },
      {
        group: 'D',
        stadium: STADIUMS.AlJanoubStadium,
        time: 1669143600000,
        team1: TEAMS.France,
        team2: TEAMS.Australia,
      },
    ],
  },
  'Group Stage · Wed, Nov 23': {
    day: 1669197600000,
    matches: [
      {
        group: 'F',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669197600000,
        team1: TEAMS.Morocco,
        team2: TEAMS.Croatia,
      },
      {
        group: 'E',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669208400000,
        team1: TEAMS.Germany,
        team2: TEAMS.Japan,
      },
      {
        group: 'E',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669219200000,
        team1: TEAMS.Spain,
        team2: TEAMS.CostaRica,
      },
      {
        group: 'F',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669230000000,
        team1: TEAMS.Belgium,
        team2: TEAMS.Canada,
      },
    ],
  },
  'Group Stage · Thu, Nov 24': {
    day: 1669284000000,
    matches: [
      {
        group: 'G',
        stadium: STADIUMS.AlJanoubStadium,
        time: 1669284000000,
        team1: TEAMS.Switzerland,
        team2: TEAMS.Cameroon,
      },
      {
        group: 'H',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669294800000,
        team1: TEAMS.Uruguay,
        team2: TEAMS.SouthKorea,
      },
      {
        group: 'H',
        stadium: STADIUMS.Stadium974,
        time: 1669305600000,
        team1: TEAMS.Portugal,
        team2: TEAMS.Ghana,
      },
      {
        group: 'G',
        stadium: STADIUMS.LusailStadium,
        time: 1669316400000,
        team1: TEAMS.Brazil,
        team2: TEAMS.Serbia,
      },
    ],
  },
  'Group Stage · Fri, Nov 25': {
    day: 1669370400000,
    matches: [
      {
        group: 'B',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669370400000,
        team1: TEAMS.Wales,
        team2: TEAMS.Iran,
      },
      {
        group: 'A',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669381200000,
        team1: TEAMS.Qatar,
        team2: TEAMS.Senegal,
      },
      {
        group: 'A',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669392000000,
        team1: TEAMS.Netherlands,
        team2: TEAMS.Ecuador,
      },
      {
        group: 'B',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669402800000,
        team1: TEAMS.England,
        team2: TEAMS.USA,
      },
    ],
  },
  'Group Stage · Sat, Nov 26': {
    day: 1669456800000,
    matches: [
      {
        group: 'D',
        stadium: STADIUMS.AlJanoubStadium,
        time: 1669456800000,
        team1: TEAMS.Tunisia,
        team2: TEAMS.Australia,
      },
      {
        group: 'C',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669467600000,
        team1: TEAMS.Poland,
        team2: TEAMS.SaudiArabia,
      },
      {
        group: 'D',
        stadium: STADIUMS.Stadium974,
        time: 1669478400000,
        team1: TEAMS.France,
        team2: TEAMS.Denmark,
      },
      {
        group: 'C',
        stadium: STADIUMS.LusailStadium,
        time: 1669489200000,
        team1: TEAMS.Argentina,
        team2: TEAMS.Mexico,
      },
    ],
  },
  'Group Stage · Sun, Nov 27': {
    day: 1669543200000,
    matches: [
      {
        group: 'E',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669543200000,
        team1: TEAMS.Japan,
        team2: TEAMS.CostaRica,
      },
      {
        group: 'F',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669554000000,
        team1: TEAMS.Belgium,
        team2: TEAMS.Morocco,
      },
      {
        group: 'F',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669564800000,
        team1: TEAMS.Croatia,
        team2: TEAMS.Canada,
      },
      {
        group: 'E',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669575600000,
        team1: TEAMS.Spain,
        team2: TEAMS.Germany,
      },
    ],
  },
  'Group Stage · Mon, Nov 28': {
    day: 1669629600000,
    matches: [
      {
        group: 'G',
        stadium: STADIUMS.AlJanoubStadium,
        time: 1669629600000,
        team1: TEAMS.Cameroon,
        team2: TEAMS.Serbia,
      },
      {
        group: 'H',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669640400000,
        team1: TEAMS.SouthKorea,
        team2: TEAMS.Ghana,
      },
      {
        group: 'G',
        stadium: STADIUMS.Stadium974,
        time: 1669651200000,
        team1: TEAMS.Brazil,
        team2: TEAMS.Switzerland,
      },
      {
        group: 'H',
        stadium: STADIUMS.LusailStadium,
        time: 1669662000000,
        team1: TEAMS.Portugal,
        team2: TEAMS.Uruguay,
      },
    ],
  },
  'Group Stage · Tue, Nov 29': {
    day: 1669734000000,
    matches: [
      {
        group: 'A',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669734000000,
        team1: TEAMS.Ecuador,
        team2: TEAMS.Senegal,
      },
      {
        group: 'A',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669734000000,
        team1: TEAMS.Netherlands,
        team2: TEAMS.Qatar,
      },
      {
        group: 'B',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669748400000,
        team1: TEAMS.Iran,
        team2: TEAMS.USA,
      },
      {
        group: 'B',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669748400000,
        team1: TEAMS.Wales,
        team2: TEAMS.England,
      },
    ],
  },
  'Group Stage · Wed, Nov 30': {
    day: 1669820400000,
    matches: [
      {
        group: 'D',
        stadium: STADIUMS.AlJanoubStadium,
        time: 1669820400000,
        team1: TEAMS.Tunisia,
        team2: TEAMS.France,
      },
      {
        group: 'D',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669820400000,
        team1: TEAMS.Australia,
        team2: TEAMS.Denmark,
      },
      {
        group: 'C',
        stadium: STADIUMS.Stadium974,
        time: 1669834800000,
        team1: TEAMS.Poland,
        team2: TEAMS.Argentina,
      },
      {
        group: 'C',
        stadium: STADIUMS.LusailStadium,
        time: 1669834800000,
        team1: TEAMS.SaudiArabia,
        team2: TEAMS.Mexico,
      },
    ],
  },
  'Group Stage · Thu, Dec 1': {
    day: 1669906800000,
    matches: [
      {
        group: 'F',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669906800000,
        team1: TEAMS.Croatia,
        team2: TEAMS.Belgium,
      },
      {
        group: 'F',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669906800000,
        team1: TEAMS.Canada,
        team2: TEAMS.Morocco,
      },
      {
        group: 'E',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669921200000,
        team1: TEAMS.Japan,
        team2: TEAMS.Spain,
      },
      {
        group: 'E',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669921200000,
        team1: TEAMS.CostaRica,
        team2: TEAMS.Germany,
      },
    ],
  },
  'Group Stage · Fri, Dec 2': {
    day: 1669993200000,
    matches: [
      {
        group: 'H',
        stadium: STADIUMS.AlJanoubStadium,
        time: 1669993200000,
        team1: TEAMS.SouthKorea,
        team2: TEAMS.Portugal,
      },
      {
        group: 'H',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669993200000,
        team1: TEAMS.Ghana,
        team2: TEAMS.Uruguay,
      },
      {
        group: 'G',
        stadium: STADIUMS.Stadium974,
        time: 1670007600000,
        team1: TEAMS.Serbia,
        team2: TEAMS.Switzerland,
      },
      {
        group: 'G',
        stadium: STADIUMS.LusailStadium,
        time: 1670007600000,
        team1: TEAMS.Cameroon,
        team2: TEAMS.Brazil,
      },
    ],
  },
};

export { GROUP_STAGE_MATCHES };
export type { IMatch, IMatchDay };
