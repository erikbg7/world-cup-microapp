interface IStadium {
  name: string;
  capacity: number;
  image: string;
  matches: string[];
  location: string;
}
const STADIUMS: IStadium[] = [
  {
    name: 'Lusail Stadium',
    capacity: 80000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Lusail-Stadium.jpg?h=48c16481&itok=8C6VGuWW',
    matches: ['5x Group Matches', '1x Round of 16', '1x Quarter-Final', '1x Semi-Final]', 'Final'],
    location: 'Lusail City, 20km north of central Doha',
  },
  {
    name: 'Al Bayt Stadium',
    capacity: 60000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Al-Bayt-Stadium.jpg?h=aa3f82a2&itok=tiOliQAU',
    matches: [
      '5x Group Matches (incl. Opening Match)',
      '1x Round of 16',
      '1x Quarter-Final',
      '1x Semi-Final]',
    ],
    location: 'Al Khor City, 35km north of central Doha',
  },
  {
    name: 'Ahmad Bin Ali Stadium',
    capacity: 40000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Ahmad-Bin-Ali-Stadium.jpg?h=8f9cfe54&itok=jXevwslQ',
    matches: ['5x Group Matches', '1x Round of 16'],
    location: 'Umm Al Afaei, 20km west of central Doha',
  },
  {
    name: 'Al Janoub Stadium',
    capacity: 40000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Al-Janoub-Stadium.jpg?h=f8ea1366&itok=S3pVgjb6',
    matches: ['5x Group Matches', '1x Round of 16'],
    location: 'Al Wakrah, 22km east of central Doha',
  },
  {
    name: 'Al Thumama Stadium',
    capacity: 40000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Al-Thumama-Stadium.jpg?h=98540297&itok=nFjM5LqP',
    matches: ['5x Group Matches', '1x Round of 16', '1x Quarter-Final'],
    location: 'Al Thumama, 12km south of central Doha',
  },
  {
    name: 'Education City Stadium',
    capacity: 40000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Education-City-Stadium.jpg?h=bf548865&itok=CJFsdNRm',
    matches: ['5x Group Matches', '1x Round of 16', '1x Quarter-Final'],
    location: 'Al Rayyan, 13km north-west of central Doha',
  },
  {
    name: 'Khalifa International Stadium',
    capacity: 40000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Khalifa-International-Stadium.jpg?h=b5673621&itok=reV3zOJN',
    matches: ['5x Group Matches', '1x Round of 16', 'Match for Third Place'],
    location: 'Aspire, 5km west of central Doha',
  },
  {
    name: 'Stadium 974',
    capacity: 40000,
    image:
      'https://www.qatar2022.qa/sites/default/files/styles/800x450/public/2022-08/Stadium-974.jpg?h=27457cb0&itok=TSlJw7Nj',
    matches: ['5x Group Matches', '1x Round of 16'],
    location: 'Ras Abu Aboud, 10km east of central Doha',
  },
];

export { STADIUMS };
export type { IStadium };
