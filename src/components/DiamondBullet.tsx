import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const DiamondBullet: React.FC<{ size: number; className?: string; icon?: string }> = (props) => {
  return (
    <div
      className={clsx(
        `inline-block h-${props.size} w-${props.size} bg-teal rotate-45`,
        props.className
      )}
    >
      {props.icon && (
        <div className="h-[10px] h-[10px]">
          <Image src={props.icon} alt="arrow" width="10" height="10" className="-rotate-45" />
        </div>
      )}
    </div>
  );
};

export default DiamondBullet;
