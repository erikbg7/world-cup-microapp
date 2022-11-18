import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ISection {
  id: number;
  name: string;
  path: string;
}

const SECTIONS: ISection[] = [
  { id: 1, name: 'Matches', path: '/matches' },
  { id: 2, name: 'Groups', path: '/groups' },
  { id: 3, name: 'Knockouts', path: '/knockout' },
  { id: 4, name: 'Stadiums', path: '/stadiums' },
  { id: 5, name: 'Teams', path: '/teams' },
];

const NavBar = () => {
  return (
    <nav className="top-0 left-0 right-0 z-10 border overflow-scroll border-b-qatar">
      <ul className="flex items-center h-20">
        {SECTIONS.map((section) => (
          <NavBarItem key={section.id} {...section} />
        ))}
      </ul>
    </nav>
  );
};

const NavBarItem: React.FC<ISection> = (props) => {
  const router = useRouter();
  const isActive = router.pathname === props.path;

  return (
    <li className="flex flex-1 text-md px-3">
      <Link
        href={props.path}
        className={clsx(
          'border border-qatar p-2 text-center',
          'w-full h-[50%] hover:cursor-pointer',
          isActive && 'active-nav-link'
        )}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default NavBar;
