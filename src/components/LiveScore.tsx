import TeamDetails from './TeamDetails';
// import { LIVE_SCORES, ILiveMatch } from '../config/liveScore';
import { ILiveMatch } from '../config/liveScore';
import { fetchAllScores } from '../services/api';
import { useQuery } from '@tanstack/react-query';
import { getDateByTimezone } from '../utils/date';

const STATUS = ['FT', 'AP', 'AET', 'AW', 'HW', 'D'];

const LiveScore = () => {
  const { data } = useQuery(['allScores'], fetchAllScores, { refetchInterval: 30000 });

  const renderLiveScore = (m: ILiveMatch) => {
    if (m.result && STATUS.includes(m.result)) {
      return <span className="text-lg mx-2 px-1">{m.result}</span>;
    } else if (m.result.includes(':')) {
      return (
        <span className="text-lg mx-2 px-1">
          {getDateByTimezone({ timestamp: Number(m.time), format: 'dateHour' })}
        </span>
      );
    }

    return (
      <>
        <span className="animate-ping rounded h-2 w-2 bg-qatar absolute" />
        <span className="text-lg mx-2 px-1">{m.result}</span>
      </>
    );
  };

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
              <div
                key={liveMatch.team1.fifaCode + liveMatch.team2.fifaCode}
                className="flex items-center bg-teal rounded mt-3 mx-3 text-white font-bold relative"
              >
                <div style={{ width: 100 }} className="flex p-2  items-center w-30">
                  {renderLiveScore(liveMatch)}
                </div>
                <div className="flex p-2 items-center flex-1 justify-items-start pr-2">
                  <div className="flex items-center">
                    <TeamDetails
                      name={liveMatch.team1.fifaCode}
                      flag={liveMatch.team1.flag}
                      flagClassName="h-6 w-10"
                      nameClassName="hidden xs:block"
                      wrapperClassName="flex-row-reverse"
                    />
                    <span className="px-3">{liveMatch.scores[0]}</span>
                  </div>
                  <span>-</span>
                  <div className="flex items-center">
                    <span className="px-3">{liveMatch.scores[1]}</span>
                    <TeamDetails
                      name={liveMatch.team2.fifaCode}
                      flag={liveMatch.team2.flag}
                      flagClassName="h-6 w-10"
                      nameClassName="hidden xs:block"
                    />
                  </div>
                </div>
              </div>
            ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default LiveScore;
