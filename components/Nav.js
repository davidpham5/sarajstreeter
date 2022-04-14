import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="flex py-4 bg-indigo-500 text-white">
    <nav className='flex items-center justify-center w-full m-auto lg:max-w-screen black font-sans-serif'>
      <ul className='max-w-md flex justify-between'>
        <li className='nav-item mx-2 xl:mx-4 relative'>
          <Link href="/">
            <a className={pathname === '/' ? 'active' : ''}>Home</a>
          </Link>
        </li>
        <li className='nav-item mx-2 xl:mx-4 relative'>
          <Link href="/about">
            <a className={pathname === '/about' ? 'active' : ''}>About</a>
          </Link>
        </li>
        <li className='nav-item mx-2 xl:mx-4 relative'>
          <Link href="/contact">
            <a className={pathname === '/contact' ? 'active' : ''}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}