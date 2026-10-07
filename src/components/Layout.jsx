import { Outlet } from 'react-router-dom';
import Nav from './sections/Nav';
import Footer from './sections/Footer';

export default function Layout() {
  return (
    <>
      <header className="site-header"><Nav /></header>
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
