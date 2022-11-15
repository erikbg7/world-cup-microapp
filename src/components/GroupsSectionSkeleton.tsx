import React from 'react';

const GroupsSectionSkeleton = () => {
  return (
    <section className="flex flex-col items-center animate-pulse p-6 sm:p-12 w-full px-2 py-0">
      <div className="h-8 w-full my-2 bg-slate-700 rounded-md"></div>
      <div className="h-5 w-[95%] my-2 bg-slate-700 rounded-md"></div>
      <div className="h-5 w-[95%] my-2 bg-slate-700 rounded-md"></div>
      <div className="h-5 w-[95%] my-2 bg-slate-700 rounded-md"></div>
      <div className="h-5 w-[95%] my-2 bg-slate-700 rounded-md"></div>
    </section>
  );
};

export default GroupsSectionSkeleton;
