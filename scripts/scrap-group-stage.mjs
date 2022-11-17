import fetch from 'node-fetch';

// TODO: Change to real URL before merging
function scheduledScraperTask1() {
  fetch('https://world-cup-microapp.vercel.app/api/group-stage/statorium')
    .then((res) => res.json())
    .then((data) => console.log({ data }))
    .catch((e) => console.log({ e }));
}

// TODO: Change to real URL before merging
function scheduledScraperTask2() {
  fetch('https://world-cup-microapp.vercel.app/api/group-stage/foxsports')
    .then((res) => res.json())
    .then((data) => console.log({ data }))
    .catch((e) => console.log({ e }));
}

scheduledScraperTask1();
scheduledScraperTask2();
