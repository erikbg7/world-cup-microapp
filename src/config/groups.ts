const COUNTRIES = {
  Qatar: 'Qatar',
  Ecuador: 'Ecuador',
  Senegal: 'Senegal',
  Netherlands: 'Netherlands',
  England: 'England',
  Iran: 'Iran',
  USA: 'USA',
  Wales: 'Wales',
  Argentina: 'Argentina',
  SaudiArabia: 'Saudi Arabia',
  Mexico: 'Mexico',
  Poland: 'Poland',
  France: 'France',
  Australia: 'Australia',
  Denmark: 'Denmark',
  Tunisia: 'Tunisia',
  Spain: 'Spain',
  CostaRica: 'Costa Rica',
  Germany: 'Germany',
  Japan: 'Japan',
  Belgium: 'Belgium',
  Canada: 'Canada',
  Morocco: 'Morocco',
  Croatia: 'Croatia',
  Brazil: 'Brazil',
  Serbia: 'Serbia',
  Switzerland: 'Switzerland',
  Cameroon: 'Cameroon',
  Portugal: 'Portugal',
  Ghana: 'Ghana',
  Uruguay: 'Uruguay',
  SouthKorea: 'South Korea',
};

interface IGroup {
  group: string;
  teams: string[];
}

const GROUP_STAGE: Record<string, IGroup> = {
  A: {
    group: 'A',
    teams: [COUNTRIES.Qatar, COUNTRIES.Ecuador, COUNTRIES.Senegal, COUNTRIES.Netherlands],
  },
  B: {
    group: 'B',
    teams: [COUNTRIES.England, COUNTRIES.Iran, COUNTRIES.USA, COUNTRIES.Wales],
  },
  C: {
    group: 'C',
    teams: [COUNTRIES.Argentina, COUNTRIES.SaudiArabia, COUNTRIES.Mexico, COUNTRIES.Poland],
  },
  D: {
    group: 'D',
    teams: [COUNTRIES.France, COUNTRIES.Australia, COUNTRIES.Denmark, COUNTRIES.Tunisia],
  },
  E: {
    group: 'E',
    teams: [COUNTRIES.Spain, COUNTRIES.CostaRica, COUNTRIES.Germany, COUNTRIES.Japan],
  },
  F: {
    group: 'F',
    teams: [COUNTRIES.Belgium, COUNTRIES.Canada, COUNTRIES.Morocco, COUNTRIES.Croatia],
  },
  G: {
    group: 'G',
    teams: [COUNTRIES.Brazil, COUNTRIES.Serbia, COUNTRIES.Switzerland, COUNTRIES.Cameroon],
  },
  H: {
    group: 'H',
    teams: [COUNTRIES.Portugal, COUNTRIES.Ghana, COUNTRIES.Uruguay, COUNTRIES.SouthKorea],
  },
};

export { COUNTRIES, GROUP_STAGE };
export type { IGroup };
