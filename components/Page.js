import { useState } from 'react';

import Footer from './Footer';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';

export default function Page({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <div className='relative flex items-center content-center '>
        <div className="flex flex-col w-full">
          <div className='bg-[#01d4ff] h-12 w-full'></div>
          <div className="bg-[#2fdfff] h-12 w-full"></div>
          <div className="bg-[#7feaff] h-12 w-full"></div>
          <div className="bg-[#c0f4ff] h-12 w-full"></div>
        </div>
        <div className="absolute w-full">
          <div className='flex items-center content-center w-full px-4 max-w-[1440px] m-auto'>
            <Menu handleMenu={{menuOpen, setMenuOpen}}/>
            <div className='w-full'>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      {menuOpen && <Nav handleMenu={{menuOpen, setMenuOpen}} />}
      <div className="w-full">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}