import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
