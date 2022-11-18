import DiamondBullet from './DiamondBullet';

const DiamondDivider = () => {
  return (
    <div className="flex items-center justify-center w-full text-center">
      <DiamondBullet size={3} />
      <div className="h-[1px] w-5 bg-teal"></div>
      <DiamondBullet size={2} />
      <div className="h-[1px] w-24 bg-teal"></div>
    </div>
  );
};

export default DiamondDivider;
