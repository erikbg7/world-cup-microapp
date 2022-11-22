interface IResults extends Record<string, any[]> {}
const GROUP_RESULTS: IResults = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
};

interface IMapIndex extends Record<number, string> {}
const GROUP_BY_INDEX: IMapIndex = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
  6: 'G',
  7: 'H',
};

export { GROUP_BY_INDEX, GROUP_RESULTS };
