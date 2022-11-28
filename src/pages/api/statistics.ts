import { NextApiRequest, NextApiResponse } from 'next';
import { getTopScores } from '../../services/live-scrapper';

const getResultsFromScraper = async () => {
  const url =
    'https://www.sportingnews.com/us/soccer/news/world-cup-2022-top-goal-scorer-updated-rankings-golden-boot/e5nqav2zpixqgfar0nolaxcf';
  const results = await getTopScores(url);

  return results;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await getResultsFromScraper();
    res.status(200).json({ results });
  } catch (e) {
    console.log('[Scraper Error]: ', e);
    res.status(500).json({ data: '[Results Error]: Data could not be retrieved', error: e });
  }
}
