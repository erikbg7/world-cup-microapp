import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllScores } from '../../services/live-scrapper';

const getResultsFromScraper = async () => {
  const url = 'https://www.livescores.com/football/world-cup/?tz=5.5';
  const results = await getAllScores(url);

  const filePath = path.join(process.cwd(), 'content', 'live-scores.json');
  fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

  return results;
};

const getResultsFromFileSystem = async () => {
  const grupResultsPath = path.join(process.cwd(), 'content', 'results.json');
  const groupResultsFile = fs.readFileSync(grupResultsPath, 'utf8');
  const results = JSON.parse(groupResultsFile);

  return results;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await getResultsFromScraper();
    res.status(200).json({ results });
  } catch (e) {
    console.log('[Scraper Error]: ', e);
    console.log('Trying to get results from file system...');
    try {
      const results = await getResultsFromFileSystem();
      res.status(200).json({ results });
    } catch (e) {
      console.log('[File System Error]: ', e);
      res.status(500).json({ error: '[Results Error]: Data could not be retrieved' });
    }
  }
}
