import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllScores } from '../../services/scraper/live';

const getResultsFromScraper = async () => {
  const url = 'https://www.livescores.com/football/world-cup';
  const results = await getAllScores(url);

  /* Uncomment to save to file system

  const filePath = path.join(process.cwd(), 'content', 'live-scores.json');
  fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
  */
  return results;
};

/* Uncomment to get from file system

const getLiveScoresFromFileSystem = async () => {
  const scoresFilePath = path.join(process.cwd(), 'content', 'live-scores.json');
  const scoresFile = fs.readFileSync(scoresFilePath, 'utf8');
  const scores = JSON.parse(scoresFile);
  return scores;
}; 
*/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await getResultsFromScraper();
    res.status(200).json({ results });
  } catch (e) {
    console.log('[Scraper Error]: ', e);
    res.status(500).json({ data: '[Results Error]: Data could not be retrieved', error: e });
  }
}
