import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Heros from './Heros';
import Home from './Home';
import Villains from './Villains';
import './Navbar.css'; // Fixed typo here

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div id='navbar'>
           <Link to="/home">Domain</Link>
          <Link to="/heros">Heros</Link>
          <Link to="/villains">Villains</Link>
          {/* Uncomment below if you have a search route to link to */}
          {/* <Link to="/search">Search Listings</Link> */}
        </div>
        <div className='main-section'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/heros" element={<Heros />} />
            <Route path="/villains" element={<Villains />} />
            {/* Add the Route for search if you have a Search component */}
            {/* <Route path="/search" element={<Search />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
};

