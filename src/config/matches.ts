import { ITeam, TEAMS } from './teams';
import { GroupIdentifier } from '../models/groups';
import { STADIUMS, Stadium } from './stadiums';
import { getDateByTimezone } from '../utils/date';

interface IMatch {
  group?: GroupIdentifier;
  stadium?: Stadium;
  time: number;
  team1: ITeam;
  team2: ITeam;
  scores?: string[];
  matchId?: string;
  isRoundOf16?: boolean;
  title?: string;
}

interface IMatchDay {
  day: number;
  matches: IMatch[];
}

const MATCHES: IMatch[] = [
  {
    group: 'A',
    stadium: STADIUMS.AlBaytStadium,
    time: 1668960000000,
    team1: TEAMS.Qatar,
    team2: TEAMS.Ecuador,
    scores: ['0', '2'],
    matchId: 'group-a/qatar-vs-ecuador/587251',
  },
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
    scores: ['0', '0'],
  },
  {
    group: 'H',
    stadium: STADIUMS.Stadium974,
    time: 1669305600000,
    team1: TEAMS.Portugal,
    team2: TEAMS.Ghana,
    matchId: 'group-h/portugal-vs-ghana/663930',
    scores: ['3', '2'],
  },
  {
    group: 'G',
    stadium: STADIUMS.LusailStadium,
    time: 1669316400000,
    team1: TEAMS.Brazil,
    team2: TEAMS.Serbia,
    matchId: 'group-g/brazil-vs-serbia/663925',
    scores: ['2', '0'],
  },
  {
    group: 'B',
    stadium: STADIUMS.AhmadBinAliStadium,
    time: 1669370400000,
    team1: TEAMS.Wales,
    team2: TEAMS.Iran,
    matchId: 'group-b/wales-vs-iran/663895',
    scores: ['0', '2'],
  },
  {
    group: 'A',
    stadium: STADIUMS.AlThumamaStadium,
    time: 1669381200000,
    team1: TEAMS.Qatar,
    team2: TEAMS.Senegal,
    matchId: 'group-a/qatar-vs-senegal/663889',
    scores: ['1', '3'],
  },
  {
    group: 'A',
    stadium: STADIUMS.KhalifaInternationalStadium,
    time: 1669392000000,
    team1: TEAMS.Netherlands,
    team2: TEAMS.Ecuador,
    matchId: 'group-a/netherlands-vs-ecuador/663890',
    scores: ['1', '1'],
  },
  {
    group: 'B',
    stadium: STADIUMS.AlBaytStadium,
    time: 1669402800000,
    team1: TEAMS.England,
    team2: TEAMS.USA,
    matchId: 'group-b/england-vs-usa/663896',
    scores: ['0', '0'],
  },
  {
    group: 'D',
    stadium: STADIUMS.AlJanoubStadium,
    time: 1669456800000,
    team1: TEAMS.Tunisia,
    team2: TEAMS.Australia,
    matchId: 'group-d/tunisia-vs-australia/663906',
    scores: ['0', '1'],
  },
  {
    group: 'C',
    stadium: STADIUMS.EducationCityStadium,
    time: 1669467600000,
    team1: TEAMS.Poland,
    team2: TEAMS.SaudiArabia,
    matchId: 'group-c/poland-vs-saudi-arabia/663900',
    scores: ['2', '0'],
  },
  {
    group: 'D',
    stadium: STADIUMS.Stadium974,
    time: 1669478400000,
    team1: TEAMS.France,
    team2: TEAMS.Denmark,
    matchId: 'group-d/france-vs-denmark/663907',
    scores: ['2', '1'],
  },
  {
    group: 'C',
    stadium: STADIUMS.LusailStadium,
    time: 1669489200000,
    team1: TEAMS.Argentina,
    team2: TEAMS.Mexico,
    matchId: 'group-c/argentina-vs-mexico/663901',
    scores: ['2', '0'],
  },
  {
    group: 'E',
    stadium: STADIUMS.AhmadBinAliStadium,
    time: 1669543200000,
    team1: TEAMS.Japan,
    team2: TEAMS.CostaRica,
    matchId: 'group-e/japan-vs-costa-rica/663915',
    scores: ['0', '1'],
  },
  {
    group: 'F',
    stadium: STADIUMS.AlThumamaStadium,
    time: 1669554000000,
    team1: TEAMS.Belgium,
    team2: TEAMS.Morocco,
    matchId: 'group-f/belgium-vs-morocco/663919',
    scores: ['0', '2'],
  },
  {
    group: 'F',
    stadium: STADIUMS.KhalifaInternationalStadium,
    time: 1669564800000,
    team1: TEAMS.Croatia,
    team2: TEAMS.Canada,
    matchId: 'group-f/croatia-vs-canada/663918',
    scores: ['4', '1'],
  },
  {
    group: 'E',
    stadium: STADIUMS.AlBaytStadium,
    time: 1669575600000,
    team1: TEAMS.Spain,
    team2: TEAMS.Germany,
    matchId: 'group-e/spain-vs-germany/663914',
    scores: ['1', '1'],
  },
  {
    group: 'G',
    stadium: STADIUMS.AlJanoubStadium,
    time: 1669629600000,
    team1: TEAMS.Cameroon,
    team2: TEAMS.Serbia,
    matchId: 'group-g/cameroon-vs-serbia/663926',
    scores: ['3', '3'],
  },
  {
    group: 'H',
    stadium: STADIUMS.EducationCityStadium,
    time: 1669640400000,
    team1: TEAMS.SouthKorea,
    team2: TEAMS.Ghana,
    matchId: 'group-h/south-korea-vs-ghana/663933',
    scores: ['2', '3'],
  },
  {
    group: 'G',
    stadium: STADIUMS.Stadium974,
    time: 1669651200000,
    team1: TEAMS.Brazil,
    team2: TEAMS.Switzerland,
    matchId: 'group-g/brazil-vs-switzerland/663927',
    scores: ['1', '0'],
  },
  {
    group: 'H',
    stadium: STADIUMS.LusailStadium,
    time: 1669662000000,
    team1: TEAMS.Portugal,
    team2: TEAMS.Uruguay,
    matchId: 'group-h/portugal-vs-uruguay/663932',
    scores: ['2', '0'],
  },
  {
    group: 'A',
    stadium: STADIUMS.KhalifaInternationalStadium,
    time: 1669734000000,
    team1: TEAMS.Ecuador,
    team2: TEAMS.Senegal,
    matchId: 'group-a/ecuador-vs-senegal/663893',
    scores: ['1', '2'],
  },
  {
    group: 'A',
    stadium: STADIUMS.AlBaytStadium,
    time: 1669734000000,
    team1: TEAMS.Netherlands,
    team2: TEAMS.Qatar,
    matchId: 'group-a/netherlands-vs-qatar/663892',
    scores: ['2', '0'],
  },
  {
    group: 'B',
    stadium: STADIUMS.AhmadBinAliStadium,
    time: 1669748400000,
    team1: TEAMS.Iran,
    team2: TEAMS.USA,
    matchId: 'group-b/iran-vs-usa/663899',
    scores: ['0', '1'],
  },
  {
    group: 'B',
    stadium: STADIUMS.AlThumamaStadium,
    time: 1669748400000,
    team1: TEAMS.Wales,
    team2: TEAMS.England,
    matchId: 'group-b/wales-vs-england/663897',
    scores: ['0', '3'],
  },
  {
    group: 'D',
    stadium: STADIUMS.AlJanoubStadium,
    time: 1669820400000,
    team1: TEAMS.Tunisia,
    team2: TEAMS.France,
    matchId: 'group-d/tunisia-vs-france/663909',
    scores: ['1', '0'],
  },
  {
    group: 'D',
    stadium: STADIUMS.EducationCityStadium,
    time: 1669820400000,
    team1: TEAMS.Australia,
    team2: TEAMS.Denmark,
    matchId: 'group-d/australia-vs-denmark/663908',
    scores: ['1', '0'],
  },
  {
    group: 'C',
    stadium: STADIUMS.Stadium974,
    time: 1669834800000,
    team1: TEAMS.Poland,
    team2: TEAMS.Argentina,
    matchId: 'group-c/poland-vs-argentina/663903',
    scores: ['0', '2'],
  },
  {
    group: 'C',
    stadium: STADIUMS.LusailStadium,
    time: 1669834800000,
    team1: TEAMS.SaudiArabia,
    team2: TEAMS.Mexico,
    matchId: 'group-c/saudi-arabia-vs-mexico/663902',
    scores: ['1', '2'],
  },
  {
    group: 'F',
    stadium: STADIUMS.AhmadBinAliStadium,
    time: 1669906800000,
    team1: TEAMS.Croatia,
    team2: TEAMS.Belgium,
    matchId: 'group-f/croatia-vs-belgium/663922',
    scores: ['0', '0'],
  },
  {
    group: 'F',
    stadium: STADIUMS.AlThumamaStadium,
    time: 1669906800000,
    team1: TEAMS.Canada,
    team2: TEAMS.Morocco,
    matchId: 'group-f/canada-vs-morocco/663923',
    scores: ['1', '2'],
  },
  {
    group: 'E',
    stadium: STADIUMS.KhalifaInternationalStadium,
    time: 1669921200000,
    team1: TEAMS.Japan,
    team2: TEAMS.Spain,
    matchId: 'group-e/japan-vs-spain/663916',
    scores: ['2', '1'],
  },
  {
    group: 'E',
    stadium: STADIUMS.AlBaytStadium,
    time: 1669921200000,
    team1: TEAMS.CostaRica,
    team2: TEAMS.Germany,
    matchId: 'group-e/costa-rica-vs-germany/663917',
    scores: ['2', '4'],
  },
  {
    group: 'H',
    stadium: STADIUMS.AlJanoubStadium,
    time: 1669993200000,
    team1: TEAMS.SouthKorea,
    team2: TEAMS.Portugal,
    matchId: 'group-h/south-korea-vs-portugal/663935',
    scores: ['2', '1'],
  },
  {
    group: 'H',
    stadium: STADIUMS.EducationCityStadium,
    time: 1669993200000,
    team1: TEAMS.Ghana,
    team2: TEAMS.Uruguay,
    matchId: 'group-h/ghana-vs-uruguay/663934',
    scores: ['0', '2'],
  },
  {
    group: 'G',
    stadium: STADIUMS.Stadium974,
    time: 1670007600000,
    team1: TEAMS.Serbia,
    team2: TEAMS.Switzerland,
    matchId: 'group-g/serbia-vs-switzerland/663928',
    scores: ['2', '3'],
  },
  {
    group: 'G',
    stadium: STADIUMS.LusailStadium,
    time: 1670007600000,
    team1: TEAMS.Cameroon,
    team2: TEAMS.Brazil,
    matchId: 'group-g/cameroon-vs-brazil/663929',
    scores: ['1', '0'],
  },
  {
    stadium: STADIUMS.KhalifaInternationalStadium,
    time: 1670079600000,
    team1: TEAMS.Netherlands,
    team2: TEAMS.USA,
    isRoundOf16: true,
    title: 'Round of 16',
    matchId: 'round-of-16/netherlands-vs-usa/714151',
    scores: ['3', '1'],
  },
  {
    stadium: STADIUMS.AhmadBinAliStadium,
    time: 1670094000000,
    isRoundOf16: true,
    team1: TEAMS.Argentina,
    team2: TEAMS.Australia,
    title: 'Round of 16',
    matchId: 'round-of-16/argentina-vs-australia/714152',
    scores: ['2', '1'],
  },
  {
    stadium: STADIUMS.AlThumamaStadium,
    time: 1670166000000,
    isRoundOf16: true,
    team1: TEAMS.France,
    team2: TEAMS.Poland,
    title: 'Round of 16',
    matchId: 'round-of-16/france-vs-poland/714154',
    scores: ['3', '1'],
  },
  {
    stadium: STADIUMS.AlBaytStadium,
    time: 1670180400000,
    isRoundOf16: true,
    team1: TEAMS.England,
    team2: TEAMS.Senegal,
    title: 'Round of 16',
    matchId: 'round-of-16/england-vs-senegal/714153',
    scores: ['3', '0 '],
  },
  {
    stadium: STADIUMS.AlJanoubStadium,
    time: 1670252400000,
    isRoundOf16: true,
    team1: TEAMS.Japan,
    team2: TEAMS.Croatia,
    title: 'Round of 16',
    matchId: 'round-of-16/japan-vs-croatia/714155',
    scores: ['1(1)', '1(3)'],
  },
  {
    stadium: STADIUMS.Stadium974,
    time: 1670266800000,
    isRoundOf16: true,
    team1: TEAMS.Brazil,
    team2: TEAMS.SouthKorea,
    title: 'Round of 16',
    matchId: 'round-of-16/brazil-vs-south-korea/714156',
    scores: ['4', '1'],
  },
  {
    stadium: STADIUMS.EducationCityStadium,
    time: 1670338800000,
    isRoundOf16: true,
    team1: TEAMS.Morocco,
    team2: TEAMS.Spain,
    title: 'Round of 16',
    matchId: 'round-of-16/morocco-vs-spain/714158',
    scores: ['0(3)', '0(0)'],
  },
  {
    stadium: STADIUMS.LusailStadium,
    time: 1670353200000,
    isRoundOf16: true,
    team1: TEAMS.Portugal,
    team2: TEAMS.Switzerland,
    title: 'Round of 16',
    matchId: 'round-of-16/portugal-vs-switzerland/714157',
    scores: ['6', '1'],
  },
  {
    stadium: STADIUMS.EducationCityStadium,
    time: 1670598000000,
    isRoundOf16: false,
    team1: TEAMS.Croatia,
    team2: TEAMS.Brazil,
    title: 'Quarterfinals',
    matchId: 'quarter-finals/croatia-vs-brazil/714159',
    scores: ['1(4)', '1(2)'],
  },
  {
    stadium: STADIUMS.LusailStadium,
    time: 1670612400000,
    isRoundOf16: false,
    team1: TEAMS.Netherlands,
    team2: TEAMS.Argentina,
    title: 'Quarterfinals',
    matchId: 'quarter-finals/netherlands-vs-argentina/714160',
    scores: ['2(3)', '2(4)'],
  },
  {
    stadium: STADIUMS.EducationCityStadium,
    time: 1670684400000,
    isRoundOf16: false,
    team1: TEAMS.Morocco,
    team2: TEAMS.Portugal,
    title: 'Quarterfinals',
    matchId: 'quarter-finals/morocco-vs-portugal/714161',
    scores: ['1', '0'],
  },
  {
    stadium: STADIUMS.AlBaytStadium,
    time: 1670698800000,
    isRoundOf16: false,
    team1: TEAMS.England,
    team2: TEAMS.France,
    title: 'Quarterfinals',
    matchId: 'quarter-finals/england-vs-france/714162',
    scores: ['1', '2'],
  },
  {
    stadium: STADIUMS.LusailStadium,
    time: 1670958000000,
    isRoundOf16: false,
    team1: TEAMS.Argentina,
    team2: TEAMS.Croatia,
    title: 'Semifinals',
    matchId: 'semi-finals/argentina-vs-croatia/714163',
    scores: ['3', '0'],
  },
  {
    stadium: STADIUMS.AlBaytStadium,
    time: 1671044400000,
    isRoundOf16: false,
    team1: TEAMS.France,
    team2: TEAMS.Morocco,
    title: 'Semifinals',
    matchId: 'semi-finals/france-vs-morocco/714164',
    scores: ['2', '0'],
  },
  {
    stadium: STADIUMS.LusailStadium,
    time: 1671289200000,
    isRoundOf16: false,
    team1: TEAMS.Morocco,
    team2: TEAMS.Croatia,
    title: 'ThirdPlace',
    matchId: 'third-place-play-off/croatia-vs-morocco/714166/',
    scores: ['1', '2'],
  },
  {
    stadium: STADIUMS.LusailStadium,
    time: 1671375600000,
    isRoundOf16: false,
    team1: TEAMS.Argentina,
    team2: TEAMS.France,
    title: 'Final',
    matchId: 'final/tbd-vs-tbd/714150',
  },
];

const getMatchesByDay = (timestamp: number, roundOf16?: boolean) => {
  const filteredMatches = MATCHES.filter((match) => {
    const day = getDateByTimezone({ timestamp, format: 'dateDay' });
    const matchDay = getDateByTimezone({ timestamp: match.time, format: 'dateDay' });
    return matchDay === day;
  });

  if (roundOf16) {
    return filteredMatches.filter((m) => m.isRoundOf16);
  }

  return filteredMatches;
};

const GROUP_STAGE_MATCHES: Record<string, IMatchDay> = {
  'Group Stage · Sun, Nov 20': {
    day: 1668960000000,
    matches: getMatchesByDay(1668960000000),
  },
  'Group Stage · Mon, Nov 21': {
    day: 1669035600000,
    matches: getMatchesByDay(1669035600000),
  },
  'Group Stage · Tue, Nov 22': {
    day: 1669111200000,
    matches: getMatchesByDay(1669111200000),
  },
  'Group Stage · Wed, Nov 23': {
    day: 1669197600000,
    matches: getMatchesByDay(1669197600000),
  },
  'Group Stage · Thu, Nov 24': {
    day: 1669284000000,
    matches: getMatchesByDay(1669284000000),
  },
  'Group Stage · Fri, Nov 25': {
    day: 1669370400000,
    matches: getMatchesByDay(1669370400000),
  },
  'Group Stage · Sat, Nov 26': {
    day: 1669456800000,
    matches: getMatchesByDay(1669456800000),
  },
  'Group Stage · Sun, Nov 27': {
    day: 1669543200000,
    matches: getMatchesByDay(1669543200000),
  },
  'Group Stage · Mon, Nov 28': {
    day: 1669629600000,
    matches: getMatchesByDay(1669629600000),
  },
  'Group Stage · Tue, Nov 29': {
    day: 1669734000000,
    matches: getMatchesByDay(1669734000000),
  },
  'Group Stage · Wed, Nov 30': {
    day: 1669820400000,
    matches: getMatchesByDay(1669820400000),
  },
  'Group Stage · Thu, Dec 1': {
    day: 1669906800000,
    matches: getMatchesByDay(1669906800000),
  },
  'Group Stage · Fri, Dec 2': {
    day: 1669993200000,
    matches: getMatchesByDay(1669993200000),
  },
  'Round Of 16, Dec 3': {
    day: 1670079600000,
    matches: getMatchesByDay(1670079600000, true),
  },
  'Round Of 16, Dec 4': {
    day: 1670166000000,
    matches: getMatchesByDay(1670166000000, true),
  },
  'Round Of 16, Dec 5': {
    day: 1670252400000,
    matches: getMatchesByDay(1670252400000, true),
  },
  'Round Of 16, Dec 6': {
    day: 1670338800000,
    matches: getMatchesByDay(1670338800000, true),
  },
  'Quarterfinals, Dec 9': {
    day: 1670598000000,
    matches: getMatchesByDay(1670598000000),
  },
  'Quarterfinals, Dec 10': {
    day: 1670684400000,
    matches: getMatchesByDay(1670684400000),
  },
  'Semifinals, Dec 13': {
    day: 1670958000000,
    matches: getMatchesByDay(1670958000000),
  },
  'Semifinals, Dec 14': {
    day: 1671044400000,
    matches: getMatchesByDay(1671044400000),
  },
  'Third Place, Dec 17': {
    day: 1671289200000,
    matches: getMatchesByDay(1671289200000),
  },
  'Final, Dec 18': {
    day: 1671375600000,
    matches: getMatchesByDay(1671375600000),
  },
};

export { GROUP_STAGE_MATCHES, MATCHES };
export type { IMatch, IMatchDay };
