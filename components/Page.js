import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <div className="w-full"><Nav /></div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}