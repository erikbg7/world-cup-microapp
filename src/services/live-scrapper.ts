import jsdom from 'jsdom';
import assert from 'assert';
import got from 'got';
import { ILiveMatch, LIVE_SCORES } from '../config/liveScore';
import { IMatchEvent } from '../models/events';

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

const getMatchDetails = async (url: string) => {
  const response = await got(url);
  const dom = new jsdom.JSDOM(response.body);

  let liveEvents: IMatchEvent[] = [];

  const EVENT_SELECTOR = '[data-testid^="match_detail-event"]';
  const events = dom.window.document.querySelectorAll(EVENT_SELECTOR);

  events.forEach((event) => {
    const isYellowCardEvent = !!event.querySelectorAll('[name="FootballYellowCard"]')?.length;
    const isRedCardEvent = !!event.querySelectorAll('[name="FootballRedCard"]')?.length;
    const isGoalEvent = !!event.querySelectorAll('[name="FootballGoal"]')?.length;

    if (isYellowCardEvent || isRedCardEvent || isGoalEvent) {
      const time = event.children[0].textContent;
      const team1Player = event.children[1].children[0].textContent;
      const team2Player = event.children[3].children[0].textContent;
      const type = isGoalEvent ? 'goal' : isRedCardEvent ? 'red-card' : 'yellow-card';

      assert.ok(time, 'Event time is required');
      assert.notEqual(Number(time?.split(/[\s']+/)[0]), NaN, 'Minute should be a number');
      team1Player
        ? assert.equal(!!team2Player, false, 'Only one player should be present')
        : assert.equal(!!team1Player, false, 'Only one player should be present');

      liveEvents.push({ type, time, team1Player, team2Player });
    }
  });

  return liveEvents;
};

export { getAllScores, getMatchDetails };
