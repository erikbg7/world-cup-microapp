import React from 'react';
import Image from 'next/image';
import { IMatch } from '../../config/matches';
import { IRound, KNOCKOUT_STAGE_ROUNDS } from '../../config/knockout-stage';
import TeamDetails from '../../components/TeamDetails';
import DateTime from '../../components/DateTime';
import GroupMatchModal, { IGroupMatchModalHandler } from '../../components/GroupMatchModal';
import ClockIcon from '../../icons/ClockIcon';
import { TEAMS } from '../../config/teams';

const KnockoutStagePage = () => {
  return (
    <div className="flex lg:justify-center pl-2.5 ">
      {KNOCKOUT_STAGE_ROUNDS.map((round) => (
        <div key={round.type} className="flex flex-col justify-around mx-2">
          <KnockoutRound {...round} />
        </div>
      ))}
      <div key="Champion" className="flex flex-col justify-around mx-2">
        <div
          id="Champion"
          className={
            'border flex flex-col align-center border-qatar p-1 my-1.5 w-36 hover:cursor-pointer'
          }
        >
          <div className="font-bold">!!! Champion</div>
          <div className="text-lg relative w-8 h-5 h-6">
            <div className="w-8 h-5 h-6">
              <Image
                src={TEAMS.Argentina.flag}
                alt={TEAMS.Argentina.name}
                fill
                sizes="50px"
                className="rounded-sm object-cover"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-1 items-center">
              <div className="relative m-2 rounded-sm">
                <Image
                  src={TEAMS.Argentina.flag}
                  alt={TEAMS.Argentina.name}
                  fill
                  sizes="100px"
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="font-bold">{TEAMS.Argentina.name} !!!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KnockoutRound: React.FC<IRound> = ({ type, matches }) => {
  return (
    <>
      {matches.map((match, idx) => (
        <div key={match.date} className="relative">
          <MatchItem idx={idx as number} match={{ ...match, time: match.date }} type={type} />
        </div>
      ))}
    </>
  );
};

interface IMatchItem {
  idx: number;
  match: IMatch;
  type: string;
}

const MatchItem: React.FC<IMatchItem> = ({ match, type }) => {
  const modalRef = React.useRef<IGroupMatchModalHandler>(null);

  const handleMatchClick = () => modalRef.current?.open();
  return (
    <>
      <div
        id={type}
        onClick={handleMatchClick}
        className={'border border-qatar p-1 my-1.5 w-36 hover:cursor-pointer'}
      >
        <span className="flex items-center text-xs px-1 mb-2">
          <ClockIcon className="w-3 h-3 mr-2" />
          <DateTime className="font-semibold" timestamp={match.time} format="dateHHHHDDMM" />
        </span>
        <div className="">
          <TeamDetails
            name={match.team1.name}
            flag={match.team1.flag}
            flagClassName="w-8 h-5 h-6 m-1"
            nameClassName="text-sm font-light"
          />
          <TeamDetails
            name={match.team2.name}
            flag={match.team2.flag}
            flagClassName="w-8 h-5 m-1"
            nameClassName="text-sm font-light"
          />
        </div>
      </div>
      <GroupMatchModal
        ref={modalRef}
        title={type}
        match={{ team1: match.team1, team2: match.team2 } as IMatch}
      />
    </>
  );
};

export default KnockoutStagePage;
