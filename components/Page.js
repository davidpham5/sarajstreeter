import { useState } from 'react';

import Footer from './Footer';
import Logo from './Logo';
import Menu from './Menu';
import Nav from './Nav';

export default function Page({ children }) {
  return (
    <div className="">
      <div className="w-full">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}