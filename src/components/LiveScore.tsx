import { TEAMS } from '../config/teams';
import TeamDetails from './TeamDetails';

const LiveScore = () => {
  return (
    <div className="flex flex-col grid-row-2 p-2 rounded bg-blackishLight m-3">
      <div className="flex items-center justify-end mb-2">
        <span className="animate-ping rounded h-2 w-2 bg-liveIndicator" />
        <span className="text-lg mx-2 font-bold">LIVE</span>
      </div>
      <div className="flex w-full divide-x p-2 bg-blackish items-center">
        <TeamDetails name={TEAMS.Spain.name} flag={TEAMS.Spain.flag} flagClassName="h-6 w-10" />
        <span className="px-3">2</span>
      </div>

      <span className="font-medium mb-1 p-3">VS</span>
      <div className="flex w-full divide-x p-2 bg-blackish items-center">
        <TeamDetails
          name={TEAMS.Argentina.name}
          flag={TEAMS.Argentina.flag}
          flagClassName="h-6 w-10"
        />
        <span className="px-3">0</span>
      </div>
    </div>
  );
};

export default LiveScore;
