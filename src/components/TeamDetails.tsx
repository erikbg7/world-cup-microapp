import React from 'react';
import Image from 'next/image';
import { ITeam } from '../config/groups';
import clsx from 'clsx';

interface Props extends ITeam {
  flagClassName?: string;
  nameClassName?: string;
}

const TeamDetails: React.FC<Props> = ({ flag, name, flagClassName, nameClassName }) => {
  return (
    <div className="flex flex-col flex-1 items-center">
      <div
        className={clsx('relative h-8 w-12 m-2 border border-gray-300 rounded-sm', flagClassName)}
      >
        <Image src={flag} alt={name} layout="fill" objectFit="cover" className="rounded-sm" />
      </div>
      <div className={nameClassName}>{name}</div>
    </div>
  );
};

export default TeamDetails;
