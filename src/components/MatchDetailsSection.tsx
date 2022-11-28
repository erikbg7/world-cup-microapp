import React from 'react';
import clsx from 'clsx';
import { IMatchDetails } from '../models/events';

type ITouple = [string, string];

interface Props {
  referee?: IMatchDetails['referee'];
  events?: IMatchDetails['events'];
  teams: ITouple;
}

const MatchDetailsSection: React.FC<Props> = ({ referee, events, teams }) => {
  return (
    <section className="w-full px-2 py-0 overflow-auto">
      <table className="w-full text-center">
        <tbody>
          {events?.map((r) => (
            <tr
              key={r.time}
              className="flex justify-center items-center border-b border-qatar py-1"
            >
              <td className="w-[30%]">{r.time}</td>
              <td className="flex justify-center w-[10%]">
                {r.type === 'goal' ? '⚽' : <CardIcon type={r.type} />}
              </td>
              <td className="w-[10%] text-sm">
                {r.team1Player && teams[0]}
                {r.team2Player && teams[1]}
              </td>
              <td className="w-[50%]">{r.team1Player || r.team2Player}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const CardIcon: React.FC<{ type: 'red-card' | 'yellow-card' }> = ({ type }) => {
  return (
    <div
      className={clsx(
        'h-6 w-4 rounded-sm shadow-sm shadow-black',
        type === 'red-card' && 'bg-red-500',
        type === 'yellow-card' && 'bg-yellow-300'
      )}
    />
  );
};

export default MatchDetailsSection;
export type { ITouple };
