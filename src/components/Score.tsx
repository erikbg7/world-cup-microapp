import clsx from 'clsx';
import React from 'react';

interface Props {
  score: string;
  isWinner: boolean;
  className?: string;
}

const Score: React.FC<Props> = ({ score, isWinner, className }) => {
  return (
    <span
      className={clsx(
        `w-7 h-7 bg-white rotate-45 flex items-center justify-center border-r border-t mr-4 `,
        isWinner ? `border-teal` : `border-red`,
        className
      )}
    >
      <strong className="-rotate-45">{score}</strong>
    </span>
  );
};

export default Score;
