import jsdom from 'jsdom';
import assert from 'assert';
import got from 'got';

interface IResults extends Record<string, any[]> {}
const GROUP_RESULTS: IResults = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
};

interface IMapIndex extends Record<number, string> {}
const GROUP_BY_INDEX: IMapIndex = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
};

const scrapeGroupStage = async () => {
  const response = await got('https://statorium.com/fifa-world-cup-2022-api.html');
  const dom = new jsdom.JSDOM(response.body);

  const SCRAPING_RESULTS = { ...GROUP_RESULTS };
  const GROUP_SELECTOR = 'div.table-responsive > table > tbody';
  const tables = dom.window.document.querySelectorAll(GROUP_SELECTOR);

  assert.equal(tables?.length, 8, 'Expected exactly 8 tables');

  tables.forEach((table, index) => {
    const teams = table.querySelectorAll('tr');
    assert.equal(teams?.length, 4, 'Expected exactly 4 teams per table');

    teams.forEach((team, teamIndex) => {
      const data = scrapeTeamDataFromRow(team);
      SCRAPING_RESULTS[GROUP_BY_INDEX[index]][teamIndex] = data;
    });
  });

  return SCRAPING_RESULTS;
};

const scrapeTeamDataFromRow = (tr: HTMLTableRowElement) => {
  const tableData = tr.querySelectorAll('td');

  assert.equal(tableData?.length, 11, 'Expected 11 cells per table row');

  const teamData: Record<string, any> = {
    name: tableData[1].children[1].textContent,
    played: tableData[2].textContent,
    won: tableData[3].textContent,
    lost: tableData[4].textContent,
    draw: tableData[5].textContent,
    points: tableData[8].textContent,
  };

  assert.ok(teamData.name, 'Expected team name to be defined');
  assert.ok(teamData.played, 'Expected team played to be defined');
  assert.ok(teamData.won, 'Expected team won to be defined');
  assert.ok(teamData.lost, 'Expected team loss to be defined');
  assert.ok(teamData.draw, 'Expected team draw to be defined');
  assert.ok(teamData.points, 'Expected team points to be defined');

  return teamData;
};

export { scrapeGroupStage };
