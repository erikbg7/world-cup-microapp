import React, { useRef } from 'react';
import Image from 'next/image';
import { GROUP_STAGE_MATCHES, IMatch, IMatchDay } from '../../config/matches';
import GroupMatchModal, { IGroupMatchModalHandler } from '../../components/GroupMatchModal';
import DateTime from '../../components/DateTime';
import { ITeam } from '../../config/teams';
import StadiumIcon from '../../components/icons/StadiumIcon';
import ClockIcon from '../../components/icons/ClockIcon';
import DiamondBullet from '../../components/DiamondBullet';
import Score from '../../components/Score';
import { ITouple } from '../../components/MatchDetailsSection';
import { isToday } from '../../utils/date';

const MatchesPage = () => {
  return (
    <div className="py-5 flex-1 overflow-auto">
      {Object.entries(GROUP_STAGE_MATCHES).map(([id, matchDay]) => (
        <MatchesDay key={id} id={id} matchDay={matchDay} />
      ))}
    </div>
  );
};

const MatchesDay: React.FC<{ id: string; matchDay: IMatchDay }> = ({ id, matchDay }) => {
  const currentMatchRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    currentMatchRef?.current?.scrollIntoView();
  }, []);

  return (
    <section
      className="px-6 sm:px-12 pb-6"
      ref={isToday(matchDay.matches[0].time) ? currentMatchRef : undefined}
    >
      <h2 className="text-xl font-semibold py-3">{id}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-hidden">
        {matchDay.matches.map((match) => (
          <MatchItem key={match.team1.name + match.team2.name} {...match} />
        ))}
      </div>
    </section>
  );
};

const MatchItem: React.FC<IMatch> = ({ group, time, team1, team2, stadium, scores }) => {
  const modalRef = React.useRef<IGroupMatchModalHandler>(null);
  const [liveScores, setLiveScores] = React.useState<ITouple>(['', '']);

  const handleMatchClick = () => modalRef.current?.open();
  const hasScores = scores?.length === 2;

  React.useEffect(() => {
    let intervalId: any;
    if (!hasScores && isToday(time)) {
      intervalId = setInterval(() => {
        let liveScore1 = document?.getElementById(`${team1.name}-score`)?.textContent;
        let liveScore2 = document?.getElementById(`${team2.name}-score`)?.textContent;
        liveScore1 = liveScore1?.replace('?', '');
        liveScore2 = liveScore2?.replace('?', '');
        if (liveScore1 !== liveScores[0] || liveScore2 !== liveScores[1]) {
          setLiveScores([liveScore1 as string, liveScore2 as string]);
        }
      }, 5000);
    }
    return () => intervalId && clearInterval(intervalId);
  }, []);

  return (
    <>
      <div
        className="flex border border-qatar hover:cursor-pointer h-36 p-5"
        onClick={handleMatchClick}
      >
        <div className="flex flex-1">
          <div className="flex flex-col justify-between py-2">
            <TeamData
              name={team1.name}
              flag={team1.flag}
              fifaCode={team1.fifaCode}
              score={hasScores ? scores?.[0] : liveScores[0]}
              isWinner={hasScores && scores[0] > scores[1]}
            />
            <div className="text-sm w-full text-center font-light">vs</div>
            <TeamData
              name={team2.name}
              flag={team2.flag}
              fifaCode={team2.fifaCode}
              score={hasScores ? scores?.[1] : liveScores[1]}
              isWinner={hasScores && scores[1] > scores[0]}
            />
          </div>
        </div>
        <div className="flex flex-1 border-l border-l-qatar">
          <table className="flex flex-col justify-center w-full h-full pl-6 text-sm font-light">
            <tbody>
              <tr className="flex items-center py-1">
                <td className="flex items-center">
                  <DiamondBullet size={2} />
                </td>
                <td>
                  <span className="ml-2">Group {group}</span>
                </td>
              </tr>
              <tr className="flex items-center py-1">
                <td className="flex items-center">
                  <ClockIcon className="h-3 w-3" />
                </td>
                <td>
                  <DateTime className="font-semibold ml-2" timestamp={time} format="dateHHHHDDMM" />
                </td>
              </tr>
              <tr className="flex items-center py-1">
                <td className="flex items-center">
                  <StadiumIcon className="inline-block h-3 w-3" />
                </td>
                <td className="ml-2">{stadium || 'TBD'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <GroupMatchModal
        ref={modalRef}
        title={`Group Stage · Group ${group}`}
        match={{ group, time, team1, team2, scores } as IMatch}
      />
    </>
  );
};

interface TeamDataProps {
  name: ITeam['name'];
  flag: ITeam['flag'];
  fifaCode: ITeam['fifaCode'];
  score?: string;
  isWinner: boolean;
}

const TeamData: React.FC<TeamDataProps> = ({ flag, name, fifaCode, score, isWinner }) => {
  return (
    <div className="flex items-center">
      {score && <Score score={score} isWinner={isWinner} />}
      <div className="relative h-6 w-9 mr-3">
        <Image fill sizes="100px" className="object-fill rounded-sm" src={flag} alt={name} />
      </div>
      <div className="font-extrabold">{fifaCode}</div>
    </div>
  );
};

export default MatchesPage;
