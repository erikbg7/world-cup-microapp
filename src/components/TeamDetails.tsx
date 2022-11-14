import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { ITeam } from '../config/teams';

interface Props extends ITeam {
  flagClassName?: string;
  nameClassName?: string;
  wrapperClassName?: string;
}

const TeamDetails: React.FC<Props> = ({
  flag,
  name,
  flagClassName,
  nameClassName,
  wrapperClassName,
}) => {
  return (
    <div className={clsx('flex flex-1 items-center', wrapperClassName)}>
      <div className={clsx('relative m-2 border border-gray-300 rounded-sm', flagClassName)}>
        <Image src={flag} alt={name} layout="fill" objectFit="cover" className="rounded-sm" />
      </div>
      <div className={nameClassName}>{name}</div>
    </div>
  );
};

export default TeamDetails;
