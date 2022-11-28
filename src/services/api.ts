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

const fetchStatistics = () => async () => {
  const response = await fetch('/api/statistics');
  const data = await response.json();
  return data;
};

export { fetchAllScores, fetchMatchDetails, fetchStatistics };
