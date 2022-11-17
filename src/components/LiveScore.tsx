import TeamDetails from './TeamDetails';
// import { LIVE_SCORES, ILiveMatch } from '../config/liveScore';
import { ILiveMatch } from '../config/liveScore';
import { useEffect } from 'react';
import { fetchAllScores } from '../services/api';
import { useQuery } from '@tanstack/react-query';

const LiveScore = () => {
  const { data } = useQuery(['allScores'], fetchAllScores, { refetchInterval: 30000 });

  return (
    <>
      {data?.length > 0 ? (
        <>
          {data
            .filter((t: any) => {
              const d1 = new Date(t.time);
              const d2 = new Date();
              const d3 = new Date(1670092200000);
              const isSameDate = d1.getDate() === d2.getDate();
              const isSameYear = d1.getFullYear() === d2.getFullYear();
              const lastEventDate = d2.getDate() < d3.getDate();

              return isSameDate && isSameYear && lastEventDate;
            })
            .map((liveMatch: ILiveMatch) => (
              <div
                key={liveMatch.team1.fifaCode + liveMatch.team2.fifaCode}
                className="flex items-center bg-gray-800 rounded mt-3 mx-3"
              >
                <div className="flex  justify-end mb-2 Light p-2">
                  <span className="animate-ping rounded h-2 w-2 bg-liveIndicator" />
                  <span className="text-lg mx-2 font-bold px-1">LIVE</span>
                </div>

                <div className="flex w-full p-2  items-center">
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
                <div className="flex w-full p-2  items-center">
                  <span className="px-3">{liveMatch.scores[1]}</span>
                  <TeamDetails
                    name={liveMatch.team2.fifaCode}
                    flag={liveMatch.team2.flag}
                    flagClassName="h-6 w-10"
                    nameClassName="hidden xs:block"
                  />
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
