import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllScores } from '../../services/live-scrapper';

const getResultsFromScraper = async () => {
  const url = 'https://www.livescores.com/football/world-cup';
  const results = await getAllScores(url);

  const filePath = path.join(process.cwd(), 'content', 'live-scores.json');
  fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

  return results;
};

const getLiveScoresFromFileSystem = async () => {
  const scoresFilePath = path.join(process.cwd(), 'content', 'live-scores.json');
  const scoresFile = fs.readFileSync(scoresFilePath, 'utf8');
  const scores = JSON.parse(scoresFile);

  return scores;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await getResultsFromScraper();
    res.status(200).json({ results });
  } catch (e) {
    console.log('[Scraper Error]: ', e);
    console.log('Trying to get results from file system...');
    try {
      const scores = await getLiveScoresFromFileSystem();
      res.status(200).json({ scores });
    } catch (e) {
      console.log('[File System Error]: ', e);
      res.status(500).json({ data: '[Results Error]: Data could not be retrieved', error: e });
    }
  }
}
