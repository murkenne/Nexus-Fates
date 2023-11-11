import React from 'react';
import { data } from '../data/data.js'; // make sure the path is correct
import './Home.css';

export default function Home() {
  return (
    <div>
      <h1>Domain</h1>
      <div className="character-list">
        {data.map((character) => (
          <div key={character.id} className="character-card">
            <h2>{character.name}</h2>
            <img src={character.picture} alt={character.name} />
            <p>Height: {character.height}</p>
            <p>Weight: {character.weight} lbs</p>
            <p>Affiliation: {character.affiliation}</p>
            <p>Stance: {character.stance}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
