import { IMatchEvent } from '../models/events';

const fetchAllScores = async () => {
  const response = await fetch('/api/live-scores');
  const data = await response.json();
  return data.results;
};

const fetchMatchDetails = (matchId: string) => async () => {
  const response = await fetch(`/api/match-details?matchId=${matchId}`);
  const data = await response.json();
  return data as { results: IMatchEvent[] };
};

export { fetchAllScores, fetchMatchDetails };
