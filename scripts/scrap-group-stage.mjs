import fetch from 'node-fetch';

// TODO: Change to real URL before merging
function scheduledGroupStageTask() {
  fetch('https://world-cup-microapp-excems6r9-erikbg7.vercel.app/api/update/group-stage')
    .then((res) => res.json())
    .then((data) => console.log({ data }))
    .catch((_) => console.log({ e }));
}

scheduledGroupStageTask();
