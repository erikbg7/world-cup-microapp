import React from 'react';
import Image from 'next/image';
import { STADIUMS, IStadium } from '../../config/stadiums';
import DiamondDivider from '../../components/DiamondDivider';

const StadiumsPage = () => {
  return (
    <div className="flex flex-col px-3 py-6 overflow-auto">
      {STADIUMS.map((stadium: IStadium) => (
        <section key={stadium.name}>
          <h2 className="text-2xl font-bold mb-3">{stadium.name}</h2>
          <div className="p-2.5 border-b border border-qatar">
            <div className="relative mb-2 mt-2">
              <Image src={stadium.image} alt={stadium.name} width={800} height={450} className="" />
            </div>
            <p>
              <strong>Capacity:</strong> {stadium.capacity}
            </p>
            <p className="my-4">
              <strong>Location:</strong> {stadium.location}
            </p>
            <p className="flex">
              <strong>Matches:</strong>
              <ul>
                {stadium.matches.map((match) => (
                  <li key={stadium.name + match} className="pl-2">
                    · {match}
                  </li>
                ))}
              </ul>
            </p>
          </div>
          <DiamondDivider className="my-8" />
        </section>
      ))}
    </div>
  );
};

export default StadiumsPage;
