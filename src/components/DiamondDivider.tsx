import clsx from 'clsx';
import DiamondBullet from './DiamondBullet';

const DiamondDivider: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={clsx('flex items-center justify-center w-full text-center', props.className)}>
      <DiamondBullet size={3} />
      <div className="h-[1px] w-5 bg-teal"></div>
      <DiamondBullet size={2} />
      <div className="h-[1px] w-24 bg-teal"></div>
    </div>
  );
};

export default DiamondDivider;
