import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      {/* Adding the span style header */}
      <h1 className="nexus-header">
        <span className="nexus-title">Shadow Union: Nexus of Fates</span>
      </h1>
      <Navbar />
    </div>
  );
}

export default App;
