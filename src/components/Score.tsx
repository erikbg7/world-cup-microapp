import React from 'react';

interface Props {
  score: string;
  matchState: string;
}

const Score: React.FC<Props> = ({ score, matchState }) => {
  return (
    <span
      className={`w-7 h-7 bg-white rotate-45 flex items-center justify-center ${matchState} border-r border-t mr-2`}
    >
      <strong className="-rotate-45">{score}</strong>
    </span>
  );
};

export default Score;
