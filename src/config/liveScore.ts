import { ITeam } from './teams';

interface ILiveTeam extends ITeam {
  score: number;
}

interface ILiveMatch {
  team1: ILiveTeam;
  team2: ILiveTeam;
}
const LIVE_SCORES: ILiveMatch[] = [
  {
    team1: {
      name: 'Spain',
      fifaCode: 'ESP',
      flag: '/flags/es.webp',
      score: 0,
    },
    team2: {
      name: 'Germany',
      fifaCode: 'GER',
      flag: '/flags/de.webp',
      score: 0,
    },
  },
  {
    team1: {
      name: 'Japan',
      fifaCode: 'JPN',
      flag: '/flags/jp.webp',
      score: 0,
    },
    team2: {
      name: 'Spain',
      fifaCode: 'ESP',
      flag: '/flags/es.webp',
      score: 0,
    },
  },
];

export { LIVE_SCORES };
export type { ILiveMatch };
