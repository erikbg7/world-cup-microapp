interface ITeam {
  name: string;
  flag: string;
}

const TEAMS = {
  Qatar: { name: 'Qatar', flag: '/flags/qa.webp' },
  Ecuador: { name: 'Ecuador', flag: '/flags/ec.webp' },
  Senegal: { name: 'Senegal', flag: '/flags/sn.webp' },
  Netherlands: { name: 'Netherlands', flag: '/flags/nl.webp' },
  England: { name: 'England', flag: '/flags/gb-eng.webp' },
  Iran: { name: 'Iran', flag: '/flags/ir.webp' },
  USA: { name: 'USA', flag: '/flags/us.webp' },
  Wales: { name: 'Wales', flag: '/flags/gb-wls.webp' },
  Argentina: { name: 'Argentina', flag: '/flags/ar.webp' },
  SaudiArabia: { name: 'Saudi Arabia', flag: '/flags/sa.webp' },
  Mexico: { name: 'Mexico', flag: '/flags/mx.webp' },
  Poland: { name: 'Poland', flag: '/flags/pl.webp' },
  France: { name: 'France', flag: '/flags/fr.webp' },
  Australia: { name: 'Australia', flag: '/flags/au.webp' },
  Denmark: { name: 'Denmark', flag: '/flags/dk.webp' },
  Tunisia: { name: 'Tunisia', flag: '/flags/tn.webp' },
  Spain: { name: 'Spain', flag: '/flags/es.webp' },
  CostaRica: { name: 'Costa Rica', flag: '/flags/cr.webp' },
  Germany: { name: 'Germany', flag: '/flags/de.webp' },
  Japan: { name: 'Japan', flag: '/flags/jp.webp' },
  Belgium: { name: 'Belgium', flag: '/flags/be.webp' },
  Canada: { name: 'Canada', flag: '/flags/ca.webp' },
  Morocco: { name: 'Morocco', flag: '/flags/ma.webp' },
  Croatia: { name: 'Croatia', flag: '/flags/hr.webp' },
  Brazil: { name: 'Brazil', flag: '/flags/br.webp' },
  Serbia: { name: 'Serbia', flag: '/flags/rs.webp' },
  Switzerland: { name: 'Switzerland', flag: '/flags/ch.webp' },
  Cameroon: { name: 'Cameroon', flag: '/flags/cm.webp' },
  Portugal: { name: 'Portugal', flag: '/flags/pt.webp' },
  Ghana: { name: 'Ghana', flag: '/flags/gh.webp' },
  Uruguay: { name: 'Uruguay', flag: '/flags/uy.webp' },
  SouthKorea: { name: 'South Korea', flag: '/flags/kr.webp' },
  ToDefine: { name: 'To define', flag: '/flags/no-flag.webp' },
};

interface IGroup {
  group: string;
  teams: ITeam[];
}

interface IPlayoff {
  date: string;
  teams: ITeam[];
}

const GROUP_STAGE: Record<string, IGroup> = {
  A: {
    group: 'A',
    teams: [TEAMS.Qatar, TEAMS.Ecuador, TEAMS.Senegal, TEAMS.Netherlands],
  },
  B: {
    group: 'B',
    teams: [TEAMS.England, TEAMS.Iran, TEAMS.USA, TEAMS.Wales],
  },
  C: {
    group: 'C',
    teams: [TEAMS.Argentina, TEAMS.SaudiArabia, TEAMS.Mexico, TEAMS.Poland],
  },
  D: {
    group: 'D',
    teams: [TEAMS.France, TEAMS.Australia, TEAMS.Denmark, TEAMS.Tunisia],
  },
  E: {
    group: 'E',
    teams: [TEAMS.Spain, TEAMS.CostaRica, TEAMS.Germany, TEAMS.Japan],
  },
  F: {
    group: 'F',
    teams: [TEAMS.Belgium, TEAMS.Canada, TEAMS.Morocco, TEAMS.Croatia],
  },
  G: {
    group: 'G',
    teams: [TEAMS.Brazil, TEAMS.Serbia, TEAMS.Switzerland, TEAMS.Cameroon],
  },
  H: {
    group: 'H',
    teams: [TEAMS.Portugal, TEAMS.Ghana, TEAMS.Uruguay, TEAMS.SouthKorea],
  },
};

export { TEAMS, GROUP_STAGE };
export type { ITeam, IGroup, IPlayoff };
