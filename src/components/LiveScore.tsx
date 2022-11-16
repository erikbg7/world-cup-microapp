import TeamDetails from './TeamDetails';
// import { LIVE_SCORES, ILiveMatch } from '../config/liveScore';
import { ILiveMatch } from '../config/liveScore';
const LIVE_SCORES: any = [];

const LiveScore = () => {
  return (
    <>
      {LIVE_SCORES.length > 0 ? (
        <>
          {LIVE_SCORES.map((liveMatch: ILiveMatch) => (
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
                <span className="px-3">{liveMatch.team2.score}</span>
              </div>
              <span>-</span>
              <div className="flex w-full p-2  items-center">
                <span className="px-3">{liveMatch.team2.score}</span>
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
