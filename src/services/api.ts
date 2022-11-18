const fetchAllScores = async () => {
  const response = await fetch('/api/live-scores');
  const data = await response.json();
  return data.results;
};

export { fetchAllScores };
