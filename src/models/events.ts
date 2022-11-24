interface IMatchDetails {
  referee: string;
  events: IMatchEvent[];
}

interface IMatchEvent {
  type: 'goal' | 'red-card' | 'yellow-card';
  time: string;
  team1Player: string | null;
  team2Player: string | null;
}

export type { IMatchDetails, IMatchEvent };
