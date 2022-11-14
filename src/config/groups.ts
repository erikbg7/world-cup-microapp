import { ITeam, TEAMS } from './teams';

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
