import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ITeam } from '../config/teams';

interface Props {
  flag: ITeam['flag'];
  name: ITeam['name'];
  score?: string;
  flagClassName?: string;
  nameClassName?: string;
  wrapperClassName?: string;
}

const TeamDetails: React.FC<Props> = ({
  flag,
  name,
  score,
  flagClassName,
  nameClassName,
  wrapperClassName,
}) => {
  return (
    <div className={clsx('flex flex-1 items-center', wrapperClassName)}>
      <div className={clsx('relative m-2 rounded-sm', flagClassName)}>
        <Image src={flag} alt={name} fill sizes="100vw" className="rounded-sm object-cover" />
      </div>
      <div className={nameClassName}>{name}</div>
      <p>
        <strong>{score}</strong>
      </p>
    </div>
  );
};

export default TeamDetails;
