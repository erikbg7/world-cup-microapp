import React from 'react';
import Image from 'next/image';
import { STADIUMS, IStadium } from '../../config/stadiums';

const StadiumsPage = () => {
  return (
    <div className="p-2 flex flex-col overflow-auto">
      {STADIUMS.map((stadium: IStadium) => (
        <div key={stadium.name} className="pb-5 border-b border-[#FDB936] mb-5 text-[#ddd]">
          <h2 className="text-xl">{stadium.name}</h2>
          <div className="relative mb-2 mt-2">
            <Image src={stadium.image} alt={stadium.name} width={800} height={450} className="" />
          </div>
          <p>
            <strong>Capacity:</strong> {stadium.capacity}
          </p>
          <p>
            <strong>Location:</strong> {stadium.location}
          </p>
          <h3>
            <strong>Matches:</strong>
          </h3>
          <ul className="list-disc">
            {stadium.matches.map((match) => (
              <li key={stadium.name + match}>- {match}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StadiumsPage;
