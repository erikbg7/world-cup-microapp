const fetchGroupStageResults = async () => {
  const response = await fetch('http://localhost:3000/api/group-results');
  const data = await response.json();
  return data.results;
};

export { fetchGroupStageResults };
