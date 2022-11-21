import jsdom from 'jsdom';
import assert from 'assert';
import got from 'got';
import { ILiveMatch, LIVE_SCORES } from '../config/liveScore';

const getAllScores = async (url: string) => {
  const scores: ILiveMatch[] = [];
  const response = await got(url);
  const dom = new jsdom.JSDOM(response.body);
  const matches = dom.window.document
    .querySelector('[data-testid="match_rows-root"]')
    ?.querySelectorAll('div[data-testid^="football_match_row"]');

  if ((matches?.length ?? 0) > 0) {
    matches!.forEach((match) => {
      const t1 =
        match.querySelector('[data-testid^="football_match_row-home_team"]')?.textContent ?? '';
      const t2 =
        match.querySelector('[data-testid^="football_match_row-away_team"]')?.textContent ?? '';
      const result =
        match.querySelector('[data-testid^="match_row_time-status"]')?.textContent ?? '';
      const score0 = match.querySelector(
        '[data-testid^="football_match_row-home_score"]'
      )?.textContent;
      const score1 = match.querySelector(
        '[data-testid^="football_match_row-away_score"]'
      )?.textContent;

      const scoreObj = LIVE_SCORES.find(
        ({ team1, team2 }) =>
          team1.name.toLowerCase() === t1.toLowerCase() &&
          team2.name.toLowerCase() === t2.toLowerCase()
      );

      if (scoreObj) {
        scores.push({
          ...scoreObj,
          scores: [score0 ?? '0', score1 ?? '0'],
          result,
        });
      }
    });

    return scores;
  }

  return scores;
};

export { getAllScores };
