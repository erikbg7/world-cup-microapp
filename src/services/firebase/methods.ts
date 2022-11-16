import { doc, getDoc, setDoc } from '@firebase/firestore';
import { IGroupResults } from '../../models/groups';
import { db } from './init';

const getGroupStageResults = async (): Promise<IGroupResults> => {
  const docRef = await getDoc(doc(db, 'groups', 'results'));
  const tablesString = docRef.get('tables');

  const tables = JSON.parse(tablesString);
  console.log({ tables });
  return tables as IGroupResults;
};

const setGroupStageResults = async (results: IGroupResults) => {
  const tables = JSON.stringify(results);
  await setDoc(doc(db, 'groups', 'results'), { tables }, { merge: true });
};

export { getGroupStageResults, setGroupStageResults };
