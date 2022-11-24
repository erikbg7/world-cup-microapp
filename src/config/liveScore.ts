import { IMatch } from './matches';

export enum MatchResult {
  FT = 'FT', // Full time
  AET = 'AET', // After extra time
  HT = 'HT', // Half Time
  D = 'D', // Draw
  HW = 'HW', // Home win
  AW = 'AW', // Away Win
  ET = 'ET', // Extra time
  AP = 'AP', // After Penalty
}

interface ILiveMatch extends IMatch {
  result: string;
}

export type { ILiveMatch };
