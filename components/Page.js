import Footer from './Footer';

import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';
import {useState} from 'react';

export default function Page({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-[1440px] m-auto">
      <div className='flex items-center content-center relative'>
        <Menu handleMenu={{menuOpen, setMenuOpen}}/>
        <div className='w-full'>
          <Logo />
        </div>
        {menuOpen && <Nav handleMenu={{menuOpen, setMenuOpen}} />}
      </div>
      <div className="w-full"></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}