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

const fetchStatistics = (matchId: string) => async () => {
  const response = await fetch(
    'https://www.sportingnews.com/us/soccer/news/world-cup-2022-top-goal-scorer-updated-rankings-golden-boot/e5nqav2zpixqgfar0nolaxcf'
  );
  const data = await response.json();
  console.log('************** data', data);
  return data;
};

export { fetchAllScores, fetchMatchDetails, fetchStatistics };
