import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export default function Nav({handleMenu}) {
  const router = useRouter();
  const { pathname } = router;
  const { menuOpen, setMenuOpen } = handleMenu;
  return (
    <div className={`flex justify-center bg-gradient-to-r py-4 from-indigo-500 via-purple-500 to-pink-500 text-black absolute w-[85vw] h-64 -mt-96 ${menuOpen ? 'active mt-0 transition ease-in duration-300' : ''}`}>
    <nav className='flex items-center justify-center w-full m-auto lg:max-w-screen black font-sans-serif'>
      <ul className='max-w-lg flex justify-between text-white'>
        <li className='nav-item mx-2 xl:mx-4 text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <Link href="/">
            <a className={pathname === '/' ? 'underline decoration-sky-500 active' : ''}>Home</a>
          </Link>
        </li>
        <li className='nav-item mx-2 xl:mx-4 text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <Link href="/about">
            <a className={pathname === '/about' ? 'underline decoration-sky-500 active' : ''}>About</a>
          </Link>
        </li>
        <li className='nav-item mx-2 xl:mx-4 text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <Link href="/books-i-love">
            <a className={pathname === '/books-i-love' ? 'underline decoration-sky-500 active' : ''}>Books I Love</a>
          </Link>
        </li>
        <li className='nav-item mx-2 xl:mx-4 text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          <Link href="/contact">
            <a className={pathname === '/contact' ? 'underline decoration-sky-500 active' : ''}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}