import React from 'react';
import { affiliations } from '../data/data.js'; // adjust the path as needed\
import './Affiliation.css';

export default function Affiliations() {
  return (
    <div className='affiliation-list'>
      {affiliations.map((affiliation) => (
        <div key={affiliation.id} className='affiliation-card'>
          <img src={affiliation.img} alt={affiliation.name || affiliation.affiliation} />
          <h3>{affiliation.name || affiliation.affiliation}</h3>
        </div>
      ))}
    </div>
  );
}
