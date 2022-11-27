import React from 'react';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { fetchStatistics } from '../../services/api';
import { IGoalScorer } from '../../models/players';
import { TEAMS } from '../../config/teams';
import clsx from 'clsx';

const StadiumsPage = () => {
  const { data } = useQuery(['statistics'], fetchStatistics());

  return (
    <section className={clsx('p-4 sm:p-12')}>
      <h2 className="text-xl p-3 font-bold">Top Scorers, World Cup 2022</h2>
      <table className="w-full text-center">
        <tbody>
          <tr className="px-2">
            <th className="text-xs font-bold">Rank</th>
            <th className="text-xs font-bold">Player</th>
            <th className="text-xs font-bold">Team</th>
            <th className="text-xs font-bold">
              Goals
              <br />
              (P)
            </th>
            <th className="text-xs font-bold">Assists</th>
            <th className="text-xs font-bold">Matches</th>
            <th className="text-xs font-bold">Min</th>
          </tr>
          {data?.results?.length ? <TableRows players={data.results} /> : <TableRowsSkeleton />}
        </tbody>
      </table>
    </section>
  );
};

const TableRows: React.FC<{ players: IGoalScorer[] }> = ({ players }) => {
  return (
    <>
      {players.map((player, i) => {
        const flag =
          Object.values(TEAMS).find((t) => t.name === player.team)?.flag || TEAMS.TBD.flag;

        return (
          <tr key={player.name} className="border-t border-qatar">
            <td>{player.rank}</td>
            <td>{player.name}</td>
            <td>
              <div className="relative m-2 rounded-sm h-4 w-6">
                <Image
                  src={flag}
                  alt={player.team}
                  fill
                  sizes="100px"
                  className="rounded-sm object-cover"
                />
              </div>
            </td>
            <td>{player.goals}</td>
            <td>{player.assists}</td>
            <td>{player.matches}</td>
            <td>{player.minutes}</td>
          </tr>
        );
      })}
    </>
  );
};

const TableRowsSkeleton = () => {
  const FakeResult = <span className="bg-qatar/20 rounded-sm"> 00 </span>;
  return (
    <>
      {[0, 1, 2, 3].map((index) => {
        return (
          <tr key={index} className="animate-pulse border-t border-gray-400 text-transparent">
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
            <td>{FakeResult}</td>
          </tr>
        );
      })}
    </>
  );
};

export default StadiumsPage;
