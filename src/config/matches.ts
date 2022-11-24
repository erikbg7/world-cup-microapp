import { ITeam, TEAMS } from './teams';
import { GroupIdentifier } from '../models/groups';
import { STADIUMS, Stadium } from './stadiums';

interface IMatch {
  group?: GroupIdentifier;
  stadium?: Stadium;
  time: number;
  team1: ITeam;
  team2: ITeam;
  scores?: string[];
  matchId?: string;
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
        scores: ['0', '2'],
        matchId: 'group-a/qatar-vs-ecuador/587251',
      },
    ],
  },
  'Group Stage · Mon, Nov 21': {
    day: 1669035600000,
    matches: [
      {
        group: 'B',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669035600000,
        team1: TEAMS.England,
        team2: TEAMS.Iran,
        scores: ['6', '2'],
        matchId: 'group-b/england-vs-iran/663898',
      },
      {
        group: 'A',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669046400000,
        team1: TEAMS.Senegal,
        team2: TEAMS.Netherlands,
        scores: ['0', '2'],
        matchId: 'group-a/senegal-vs-netherlands/663891',
      },
      {
        group: 'B',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669057200000,
        team1: TEAMS.USA,
        team2: TEAMS.Wales,
        scores: ['1', '1'],
        matchId: 'group-b/usa-vs-wales/663894',
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
        scores: ['1', '2'],
        matchId: 'argentina-vs-saudi-arabia/663904',
      },
      {
        group: 'D',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669122000000,
        team1: TEAMS.Denmark,
        team2: TEAMS.Tunisia,
        matchId: 'group-d/denmark-vs-tunisia/663911',
        scores: ['0', '0'],
      },
      {
        group: 'C',
        stadium: STADIUMS.Stadium974,
        time: 1669132800000,
        team1: TEAMS.Mexico,
        team2: TEAMS.Poland,
        matchId: 'group-c/mexico-vs-poland/663905',
        scores: ['0', '0'],
      },
      {
        group: 'D',
        stadium: STADIUMS.AlJanoubStadium,
        time: 1669143600000,
        team1: TEAMS.France,
        team2: TEAMS.Australia,
        matchId: 'group-d/france-vs-australia/663910',
        scores: ['4', '1'],
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
        matchId: 'group-f/morocco-vs-croatia/663921',
        scores: ['0', '0'],
      },
      {
        group: 'E',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669208400000,
        team1: TEAMS.Germany,
        team2: TEAMS.Japan,
        matchId: 'group-e/germany-vs-japan/663912',
        scores: ['1', '2'],
      },
      {
        group: 'E',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669219200000,
        team1: TEAMS.Spain,
        team2: TEAMS.CostaRica,
        matchId: 'group-e/spain-vs-costa-rica/663913',
        scores: ['7', '0'],
      },
      {
        group: 'F',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669230000000,
        team1: TEAMS.Belgium,
        team2: TEAMS.Canada,
        matchId: 'group-f/belgium-vs-canada/663920',
        scores: ['1', '0'],
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
        matchId: 'group-g/switzerland-vs-cameroon/663924',
        scores: ['1', '0'],
      },
      {
        group: 'H',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669294800000,
        team1: TEAMS.Uruguay,
        team2: TEAMS.SouthKorea,
        matchId: 'group-h/uruguay-vs-south-korea/663931',
      },
      {
        group: 'H',
        stadium: STADIUMS.Stadium974,
        time: 1669305600000,
        team1: TEAMS.Portugal,
        team2: TEAMS.Ghana,
        matchId: 'group-h/portugal-vs-ghana/663930',
      },
      {
        group: 'G',
        stadium: STADIUMS.LusailStadium,
        time: 1669316400000,
        team1: TEAMS.Brazil,
        team2: TEAMS.Serbia,
        matchId: 'group-g/brazil-vs-serbia/663925',
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
        matchId: 'group-b/wales-vs-iran/663895',
      },
      {
        group: 'A',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669381200000,
        team1: TEAMS.Qatar,
        team2: TEAMS.Senegal,
        matchId: 'group-a/qatar-vs-senegal/663889',
      },
      {
        group: 'A',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669392000000,
        team1: TEAMS.Netherlands,
        team2: TEAMS.Ecuador,
        matchId: 'group-a/netherlands-vs-ecuador/663890',
      },
      {
        group: 'B',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669402800000,
        team1: TEAMS.England,
        team2: TEAMS.USA,
        matchId: 'group-b/england-vs-usa/663896',
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
        matchId: 'group-d/tunisia-vs-australia/663906',
      },
      {
        group: 'C',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669467600000,
        team1: TEAMS.Poland,
        team2: TEAMS.SaudiArabia,
        matchId: 'group-c/poland-vs-saudi-arabia/663900',
      },
      {
        group: 'D',
        stadium: STADIUMS.Stadium974,
        time: 1669478400000,
        team1: TEAMS.France,
        team2: TEAMS.Denmark,
        matchId: 'group-d/france-vs-denmark/663907',
      },
      {
        group: 'C',
        stadium: STADIUMS.LusailStadium,
        time: 1669489200000,
        team1: TEAMS.Argentina,
        team2: TEAMS.Mexico,
        matchId: 'group-c/argentina-vs-mexico/663901',
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
        matchId: 'group-e/japan-vs-costa-rica/663915',
      },
      {
        group: 'F',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669554000000,
        team1: TEAMS.Belgium,
        team2: TEAMS.Morocco,
        matchId: 'group-f/belgium-vs-morocco/663919',
      },
      {
        group: 'F',
        stadium: STADIUMS.KhalifaInternationalStadium,
        time: 1669564800000,
        team1: TEAMS.Croatia,
        team2: TEAMS.Canada,
        matchId: 'group-f/croatia-vs-canada/663918',
      },
      {
        group: 'E',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669575600000,
        team1: TEAMS.Spain,
        team2: TEAMS.Germany,
        matchId: 'group-e/spain-vs-germany/663914',
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
        matchId: 'group-g/cameroon-vs-serbia/663926',
      },
      {
        group: 'H',
        stadium: STADIUMS.EducationCityStadium,
        time: 1669640400000,
        team1: TEAMS.SouthKorea,
        team2: TEAMS.Ghana,
        matchId: 'group-h/south-korea-vs-ghana/663933',
      },
      {
        group: 'G',
        stadium: STADIUMS.Stadium974,
        time: 1669651200000,
        team1: TEAMS.Brazil,
        team2: TEAMS.Switzerland,
        matchId: 'group-g/brazil-vs-switzerland/663927',
      },
      {
        group: 'H',
        stadium: STADIUMS.LusailStadium,
        time: 1669662000000,
        team1: TEAMS.Portugal,
        team2: TEAMS.Uruguay,
        matchId: 'group-h/portugal-vs-uruguay/663932',
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
        matchId: 'group-a/ecuador-vs-senegal/663893',
      },
      {
        group: 'A',
        stadium: STADIUMS.AlBaytStadium,
        time: 1669734000000,
        team1: TEAMS.Netherlands,
        team2: TEAMS.Qatar,
        matchId: 'group-a/netherlands-vs-qatar/663892',
      },
      {
        group: 'B',
        stadium: STADIUMS.AhmadBinAliStadium,
        time: 1669748400000,
        team1: TEAMS.Iran,
        team2: TEAMS.USA,
        matchId: 'group-b/iran-vs-usa/663899',
      },
      {
        group: 'B',
        stadium: STADIUMS.AlThumamaStadium,
        time: 1669748400000,
        team1: TEAMS.Wales,
        team2: TEAMS.England,
        matchId: 'group-b/wales-vs-england/663897',
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
