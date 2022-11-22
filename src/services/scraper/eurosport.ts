import jsdom from 'jsdom';
import assert from 'assert';
import got from 'got';
import { GROUP_BY_INDEX, GROUP_RESULTS } from '.';

const scrapeEurosportGroupStage = async () => {
  const response = await got('https://www.eurosport.com/football/world-cup/2022/standings.shtml');
  const dom = new jsdom.JSDOM(response.body);

  const SCRAPING_RESULTS = { ...GROUP_RESULTS };
  const GROUP_SELECTOR = '[data-testid="table"] > tbody';
  const tables = dom.window.document.querySelectorAll(GROUP_SELECTOR);

  assert.equal(tables?.length, 8, 'Expected exactly 8 tables');

  tables.forEach((table, index) => {
    const teams = table.querySelectorAll('tr');
    assert.equal(teams?.length, 4, 'Expected exactly 4 teams per table');

    teams.forEach((team, teamIndex) => {
      console.log({ sccccc: SCRAPING_RESULTS });

      const data = scrapeTeamDataFromRow(team);
      SCRAPING_RESULTS[GROUP_BY_INDEX[index]][teamIndex] = data;
    });
  });

  return SCRAPING_RESULTS;
};

const scrapeTeamDataFromRow = (tr: HTMLTableRowElement) => {
  const tableData = tr.querySelectorAll('td');

  console.log({ t: tableData.length });
  console.log({ t: tableData[3] });

  assert.equal(tableData?.length, 14, 'Expected 14 cells per table row');

  const teamData: Record<string, any> = {
    name: normalizeName(tableData[3].children[0].children[1].textContent),
    played: tableData[5].textContent,
    won: tableData[6].textContent,
    lost: tableData[8].textContent,
    draw: tableData[7].textContent,
    points: tableData[12].textContent,
  };

  assert.ok(teamData.name, 'Expected team name to be defined');
  assert.ok(teamData.played, 'Expected team played to be defined');
  assert.ok(teamData.won, 'Expected team won to be defined');
  assert.ok(teamData.lost, 'Expected team loss to be defined');
  assert.ok(teamData.draw, 'Expected team draw to be defined');
  assert.ok(teamData.points, 'Expected team points to be defined');

  return teamData;
};

const normalizeName = (country: string | null) => {
  const countryPieces = country?.split(' ') || [];
  let countryName = countryPieces
    .map((piece) => piece.charAt(0).toUpperCase() + piece.slice(1).toLowerCase())
    .join(' ');

  if (countryName === 'Usa') return 'USA';
  if (countryName === 'Ir Iran') return 'Iran';
  if (countryName === 'South Korea') return 'Korea Republic';

  return countryName;
};

export { scrapeEurosportGroupStage };
