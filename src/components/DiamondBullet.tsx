import React from 'react';
import clsx from 'clsx';

const DiamondBullet: React.FC<{ size: number; className?: string }> = (props) => {
  return (
    <div
      className={clsx(
        `inline-block h-${props.size} w-${props.size} bg-teal rotate-45`,
        props.className
      )}
    />
  );
};

export default DiamondBullet;
