import { NextApiRequest, NextApiResponse } from 'next';
import { scrapeFoxsportsGroupStage } from '../../../services/scraper/foxsports';
import { setGroupStageResults } from '../../../services/firebase/methods';
import { IGroupResults } from '../../../models/groups';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const results = await scrapeFoxsportsGroupStage();
    await setGroupStageResults(results as IGroupResults);

    res.status(200).json({ data: '[Success]: Groups have been correctly updated.' });
  } catch (e) {
    res.status(500).json({ data: '[Error]: Groups could not be updated.', error: e });
  }
}
