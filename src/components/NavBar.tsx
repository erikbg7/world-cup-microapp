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
];

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-rose-900">
      <ul className="flex justify-center h-20 sm:px-20">
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
    <li className="flex flex-1 text-lg">
      <Link
        href={props.path}
        className={clsx(
          'flex justify-center items-center',
          'w-full h-full hover:bg-gray-200/20',
          isActive && 'border-b-4 border-white'
        )}
      >
        {props.name}
      </Link>
    </li>
  );
};

export default NavBar;
