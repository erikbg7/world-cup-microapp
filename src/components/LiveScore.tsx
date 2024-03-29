import React from 'react';
import TeamDetails from './TeamDetails';
import { ILiveMatch } from '../config/liveScore';
import { fetchAllScores } from '../services/api';
import { useQuery } from '@tanstack/react-query';
import { getDateByTimezone } from '../utils/date';
import GroupMatchModal, { IGroupMatchModalHandler } from './GroupMatchModal';
import { IMatch } from '../config/matches';
import DiamondBullet from '../components/DiamondBullet';

const STATUS = ['FT', 'AP', 'AET', 'AW', 'HW', 'D'];

const LiveScore = () => {
  const { data } = useQuery(['allScores'], fetchAllScores, { refetchInterval: 30000 });

  return (
    <>
      {data?.length > 0 ? (
        <>
          {data
            .filter((m: ILiveMatch) => {
              const d1 = new Date(Number(m.time));
              const d2 = new Date();
              const isSameDate = d1.getDate() === d2.getDate();
              const isSameYear = d1.getFullYear() === d2.getFullYear();

              return isSameDate && isSameYear;
            })
            .sort((m1: ILiveMatch, m2: ILiveMatch) => Number(m1.time) - Number(m2.time))
            .map((liveMatch: ILiveMatch) => (
              <LiveMatchItem key={liveMatch.time} liveMatch={liveMatch} />
            ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const LiveMatchItem: React.FC<{ liveMatch: ILiveMatch }> = (props) => {
  const modalRef = React.useRef<IGroupMatchModalHandler>(null);
  const handleMatchClick = () => modalRef.current?.open(props.liveMatch);

  return (
    <div
      onClick={handleMatchClick}
      className="flex items-center bg-teal rounded mt-3 mx-3 text-white font-bold relative hover:cursor-pointer"
    >
      <div className="flex p-2  items-center w-20">
        <LiveMatchLabel match={props.liveMatch} />
      </div>
      <div className="flex p-2 items-center flex-1 justify-items-start pr-2">
        <div className="flex items-center">
          <TeamDetails
            name={props.liveMatch.team1.fifaCode}
            flag={props.liveMatch.team1.flag}
            flagClassName="h-6 w-10"
            nameClassName="hidden xs:block"
            wrapperClassName="flex-row-reverse"
          />
          <span id={`${props.liveMatch.team1.name}-score`} className="px-2">
            {props.liveMatch.scores?.[0]}
          </span>
        </div>
        <span>-</span>
        <div className="flex items-center">
          <span id={`${props.liveMatch.team2.name}-score`} className="px-2">
            {props.liveMatch.scores?.[1]}
          </span>
          <TeamDetails
            name={props.liveMatch.team2.fifaCode}
            flag={props.liveMatch.team2.flag}
            flagClassName="h-6 w-10"
            nameClassName="hidden xs:block"
          />
        </div>
        <DiamondBullet
          className="bg-white h-[18px] w-[18px] flex items-center justify-center ml-[auto]"
          size={3}
          icon="/images/arrow.svg"
        />
      </div>
      <GroupMatchModal
        isLive
        ref={modalRef}
        title={
          props.liveMatch.group
            ? `Group ${props.liveMatch.group!}`
            : props.liveMatch.title ?? 'Match Results'
        }
        match={
          {
            team1: props.liveMatch.team1,
            team2: props.liveMatch.team2,
            matchId: props.liveMatch.matchId,
          } as IMatch
        }
      />
    </div>
  );
};

const LiveMatchLabel: React.FC<{ match: ILiveMatch }> = ({ match }) => {
  if (match.result && STATUS.includes(match.result)) {
    return <span className="text-lg mx-2 px-1">{match.result}</span>;
  } else if (match.result.includes(':')) {
    return (
      <span className="text-lg mx-2 px-1">
        {getDateByTimezone({ timestamp: Number(match.time), format: 'dateHour' })}
      </span>
    );
  }

  return (
    <>
      <span className="animate-ping rounded h-2 w-2 bg-qatar absolute" />
      <span className="text-lg mx-2 px-1">{match.result}</span>
    </>
  );
};

export default LiveScore;
