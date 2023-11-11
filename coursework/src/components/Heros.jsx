import React, { useState } from 'react';
import { data } from '../data/data.js'; // Data about heroes
import { dataB } from '../data/dataB'; // Bios for heroes
import Bio from './BioPage.jsx';
import './Heros.css';

export default function Heros() {
  const [heros] = useState(data); // Assuming the data array is correctly imported
  const [activeHeroId, setActiveHeroId] = useState(null); // Initially, no hero is selected

  const heroicHeros = heros.filter(hero => hero.stance === 'Heroic');

  const handleBioClick = (id) => {
    // Set the active hero ID when a hero card is clicked
    setActiveHeroId(id);
  };

  // Find the bio for the active hero
  const activeHeroBio = activeHeroId !== null ? dataB.find(hero => hero.id === activeHeroId) : null;

  return (
    <div>
      <h1>Heros</h1>
      <div className='hero-list'>
        {heroicHeros.map(hero => (
          <div 
            onClick={() => handleBioClick(hero.id)} 
            key={hero.id} 
            className='hero-card'
          >
            <h2>{hero.name}</h2>
            <img src={hero.picture} alt={hero.name} />
            <p>Height: {hero.height}</p>
            <p>Weight: {hero.weight} lbs</p>
            <p>Affiliation: {hero.affiliation}</p>
            {/* Additional hero information can go here */}
          </div>
        ))}
      </div>
      {/* Render Bio component if an active hero is selected */}
      {activeHeroBio && <Bio bio={activeHeroBio.bio} />}
    </div>
  );
};
