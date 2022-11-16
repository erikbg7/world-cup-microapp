import fetch from 'node-fetch';

// TODO: Change to real URL before merging
function scheduledGroupStageTask() {
  fetch('https://world-cup-microapp.vercel.app/api/group-results')
    .then((res) => res.json())
    .then((data) => console.log({ data }))
    .catch((e) => console.log({ e }));
}

scheduledGroupStageTask();
