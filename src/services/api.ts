const fetchGroupStageResults = async () => {
  const response = await fetch('/api/group-results');
  const data = await response.json();
  return data.results;
};

const fetchAllScores = async () => {
  const response = await fetch('/api/live-scores');
  const data = await response.json();
  return data.results;
};

export { fetchGroupStageResults, fetchAllScores };
