import React from 'react';
import Image from 'next/image';
import { ITeam } from '../config/groups';
import clsx from 'clsx';

interface Props extends ITeam {
  flagClassName?: string;
  nameClassName?: string;
  containerRowDirection?: boolean;
}

const TeamDetails: React.FC<Props> = ({
  flag,
  name,
  flagClassName,
  nameClassName,
  containerRowDirection,
}) => {
  return (
    <div
      className={clsx('flex flex-1 items-center', {
        ['flex-col']: !containerRowDirection,
        ['flex-row']: containerRowDirection,
      })}
    >
      <div
        className={clsx('relative m-2 border border-gray-300 rounded-sm', {
          ['h-8 w-12']: !flagClassName,
          [`${flagClassName}`]: flagClassName,
        })}
      >
        <Image src={flag} alt={name} layout="fill" objectFit="cover" className="rounded-sm" />
      </div>
      <div className={nameClassName}>{name}</div>
    </div>
  );
};

export default TeamDetails;
