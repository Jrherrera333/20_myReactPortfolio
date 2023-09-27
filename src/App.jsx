import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
