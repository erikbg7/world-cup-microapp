import { TEAMS } from '../config/teams';
import TeamDetails from './TeamDetails';

const LiveScore = () => {
  return (
    <>
      <div className="flex items-center bg-gray-800 rounded mt-3 mx-3">
        <div className="flex  justify-end mb-2 Light p-2">
          <span className="animate-ping rounded h-2 w-2 bg-liveIndicator" />
          <span className="text-lg mx-2 font-bold px-1">LIVE</span>
        </div>
        <div className="flex w-full p-2  items-center">
          <TeamDetails
            name={TEAMS.Spain.name}
            flag={TEAMS.Spain.flag}
            flagClassName="h-6 w-10"
            wrapperClassName="flex-row-reverse"
          />
          <span className="px-3">2</span>
        </div>
        <span>-</span>
        <div className="flex w-full p-2  items-center">
          <span className="px-3">0</span>
          <TeamDetails
            name={TEAMS.Argentina.name}
            flag={TEAMS.Argentina.flag}
            flagClassName="h-6 w-10"
          />
        </div>
      </div>
      <div className="flex items-center bg-gray-800 rounded mt-3 mx-3">
        <div className="flex  justify-end mb-2 Light p-2">
          <span className="animate-ping rounded h-2 w-2 bg-liveIndicator" />
          <span className="text-lg mx-2 font-bold px-1">LIVE</span>
        </div>
        <div className="flex w-full p-2 items-center">
          <TeamDetails
            name={TEAMS.Spain.name}
            flag={TEAMS.Spain.flag}
            flagClassName="h-6 w-10"
            wrapperClassName="flex-row-reverse"
          />
          <span className="px-3">2</span>
        </div>
        <span>-</span>
        <div className="flex w-full p-2  items-center">
          <span className="px-3">0</span>
          <TeamDetails
            name={TEAMS.Argentina.name}
            flag={TEAMS.Argentina.flag}
            flagClassName="h-6 w-10"
          />
        </div>
      </div>
    </>
  );
};

export default LiveScore;
