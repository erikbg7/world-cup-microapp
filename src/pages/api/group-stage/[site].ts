import { NextApiRequest, NextApiResponse } from 'next';
import { IResults } from '../../../services/scraper';
import { setGroupStageResults } from '../../../services/firebase/methods';
import { scrapeEurosportGroupStage } from '../../../services/scraper/eurosport';
import { scrapeFoxsportsGroupStage } from '../../../services/scraper/foxsports';
import { scrapeStatoriumGroupStage } from '../../../services/scraper/statorium';

const SCRAPPER_BY_SITE: Record<string, () => Promise<IResults>> = {
  foxsports: scrapeFoxsportsGroupStage,
  eurosport: scrapeEurosportGroupStage,
  statorium: scrapeStatoriumGroupStage,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const site = req.query.site as string;
    const scrappingFn = SCRAPPER_BY_SITE[site];

    const results = await scrappingFn();
    await setGroupStageResults(results);

    res.status(200).json({ data: '[Success]: Groups have been correctly updated.' });
  } catch (e) {
    res.status(500).json({ data: '[Error]: Groups could not be updated.', error: e });
  }
}
