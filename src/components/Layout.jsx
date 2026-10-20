import { Outlet } from 'react-router-dom';
import Nav from './sections/Nav';
import Footer from './sections/Footer';
import Lightbox from './ui/Lightbox';
import CursorLabel from './ui/CursorLabel';
import BackToTop from './ui/BackToTop';

export default function Layout() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <header className="site-header"><Nav /></header>
      <main id="contenido"><Outlet /></main>
      <Footer />
      <Lightbox />
      <CursorLabel />
      <BackToTop />
    </>
  );
}
