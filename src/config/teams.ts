interface ITeam {
  name: string;
  fifaCode: string;
  flag: string;
  goalkeepers: string[];
  defenders: string[];
  midfielders: string[];
  forwards: string[];
  score?: string;
}

const TEAMS = {
  Qatar: {
    name: 'Qatar',
    fifaCode: 'QAT',
    flag: '/flags/qa.webp',
    goalkeepers: ['Saad Al-Sheeb', 'Meshaal Barsham', 'Yousef Hassan'],
    defenders: [
      'Pedro Miguel',
      'Musaab Khidir',
      'Tarek Salman',
      'Bassam Al-Rawi',
      'Boualem Khoukhi',
      'Abdelkarim Hassan',
      'Homam Ahmed',
      'Jassem Gaber',
    ],
    midfielders: [
      'Ali Asad',
      'Assim Madabo',
      'Mohammed Waad',
      'Salem Al-Hajri',
      'Moustafa Tarek',
      'Karim Boudiaf',
      'Abdelaziz Hatim',
      'Ismail Mohamad',
    ],
    forwards: [
      'Naif Al-Hadhrami',
      'Ahmed Alaaeldin',
      'Hassan Al-Haydos',
      'Khalid Muneer',
      'Akram Afif',
      'Almoez Ali',
      'Mohamed Muntari',
    ],
  },
  Ecuador: {
    name: 'Ecuador',
    fifaCode: 'ECU',
    flag: '/flags/ec.webp',
    goalkeepers: ['Moises Ramirez', 'Alexander Dominguez', 'Hernan Galindez'],
    defenders: [
      'Piero Hincapie',
      'Robert Arboleda',
      'Pervis Estupinan',
      'Angelo Preciado',
      'Jackson Porozo',
      'Xavier Arreaga',
      'Felix Torres',
      'Diego Palacios',
      'William Pacho',
    ],
    midfielders: [
      'Carlos Gruezo',
      'Jose Cifuentes',
      'Alan Franco',
      'Moises Caicedo',
      'Angel Mena',
      'Jeremy Sarmiento',
      'Ayrton Preciado',
      'Sebastian Mendez',
      'Gonzalo Plata',
      'Romario Ibarra',
    ],
    forwards: ['Djorkaeff Reasco', 'Kevin Rodriguez', 'Michael Estrada', 'Enner Valencia'],
  },
  Senegal: {
    name: 'Senegal',
    fifaCode: 'SEN',
    flag: '/flags/sn.webp',
    goalkeepers: ['Edouard Mendy', 'Alfred Gomis', 'Seny Dieng'],
    defenders: [
      'Kalidou Koulibaly',
      'Abdou Diallo',
      'Youssouf Sabaly',
      'Fode Ballo-Toure',
      'Pape Abdou Cisse',
      'Ismail Jakobs',
      'Formose Mendy',
    ],
    midfielders: [
      'Idrissa Gueye',
      'Cheikhou Kouyate',
      'Nampalys Mendy',
      'Krepin Diatta',
      'Pape Gueye',
      'Pape Matar Sarr',
      'Pathe Ciss',
      'Moustapha Name',
      'Loum Ndiaye',
    ],
    forwards: [
      'Ismaila Sarr',
      'Boulaye Dia',
      'Bamba Dieng',
      'Famara Diedhiou',
      'Nicolas Jackson',
      'Iliman Ndiaye',
    ],
  },
  Netherlands: {
    name: 'Netherlands',
    fifaCode: 'NED',
    flag: '/flags/nl.webp',
    goalkeepers: ['Justin Bijlow', 'Andries Noppert', 'Remko Pasveer'],
    defenders: [
      'Virgil van Dijk',
      'Nathan Ake',
      'Daley Blind',
      'Jurrien Timber',
      'Denzel Dumfries',
      'Stefan de Vrij',
      'Matthijs de Ligt',
      'Tyrell Malacia',
      'Jeremie Frimpong',
    ],
    midfielders: [
      'Frenkie de Jong',
      'Steven Berghuis',
      'Davy Klaassen',
      'Teun Koopmeiners',
      'Marten de Roon',
      'Cody Gakpo',
      'Kenneth Taylor',
      'Xavi Simons',
    ],
    forwards: [
      'Memphis Depay',
      'Steven Bergwijn',
      'Vincent Janssen',
      'Luuk de Jong',
      'Noa Lang',
      'Wout Weghorst',
    ],
  },
  England: {
    name: 'England',
    fifaCode: 'ENG',
    flag: '/flags/gb-eng.webp',
    goalkeepers: ['Jordan Pickford', 'Aaron Ramsdale', 'Nick Pope'],
    defenders: [
      'Kieran Trippier',
      'Trent Alexander-Arnold',
      'Kyle Walker',
      'Ben White',
      'Harry Maguire',
      'John Stones',
      'Eric Dier',
      'Conor Coady',
      'Luke Shaw',
    ],
    midfielders: [
      'Declan Rice',
      'Jude Bellingham',
      'Kalvin Phillips',
      'Jordan Henderson',
      'Conor Gallagher',
      'Mason Mount',
    ],
    forwards: [
      'Harry Kane',
      'Callum Wilson',
      'Marcus Rashford',
      'Raheem Sterling',
      'Bukayo Saka',
      'Phil Foden',
      'Jack Grealish',
      'James Maddison',
    ],
  },
  Iran: {
    name: 'Iran',
    fifaCode: 'IRN',
    flag: '/flags/ir.webp',
    goalkeepers: ['Alireza Beiranvand', 'Amir Abedzadeh', 'Hossein Hosseini', 'Payam Niazmand'],
    defenders: [
      'Ehsan Hajsafi',
      'Morteza Pouraliganji',
      'Ramin Rezaeian',
      'Milad Mohammadi',
      'Hossein Kanani',
      'Shojae Khalilzadeh',
      'Sadegh Moharrami',
      'Rouzbeh Cheshmi',
      'Majid Hosseini',
      'Abolfazl Jalali',
    ],
    midfielders: [
      'Ahmad Noorollahi',
      'Saman Ghoddos',
      'Vahid Amiri',
      'Saeid Ezatolahi',
      'Alireza Jahanbakhsh',
      'Mehdi Torabi',
      'Ali Gholizadeh',
      'Ali Karimi',
    ],
    forwards: ['Karim Ansarifard', 'Sardar Azmoun', 'Mehdi Taremi'],
  },
  USA: {
    name: 'USA',
    fifaCode: 'USA',
    flag: '/flags/us.webp',
    goalkeepers: ['Matt Turner', 'Sean Johnson', 'Ethan Horvath'],
    defenders: [
      'Cameron Carter-Vickers',
      'Sergino Dest',
      'Aaron Long',
      'Shaq Moore',
      'Tim Ream',
      'Antonee Robinson',
      'Joe Scally',
      'DeAndre Yedlin',
      'Walker Zimmerman',
    ],
    midfielders: [
      'Brenden Aaronson',
      'Kellyn Acosta',
      'Tyler Adams',
      'Luca de la Torre',
      'Weston McKennie',
      'Yunus Musah',
      'Cristian Roldan',
    ],
    forwards: [
      'Jesus Ferreira',
      'Jordan Morris',
      'Christian Pulisic',
      'Gio Reyna',
      'Joshua Sargent',
      'Timothy Weah',
      'Haji Wright',
    ],
  },
  Wales: {
    name: 'Wales',
    fifaCode: 'WAL',
    flag: '/flags/gb-wls.webp',
    goalkeepers: ['Wayne Hennessey', 'Danny Ward', 'Adam Davies'],
    defenders: [
      'Ben Davies',
      'Ben Cabango',
      'Tom Lockyer',
      'Joe Rodon',
      'Chris Mepham',
      'Ethan Ampadu',
      'Chris Gunter',
      'Neco Williams',
      'Connor Roberts',
    ],
    midfielders: [
      'Sorba Thomas',
      'Joe Allen',
      'Matthew Smith',
      'Dylan Levitt',
      'Harry Wilson',
      'Joe Morrell',
      'Jonny Williams',
      'Aaron Ramsey',
      'Rubin Colwill',
    ],
    forwards: ['Gareth Bale', 'Kieffer Moore', 'Mark Harris', 'Brennan Johnson', 'Daniel James'],
  },
  Argentina: {
    name: 'Argentina',
    fifaCode: 'ARG',
    flag: '/flags/ar.webp',
    goalkeepers: ['Emiliano Martinez', 'Geronimo Rulli', 'Franco Armani'],
    defenders: [
      'Nahuel Molina',
      'Gonzalo Montiel',
      'Cristian Romero',
      'German Pezzella',
      'Nicolas Otamendi',
      'Lisandro Martinez',
      'Marcos Acuna',
      'Nicolas Tagliafico',
      'Juan Foyth',
    ],
    midfielders: [
      'Rodrigo De Paul',
      'Leandro Paredes',
      'Alexis Mac Allister',
      'Guido Rodriguez',
      'Papu Gomez',
      'Enzo Fernandez',
      'Exequiel Palacios',
    ],
    forwards: [
      'Lionel Messi',
      'Angel Di Maria',
      'Lautaro Martinez',
      'Julian Alvarez',
      'Paulo Dybala',
      'Angel Correa',
      'Thiago Almada',
    ],
  },
  SaudiArabia: {
    name: 'Saudi Arabia',
    fifaCode: 'KSA',
    flag: '/flags/sa.webp',
    goalkeepers: ['Mohamed Al-Owais', 'Nawaf Al-Aqidi', 'Mohamed Al-Yami'],
    defenders: [
      'Yasser Al-Shahrani',
      'Ali Al-Bulaihi',
      'Abdulelah Al-Amri',
      'Abdullah Madu',
      'Hassan Tambakti',
      'Sultan Al-Ghanam',
      'Mohammed Al-Breik',
      'Saud Abdulhamid',
    ],
    midfielders: [
      'Salman Al-Faraj',
      'Riyadh Sharahili',
      'Ali Al-Hassan',
      'Mohamed Kanno',
      'Abdulelah Al-Malki',
      'Sami Al-Najei',
      'Abdullah Otayf',
      'Nasser Al-Dawsari',
      'Abdulrahman Al-Aboud',
      'Salem Al-Dawsari',
      'Hattan Bahebri',
    ],
    forwards: ['Haitham Asiri', 'Saleh Al-Shehri', 'Firas Al-Buraikan'],
  },
  Mexico: {
    name: 'Mexico',
    fifaCode: 'MEX',
    flag: '/flags/mx.webp',
    goalkeepers: ['Guillermo Ochoa', 'Alfredo Talavera', 'Rodolfo Cota'],
    defenders: [
      'Kevin Alvarez',
      'Nestor Araujo',
      'Gerardo Arteaga',
      'Jesus Gallardo',
      'Hector Moreno',
      'Cesar Montes',
      'Jorge Sanchez',
      'Johan Vasquez',
    ],
    midfielders: [
      'Edson Alvarez',
      'Roberto Alvarado',
      'Uriel Antuna',
      'Luis Chavez',
      'Andres Guardado',
      'Erick Gutierrez',
      'Hector Herrera',
      'Orbelin Pineda',
      'Carlos Rodriguez',
      'Luis Romo',
    ],
    forwards: [
      'Rogelio Funes Mori',
      'Raul Jimenez',
      'Hirving Lozano',
      'Henry Martin',
      'Alexis Vega',
    ],
  },
  Poland: {
    name: 'Poland',
    fifaCode: 'POL',
    flag: '/flags/pl.webp',
    goalkeepers: ['Wojciech Szczesny', 'Bartlomiej Dragowski', 'Lukasz Skorupski'],
    defenders: [
      'Jan Bednarek',
      'Kamil Glik',
      'Robert Gumny',
      'Artur Jedrzejczyk',
      'Jakub Kiwior',
      'Mateusz Wieteska',
      'Bartosz Bereszynski',
      'Matthew Cash',
      'Nicola Zalewski',
    ],
    midfielders: [
      'Krystian Bielik',
      'Przemyslaw Frankowski',
      'Kamil Grosicki',
      'Grzegorz Krychowiak',
      'Jakub Kaminski',
      'Michal Skoras',
      'Damian Szymanski',
      'Sebastian Szymanski',
      'Piotr Zielinski',
      'Szymon Zurkowski',
    ],
    forwards: ['Robert Lewandowski', 'Arkadiusz Milik', 'Krzysztof Piatek', 'Karol Swiderski'],
  },
  France: {
    name: 'France',
    fifaCode: 'FRA',
    flag: '/flags/fr.webp',
    goalkeepers: ['Alphonse Areola', 'Hugo Lloris', 'Steve Mandanda'],
    defenders: [
      'Axel Disasi',
      'Lucas Hernandez',
      'Theo Hernandez',
      'Ibrahima Konate',
      'Jules Kounde',
      'Benjamin Pavard',
      'William Saliba',
      'Dayot Upamecano',
      'Raphael Varane',
    ],
    midfielders: [
      'Eduardo Camavinga',
      'Youssouf Fofana',
      'Matteo Guendouzi',
      'Adrien Rabiot',
      'Aurelien Tchouameni',
      'Jordan Veretout',
    ],
    forwards: [
      'Karim Benzema',
      'Kingsley Coman',
      'Ousmane Dembele',
      'Olivier Giroud',
      'Antoine Griezmann',
      'Kylian Mbappe',
      'Marcus Thuram',
      'Randal Kolo Muani',
    ],
  },
  Australia: {
    name: 'Australia',
    fifaCode: 'AUS',
    flag: '/flags/au.webp',
    goalkeepers: ['Mat Ryan', 'Andrew Redmayne', 'Danny Vukovic'],
    defenders: [
      'Milos Degenek',
      'Aziz Behich',
      'Joel King',
      'Nathaniel Atkinson',
      'Fran Karacic',
      'Harry Souttar',
      'Kye Rowles',
      'Bailey Wright',
      'Thomas Deng',
    ],
    midfielders: [
      'Aaron Mooy',
      'Jackson Irvine',
      'Ajdin Hrustic',
      'Keanu Baccus',
      'Cameron Devlin',
      'Riley McGree',
    ],
    forwards: [
      'Awer Mabil',
      'Mathew Leckie',
      'Martin Boyle',
      'Jamie Maclaren',
      'Jason Cummings',
      'Mitchell Duke',
      'Garang Kuol',
      'Craig Goodwin',
    ],
  },
  Denmark: {
    name: 'Denmark',
    fifaCode: 'DEN',
    flag: '/flags/dk.webp',
    goalkeepers: ['Kasper Schmeichel', 'Oliver Christensen', 'Frederik Ronnow'],
    defenders: [
      'Alexander Bah',
      'Simon Kjaer',
      'Joachim Andersen',
      'Joakim Maehle',
      'Andreas Christensen',
      'Rasmus Kristensen',
      'Jens Stryger Larsen',
      'Victor Nelsson',
      'Daniel Wass',
    ],
    midfielders: [
      'Thomas Delaney',
      'Mathias Jensen',
      'Christian Eriksen',
      'Pierre-Emile Hojbjerg',
      'Christian Norgaard',
      'Robert Skov',
    ],
    forwards: [
      'Andreas Cornelius',
      'Martin Braithwaite',
      'Kasper Dolberg',
      'Mikkel Damsgaard',
      'Jesper Lindstrom',
      'Yussuf Poulsen',
      'Andreas Skov Olsen',
      'Jonas Wind',
    ],
  },
  Tunisia: {
    name: 'Tunisia',
    fifaCode: 'TUN',
    flag: '/flags/tn.webp',
    goalkeepers: ['Aymen Dahmen', 'Bechir Ben Said', 'Mouez Hassen', 'Aymen Mathlouthi'],
    defenders: [
      'Ali Abdi',
      'Dylan Bronn',
      'Mohamed Drager',
      'Nader Ghandri',
      'Bilel Ifa',
      'Wajdi Kechrida',
      'Ali Maaloul',
      'Yassine Meriah',
      'Montassar Talbi',
    ],
    midfielders: [
      'Mohamed Ali Ben Romdhane',
      'Ghaylane Chaalali',
      'Aissa Laidouni',
      'Hannibal Mejbri',
      'Ferjani Sassi',
      'Elyas Skhiri',
    ],
    forwards: [
      'Anis Ben Slimane',
      'Seifeddine Jaziri',
      'Issam Jebali',
      'Wahbi Khazri',
      'Taha Yassine Khenissi',
      'Youssef Msakni',
      'Naim Sliti',
    ],
  },
  Spain: {
    name: 'Spain',
    fifaCode: 'ESP',
    flag: '/flags/es.webp',
    goalkeepers: ['Unai Simon', 'Robert Sanchez', 'David Raya'],
    defenders: [
      'Dani Carvajal',
      'Cesar Azpilicueta',
      'Eric Garcia',
      'Hugo Guillamon',
      'Pau Torres',
      'Aymeric Laporte',
      'Jordi Alba',
      'Jose Gaya',
    ],
    midfielders: [
      'Sergio Busquets',
      'Rodri, Gavi',
      'Carlos Soler',
      'Marcos Llorente',
      'Pedri, Koke',
    ],
    forwards: [
      'Ferran Torres',
      'Nico Williams',
      'Yeremi Pino',
      'Alvaro Morata',
      'Marco Asensio',
      'Pablo Sarabia',
      'Dani Olmo',
      'Ansu Fati',
    ],
  },
  CostaRica: {
    name: 'Costa Rica',
    fifaCode: 'CRC',
    flag: '/flags/cr.webp',
    goalkeepers: ['Keylor Navas', 'Esteban Alvarado', 'Patrick Sequeira'],
    defenders: [
      'Francisco Calvo',
      'Juan Pablo Vargas',
      'Kendall Waston',
      'Oscar Duarte',
      'Daniel Chacon',
      'Keysher Fuller',
      'Carlos Martinez',
      'Bryan Oviedo',
      'Ronald Matarrita',
    ],
    midfielders: [
      'Yeltsin Tejeda',
      'Celso Borges',
      'Youstin Salas',
      'Roan Wilson',
      'Gerson Torres',
      'Douglas Lopez',
      'Jewison Bennette',
      'Alvaro Zamora',
      'Anthony Hernandez',
      'Brandon Aguilera',
      'Bryan Ruiz',
    ],
    forwards: ['Joel Campbell', 'Anthony Contreras', 'Johan Venegas'],
  },
  Germany: {
    name: 'Germany',
    fifaCode: 'GER',
    flag: '/flags/de.webp',
    goalkeepers: ['Manuel Neuer', 'Marc-Andre ter Stegen', 'Kevin Trapp'],
    defenders: [
      'Matthias Ginter',
      'Antonio Rudiger',
      'Niklas Sule',
      'Nico Schlotterbeck',
      'Thilo Kehrer',
      'David Raum',
      'Lukas Klostermann',
      'Armel Bella-Kotchap',
      'Christian Gunter',
    ],
    midfielders: [
      'Ilkay Gundogan',
      'Jonas Hofmann',
      'Leon Goretzka',
      'Serge Gnabry',
      'Leroy Sane',
      'Jamal Musiala',
      'Joshua Kimmich',
      'Thomas Muller',
      'Julian Brandt',
      'Mario Gotze',
    ],
    forwards: ['Kai Havertz', 'Youssoufa Moukoko', 'Niclas Fullkrug', 'Karim Adeyemi'],
  },
  Japan: {
    name: 'Japan',
    fifaCode: 'JPN',
    flag: '/flags/jp.webp',
    goalkeepers: ['Shuichi Gonda', 'Daniel Schmidt', 'Eiji Kawashima'],
    defenders: [
      'Miki Yamane',
      'Hiroki Sakai',
      'Maya Yoshida',
      'Takehiro Tomiyasu',
      'Shogo Taniguchi',
      'Ko Itakura',
      'Hiroki Ito',
      'Yuto Nagatomo',
    ],
    midfielders: [
      'Wataru Endo',
      'Hidemasa Morita',
      'Ao Tanaka',
      'Gaku Shibasaki',
      'Kaoru Mitoma',
      'Daichi Kamada',
      'Ritsu Doan',
      'Junya Ito',
      'Takumi Minamino',
      'Takefusa Kubo',
      'Yuki Soma',
    ],
    forwards: ['Daizen Maeda', 'Takuma Asano', 'Shuto Machino', 'Ayase Ueda'],
  },
  Belgium: {
    name: 'Belgium',
    fifaCode: 'BEL',
    flag: '/flags/be.webp',
    goalkeepers: ['Thibaut Courtois', 'Simon Mignolet', 'Koen Casteels'],
    defenders: [
      'Jan Vertonghen',
      'Toby Alderweireld',
      'Leander Dendoncker',
      'Zeno Debast',
      'Arthur Theate',
      'Wout Faes',
    ],
    midfielders: [
      'Hans Vanaken',
      'Axel Witsel',
      'Youri Tielemans',
      'Amadou Onana',
      'Kevin De Bruyne',
      'Yannick Carrasco',
      'Thorgan Hazard',
      'Timothy Castagne',
      'Thomas Meunier',
    ],
    forwards: [
      'Romelu Lukaku',
      'Michy Batshuayi',
      'Lois Openda',
      'Charles De Ketelaere',
      'Eden Hazard',
      'Jeremy Doku',
      'Dries Mertens',
      'Leandro Trossard',
    ],
  },
  Canada: {
    name: 'Canada',
    fifaCode: 'CAN',
    flag: '/flags/ca.webp',
    goalkeepers: ['James Pantemis', 'Milan Borjan', 'Dayne St. Clair'],
    defenders: [
      'Samuel Adekugbe',
      'Joel Waterman',
      'Alistair Johnston',
      'Richie Laryea',
      'Kamal Miller',
      'Steven Vitoria',
      'Derek Cornelius',
    ],
    midfielders: [
      'Liam Fraser',
      'Ismael Kone',
      'Mark-Anthony Kaye',
      'David Wotherspoon',
      'Jonathan Osorio',
      'Atiba Hutchinson',
      'Stephen Eustaquio',
      'Samuel Piette',
    ],
    forwards: [
      'Tajon Buchanan',
      'Liam Millar',
      'Lucas Cavallini',
      'Ike Ugbo',
      'Junior Hoilett',
      'Jonathan David',
      'Cyle Larin',
      'Alphonso Davies',
    ],
  },
  Morocco: {
    name: 'Morocco',
    fifaCode: 'MAR',
    flag: '/flags/ma.webp',
    goalkeepers: ['Bono', 'Munir El Kajoui', 'Ahmed Tagnaouti'],
    defenders: [
      'Nayef Aguerd',
      'Yahia Attiyat Allah',
      'Badr Benoun',
      'Achraf Dari',
      'Jawad El Yamiq',
      'Achraf Hakimi',
      'Noussair Mazraoui',
      'Romain Saiss',
    ],
    midfielders: [
      'Sofyan Amrabat',
      'Selim Amallah',
      'Bilal El Khannous',
      'Yahya Jabrane',
      'Azzedine Ounahi',
      'Abdelhamid Sabiri',
    ],
    forwards: [
      'Zakaria Aboukhlal',
      'Sofiane Boufal',
      'Ilias Chair',
      'Walid Cheddira',
      'Youssef En-Nesyri',
      'Abde Ezzalzouli',
      'Abderrazak Hamdallah',
      'Amine Harit',
      'Hakim Ziyech',
    ],
  },
  Croatia: {
    name: 'Croatia',
    fifaCode: 'CRO',
    flag: '/flags/hr.webp',
    goalkeepers: ['Dominik Livakovic', 'Ivica Ivusic', 'Ivo Grbic'],
    defenders: [
      'Domagoj Vida',
      'Dejan Lovren',
      'Borna Barisic',
      'Josip Juranovic',
      'Josko Gvardiol',
      'Borna Sosa',
      'Josip Stanisic',
      'Martin Erlic',
      'Josip Sutalo',
    ],
    midfielders: [
      'Luka Modric',
      'Mateo Kovacic',
      'Marcelo Brozovic',
      'Mario Pasalic',
      'Nikola Vlasic',
      'Lovro Majer',
      'Kristijan Jakic',
      'Luka Sucic',
    ],
    forwards: [
      'Ivan Perisic',
      'Andrej Kramaric',
      'Bruno Petkovic',
      'Mislav Orsic',
      'Ante Budimir',
      'Marko Livaja',
    ],
  },
  Brazil: {
    name: 'Brazil',
    fifaCode: 'BRA',
    flag: '/flags/br.webp',
    goalkeepers: ['Alisson', 'Ederson', 'Weverton'],
    defenders: [
      'Dani Alves',
      'Danilo',
      'Alex Sandro',
      'Alex Telles',
      'Bremer',
      'Eder Militao',
      'Marquinhos',
      'Thiago Silva',
    ],
    midfielders: [
      'Bruno Guimaraes',
      'Casemiro',
      'Everton Ribeiro',
      'Fabinho',
      'Fred',
      'Lucas Paqueta',
    ],
    forwards: [
      'Antony',
      'Gabriel Jesus',
      'Gabriel Martinelli',
      'Neymar',
      'Pedro',
      'Raphinha',
      'Richarlison',
      'Rodrygo',
      'Vinicius Junior',
    ],
  },
  Serbia: {
    name: 'Serbia',
    fifaCode: 'SRB',
    flag: '/flags/rs.webp',
    goalkeepers: ['Marko Dmitrovic', 'Predrag Rajkovic', 'Vanja Milinkovic-Savic'],
    defenders: [
      'Stefan Mitrovic',
      'Nikola Milenkovic',
      'Strahinja Pavlovic',
      'Milos Veljkovic',
      'Filip Mladenovic',
      'Strahinja Erakovic',
      'Srdjan Babic',
    ],
    midfielders: [
      'Nemanja Gudelj',
      'Sergej Milinkovic-Savic',
      'Sasa Lukic',
      'Marko Grujic',
      'Filip Kostic',
      'Uros Racic',
      'Nemanja Maksimovic',
      'Ivan Ilic',
      'Andrija Zivkovic',
      'Darko Lazovic',
    ],
    forwards: [
      'Dusan Tadic',
      'Aleksandar Mitrovic, Dusan Vlahovic, Filip Djuricic, Luka Jovic, Nemanja Radonjic',
    ],
  },
  Switzerland: {
    name: 'Switzerland',
    fifaCode: 'SUI',
    flag: '/flags/ch.webp',
    goalkeepers: ['Gregor Kobel', 'Yann Sommer', 'Jonas Omlin', 'Philipp Kohn'],
    defenders: [
      'Manuel Akanji',
      'Eray Comert',
      'Nico Elvedi',
      'Fabian Schar',
      'Silvan Widmer',
      'Ricardo Rodriguez',
      'Edimilson Fernandes',
    ],
    midfielders: [
      'Michel Aebischer',
      'Xherdan Shaqiri',
      'Renato Steffen',
      'Granit Xhaka',
      'Denis Zakaria',
      'Fabian Frei',
      'Remo Freuler',
      'Noah Okafor',
      'Fabian Rieder',
      'Ardon Jashari',
    ],
    forwards: [
      'Breel Embolo',
      'Ruben Vargas',
      'Djibril Sow',
      'Haris Seferovic',
      'Christian Fassnacht',
    ],
  },
  Cameroon: {
    name: 'Cameroon',
    fifaCode: 'CMR',
    flag: '/flags/cm.webp',
    goalkeepers: ['Andre Onana', 'Devis Epassy', 'Simon Ngapandouetnbu'],
    defenders: [
      'Jean-Charles Castelletto',
      'Enzo Ebosse',
      'Collins Fai',
      'Olivier Mbaizo',
      'Nouhou Tolo',
      'Nicolas Nkoulou',
      'Christopher Wooh',
    ],
    midfielders: [
      'Olivier Ntcham',
      'Gael Ondoua',
      'Martin Hongla',
      'Pierre Kunde',
      'Samuel Oum Gouet',
      'Andre-Frank Zambo Anguissa',
      'Jerome Ngom',
    ],
    forwards: [
      'Nicolas Ngamaleu',
      'Christian Bassogog',
      'Bryan Mbeumo',
      'Georges-Kevin Nkoudou',
      'Jean-Pierre Nsame',
      'Vincent Aboubakar',
      'Karl Toko-Ekambi',
      'Eric Maxim Choupo-Moting',
      'Souaibou Marou',
    ],
  },
  Portugal: {
    name: 'Portugal',
    fifaCode: 'POR',
    flag: '/flags/pt.webp',
    goalkeepers: ['Diogo Costa', 'Jose Sa', 'Rui Patricio'],
    defenders: [
      'Diogo Dalot',
      'Joao Cancelo',
      'Danilo Pereira',
      'Pepe',
      'Ruben Dias',
      'Antonio Silva',
      'Nuno Mendes',
      'Raphael Guerreiro',
    ],
    midfielders: [
      'Joao Palhinha',
      'Ruben Neves',
      'Bernardo Silva',
      'Bruno Fernandes',
      'Joao Mario',
      'Matheus Nunes',
      'Vitinha',
      'William Carvalho',
      'Otavio',
    ],
    forwards: [
      'Cristiano Ronaldo',
      'Joao Felix',
      'Rafael Leao',
      'Ricardo Horta',
      'Goncalo Ramos',
      'Andre Silva',
    ],
  },
  Ghana: {
    name: 'Ghana',
    fifaCode: 'GHA',
    flag: '/flags/gh.webp',
    goalkeepers: ['Lawrence Ati', 'Danlad Ibrahim', 'Manaf Nurudeen'],
    defenders: [
      'Joseph Aidoo',
      'Daniel Amartey',
      'Baba Rahman',
      'Alexander Djiku',
      'Tariq Lamptey',
      'Gideon Mensah',
      'Denis Odoi',
      'Mohammed Salisu',
      'Alidu Seidu',
    ],
    midfielders: [
      'Andre Ayew',
      'Mohammed Kudus',
      'Daniel-Kofi Kyereh',
      'Elisha Owusu',
      'Thomas Partey',
      'Salis Abdul Samed',
    ],
    forwards: [
      'Daniel Afriyie',
      'Jordan Ayew',
      'Osman Bukari',
      'Issahaku Abdul Fatawu',
      'Antoine Semenyo',
      'Kamal Sowah',
      'Kamaldeen Sulemana',
      'Inaki Williams',
    ],
  },
  Uruguay: {
    name: 'Uruguay',
    fifaCode: 'URU',
    flag: '/flags/uy.webp',
    goalkeepers: ['Fernando Muslera', 'Sergio Rochet', 'Sebastian Sosa'],
    defenders: [
      'Ronald Araujo',
      'Sebastian Coates',
      'Martin Caceres',
      'Guillermo Varela',
      'Matias Vina',
      'Mathias Olivera',
      'Jose Maria Gimenez',
      'Diego Godin',
      'Jose Luis Rodríguez',
    ],
    midfielders: [
      'Lucas Torreira',
      'Matias Vecino',
      'Rodrigo Bentancur',
      'Manuel Ugarte',
      'Giorgian de Arrascaeta',
      'Nicolas de la Cruz',
      'Federico Valverde',
      'Facundo Pellistri',
      'Agustin Canobbio',
      'Facundo Torres',
    ],
    forwards: ['Luis Suarez', 'Darwin Nunez', 'Maximiliano Gomez', 'Edinson Cavani'],
  },
  SouthKorea: {
    name: 'Korea Republic',
    fifaCode: 'KOR',
    flag: '/flags/kr.webp',
    goalkeepers: ['Kim Seung-Gyu', 'Jo Hyeon-Woo', 'Song Bum-Keun'],
    defenders: [
      'Kim Min-Jae',
      'Kim Young-Gwon',
      'Kwon Kyung-Won',
      'Cho Yu-Min',
      'Kim Moon-Hwan',
      'Yoon Jong-Gyu',
      'Kim Tae-Hwan',
      'Kim Jin-Su',
      'Hong Chul',
    ],
    midfielders: [
      'Jung Woo-Young',
      'Son Jun-Ho',
      'Paik Seung-Ho',
      'Hwang In-Beom',
      'Lee Jae-Sung',
      'Kwon Chang-Hoon',
      'Jeong Woo-Yeong',
      'Lee Kang-In',
      'Son Heung-Min',
      'Hwang Hee-Chan',
      'Na Sang-Ho',
      'Song Min-Kyu',
    ],
    forwards: ['Hwang Ui-Jo', 'Cho Gue-Sung'],
  },
  TBD: {
    name: 'TBD',
    fifaCode: 'TBD',
    flag: '/flags/tbd.svg',
    goalkeepers: [],
    defenders: [],
    midfielders: [],
    forwards: [],
  },
};

export { TEAMS };
export type { ITeam };
