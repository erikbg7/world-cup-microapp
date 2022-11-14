import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getGroupStageResults } from '../../services/scraper';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = 'https://statorium.com/fifa-world-cup-2022-api.html';
    const results = await getGroupStageResults(url);

    const filePath = path.join(process.cwd(), 'content', 'results.json');
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

    res.status(200).json({ groupStageResults: results });
  } catch (e) {
    res.status(500).json({ error: '[Scrape Error]: ' + e });
  }
}
