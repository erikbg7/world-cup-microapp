import jsdom from 'jsdom';
import assert from 'assert';
import got from 'got';
import { LIVE_SCORES } from '../config/liveScore';

const getAllScores = async (url: string) => {
  const response = await got(url);
  const dom = new jsdom.JSDOM(response.body);
  const matches = dom.window.document
    .querySelector('[data-testid="match_rows-root"]')
    ?.querySelectorAll('div[data-testid^="football_match_row"]');

  const scores = matches
    ? LIVE_SCORES.map((ls, i) => {
        const score0 = matches[i].querySelector(
          '[data-testid^="football_match_row-home_score"]'
        )?.textContent;
        const score1 = matches[i].querySelector(
          '[data-testid^="football_match_row-away_score"]'
        )?.textContent;
        const result =
          matches[i].querySelector('[data-testid^="match_row_time-status"]')?.textContent ?? '';

        return {
          ...ls,
          scores: [score0 ?? '0', score1 ?? '0'],
          result,
        };
      })
    : [];

  return scores;
};

export { getAllScores };
