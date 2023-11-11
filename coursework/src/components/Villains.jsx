import React, {useState} from 'react';
import {data} from '../data/data.js';
import './Villains.css';

export default function Villains() {
const [villains] = useState(data);

const villainus = villains.filter(villain => villain.stance === 'Villainous');


  return (
    <div>
      <h1>Villains</h1>
      <div className='villain-list'>
        {villainus.map(villain =>(
        <div key= {villain.id} className='villain-card'>
           <h2>{villain.name}</h2>
           <img src= {villain.picture} alt= {villain.name} />
           <p>Height: {villain.height}</p>
           <p>Weight: {villain.weight} lbs</p>
           <p>Affilitation: {villain.affiliation}</p>
        </div>
        ))}
      </div>
    </div>
  )
};
