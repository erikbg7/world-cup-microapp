interface ITeam {
  name: string;
  fifaCode: string;
  flag: string;
}

const TEAMS = {
  Qatar: {
    name: 'Qatar',
    fifaCode: 'QAT',
    flag: '/flags/qa.webp',
  },
  Ecuador: {
    name: 'Ecuador',
    fifaCode: 'ECU',
    flag: '/flags/ec.webp',
  },
  Senegal: {
    name: 'Senegal',
    fifaCode: 'SEN',
    flag: '/flags/sn.webp',
  },
  Netherlands: {
    name: 'Netherlands',
    fifaCode: 'NED',
    flag: '/flags/nl.webp',
  },
  England: {
    name: 'England',
    fifaCode: 'ENG',
    flag: '/flags/gb-eng.webp',
  },
  Iran: {
    name: 'Iran',
    fifaCode: 'IRN',
    flag: '/flags/ir.webp',
  },
  USA: {
    name: 'USA',
    fifaCode: 'USA',
    flag: '/flags/us.webp',
  },
  Wales: {
    name: 'Wales',
    fifaCode: 'WAL',
    flag: '/flags/gb-wls.webp',
  },
  Argentina: {
    name: 'Argentina',
    fifaCode: 'ARG',
    flag: '/flags/ar.webp',
  },
  SaudiArabia: {
    name: 'Saudi Arabia',
    fifaCode: 'KSA',
    flag: '/flags/sa.webp',
  },
  Mexico: {
    name: 'Mexico',
    fifaCode: 'MEX',
    flag: '/flags/mx.webp',
  },
  Poland: {
    name: 'Poland',
    fifaCode: 'POL',
    flag: '/flags/pl.webp',
  },
  France: {
    name: 'France',
    fifaCode: 'FRA',
    flag: '/flags/fr.webp',
  },
  Australia: {
    name: 'Australia',
    fifaCode: 'AUS',
    flag: '/flags/au.webp',
  },
  Denmark: {
    name: 'Denmark',
    fifaCode: 'DEN',
    flag: '/flags/dk.webp',
  },
  Tunisia: {
    name: 'Tunisia',
    fifaCode: 'TUN',
    flag: '/flags/tn.webp',
  },
  Spain: {
    name: 'Spain',
    fifaCode: 'ESP',
    flag: '/flags/es.webp',
  },
  CostaRica: {
    name: 'Costa Rica',
    fifaCode: 'CRC',
    flag: '/flags/cr.webp',
  },
  Germany: {
    name: 'Germany',
    fifaCode: 'GER',
    flag: '/flags/de.webp',
  },
  Japan: {
    name: 'Japan',
    fifaCode: 'JPN',
    flag: '/flags/jp.webp',
  },
  Belgium: {
    name: 'Belgium',
    fifaCode: 'BEL',
    flag: '/flags/be.webp',
  },
  Canada: {
    name: 'Canada',
    fifaCode: 'CAN',
    flag: '/flags/ca.webp',
  },
  Morocco: {
    name: 'Morocco',
    fifaCode: 'MAR',
    flag: '/flags/ma.webp',
  },
  Croatia: {
    name: 'Croatia',
    fifaCode: 'CRO',
    flag: '/flags/hr.webp',
  },
  Brazil: {
    name: 'Brazil',
    fifaCode: 'BRA',
    flag: '/flags/br.webp',
  },
  Serbia: {
    name: 'Serbia',
    fifaCode: 'SRB',
    flag: '/flags/rs.webp',
  },
  Switzerland: {
    name: 'Switzerland',
    fifaCode: 'SUI',
    flag: '/flags/ch.webp',
  },
  Cameroon: {
    name: 'Cameroon',
    fifaCode: 'CMR',
    flag: '/flags/cm.webp',
  },
  Portugal: {
    name: 'Portugal',
    fifaCode: 'POR',
    flag: '/flags/pt.webp',
  },
  Ghana: {
    name: 'Ghana',
    fifaCode: 'GHA',
    flag: '/flags/gh.webp',
  },
  Uruguay: {
    name: 'Uruguay',
    fifaCode: 'URU',
    flag: '/flags/uy.webp',
  },
  SouthKorea: {
    name: 'Korea Republic',
    fifaCode: 'KOR',
    flag: '/flags/kr.webp',
  },
  TBD: {
    name: 'TBD',
    fifaCode: 'TBD',
    flag: '/flags/no-flag.webp',
  },
};

export { TEAMS };
export type { ITeam };
