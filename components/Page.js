import { useState } from 'react';

import Footer from './Footer';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';

export default function Page({ children }) {
  return (
    <div className="">
      <div className="w-full relative">
        <div className='absolute w-full h-full m-auto z-0 flex flex-col justify-center content-center items-center self-center'>
          <div className='h-1/2 w-3/4 sm:h-full sm:w-full max-w-3xl max-h-3xl mt-20 bg-gradient-to-r from-[#E5A9EE] to-[#C3DC4D] rounded-full'></div>
        </div>
        <main className=''>{children}</main>
      </div>
      <Footer />
    </div>
  );
}