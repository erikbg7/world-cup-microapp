const fetchGroupStageResults = async () => {
  const response = await fetch('/api/group-results');
  const data = await response.json();
  return data.results;
};

export { fetchGroupStageResults };
