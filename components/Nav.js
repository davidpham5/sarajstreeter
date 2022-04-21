import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export default function Nav({handleMenu}) {
  const router = useRouter();
  const { pathname } = router;
  const { menuOpen, setMenuOpen } = handleMenu;
  return (
    <div className={`flex justify-center text-black h-16 ${menuOpen ? 'active ' : ''}`}>
    <nav className='flex items-center justify-center w-full m-auto lg:max-w-screen black font-sans-serif'>
      <ul className='max-w-lg flex justify-between '>
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