import fetch from 'node-fetch';

function scheduledGroupStageTask() {
  fetch('https://world-cup-microapp.vercel.app/api/group-results')
    .then((res) => res.json())
    .then((data) => console.log({ data }))
    .catch((_) => console.log({ e }));
}

scheduledGroupStageTask();
