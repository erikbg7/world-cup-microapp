import { doc, getDoc, setDoc } from '@firebase/firestore';
import { IGroupResults } from '../../models/groups';
import { db } from './init';

const getGroupStageResults = async (): Promise<IGroupResults> => {
  // const docRef = await getDoc(doc(db, 'groups', 'results'));
  // const tablesString = docRef.get('tables');

  // const tables = JSON.parse(tablesString);
  // return tables as IGroupResults;
  const results = await fetchFakeGroupStageResults();
  return results;
};

const setGroupStageResults = async (results: IGroupResults) => {
  const tables = JSON.stringify(results);
  await setDoc(doc(db, 'groups', 'results'), { tables }, { merge: true });
};

// Hardcoded results to keep functionality after DDBB removal
const fetchFakeGroupStageResults = async (): Promise<IGroupResults> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getHardcodedGroupStageResults());
    }, 600);
  });
};

const getHardcodedGroupStageResults = (): IGroupResults => {
  return {
    A: [
      {
        name: 'Netherlands',
        played: '3',
        won: '2',
        lost: '0',
        draw: '1',
        points: '7',
      },
      {
        name: 'Senegal',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Ecuador',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Qatar',
        played: '3',
        won: '0',
        lost: '3',
        draw: '0',
        points: '0',
      },
    ],
    B: [
      {
        name: 'England',
        played: '3',
        won: '2',
        lost: '0',
        draw: '1',
        points: '7',
      },
      {
        name: 'USA',
        played: '3',
        won: '1',
        lost: '0',
        draw: '2',
        points: '5',
      },
      {
        name: 'Iran',
        played: '3',
        won: '1',
        lost: '2',
        draw: '0',
        points: '3',
      },
      {
        name: 'Wales',
        played: '3',
        won: '0',
        lost: '2',
        draw: '1',
        points: '1',
      },
    ],
    C: [
      {
        name: 'Argentina',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Poland',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Mexico',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Saudi Arabia',
        played: '3',
        won: '1',
        lost: '2',
        draw: '0',
        points: '3',
      },
    ],
    D: [
      {
        name: 'France',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Australia',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Tunisia',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Denmark',
        played: '3',
        won: '0',
        lost: '2',
        draw: '1',
        points: '1',
      },
    ],
    E: [
      {
        name: 'Japan',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Spain',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Germany',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Costa Rica',
        played: '3',
        won: '1',
        lost: '2',
        draw: '0',
        points: '3',
      },
    ],
    F: [
      {
        name: 'Morocco',
        played: '3',
        won: '2',
        lost: '0',
        draw: '1',
        points: '7',
      },
      {
        name: 'Croatia',
        played: '3',
        won: '1',
        lost: '0',
        draw: '2',
        points: '5',
      },
      {
        name: 'Belgium',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Canada',
        played: '3',
        won: '0',
        lost: '3',
        draw: '0',
        points: '0',
      },
    ],
    G: [
      {
        name: 'Brazil',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Switzerland',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Cameroon',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Serbia',
        played: '3',
        won: '0',
        lost: '2',
        draw: '1',
        points: '1',
      },
    ],
    H: [
      {
        name: 'Portugal',
        played: '3',
        won: '2',
        lost: '1',
        draw: '0',
        points: '6',
      },
      {
        name: 'Korea Republic',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Uruguay',
        played: '3',
        won: '1',
        lost: '1',
        draw: '1',
        points: '4',
      },
      {
        name: 'Ghana',
        played: '3',
        won: '1',
        lost: '2',
        draw: '0',
        points: '3',
      },
    ],
  };
};

export { getGroupStageResults, setGroupStageResults };
