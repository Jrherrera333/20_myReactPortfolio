import React from 'react';
import Portfolio from './Portfolio';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>

    /* <div className="App">
    <h1>My Portfolio</h1>
    <Portfolio />
    </div> */

  );
}

export default App;
