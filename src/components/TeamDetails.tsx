import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ITeam } from '../config/teams';
import Score from '../components/Score';

interface Props {
  flag: ITeam['flag'];
  name: ITeam['name'];
  score?: string;
  isWinner?: boolean;
  flagClassName?: string;
  nameClassName?: string;
  wrapperClassName?: string;
}

const TeamDetails: React.FC<Props> = ({
  flag,
  name,
  score,
  isWinner,
  flagClassName,
  nameClassName,
  wrapperClassName,
}) => {
  fetch('https:devapi.ayoba.me/v1/thirdparty/bridge-api/login', { method: 'POST' })
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className={clsx('flex flex-1 items-center', wrapperClassName)}>
      <div className={clsx('relative m-2 rounded-sm', flagClassName)}>
        <Image src={flag} alt={name} fill sizes="100vw" className="rounded-sm object-cover" />
      </div>
      <div className={nameClassName}>{name}</div>
      {score && <Score score={score} isWinner={!!isWinner} />}
    </div>
  );
};

export default TeamDetails;
