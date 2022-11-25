import { NextApiRequest, NextApiResponse } from 'next';
import { getMatchDetails } from '../../services/live-scrapper';

const getResultsFromScraper = async (matchId: string) => {
  const url = `https://www.livescores.com/football/world-cup/${matchId}/`;
  const results = await getMatchDetails(url);

  return results;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await getResultsFromScraper(req.query.matchId as string);
    res.status(200).json({ results });
  } catch (e) {
    console.log('[Scraper Error]: ', e);
    res.status(500).json({ data: '[Results Error]: Data could not be retrieved', error: e });
  }
}
