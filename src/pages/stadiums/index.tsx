import React from 'react';
import Image from 'next/image';
import { STADIUMS_DATA, IStadium } from '../../config/stadiums';
import DiamondDivider from '../../components/DiamondDivider';

const StadiumsPage = () => {
  return (
    <div className="flex flex-col px-3 py-6">
      {STADIUMS_DATA.map((stadium: IStadium) => (
        <section key={stadium.name}>
          <h2 className="text-2xl font-bold mb-3">{stadium.name}</h2>
          <div className="p-2.5 border-b border border-qatar">
            <div className="relative mb-2 mt-2">
              <Image
                src={stadium.image}
                alt={stadium.name}
                width={800}
                height={450}
                sizes="300px"
              />
            </div>
            <table className="table-auto m-2">
              <tbody>
                <tr className="my-2">
                  <td className="flex items-start font-semibold px-1 text-lg">Capacity:</td>
                  <td className="text-lg">{stadium.capacity}</td>
                </tr>
                <tr className="my-2">
                  <td className="flex items-start font-semibold px-1 text-lg">Location:</td>
                  <td className="text-lg">{stadium.location}</td>
                </tr>
                <tr className="my-2">
                  <td className="flex items-start font-semibold px-1 text-lg">Matches:</td>
                  <td className="text-lg">
                    <ul>
                      {stadium.matches.map((match) => (
                        <li key={stadium.name + match}>· {match}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <DiamondDivider className="my-8" />
        </section>
      ))}
    </div>
  );
};

export default StadiumsPage;
