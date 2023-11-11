// Bio.jsx
import React from 'react';

const Bio = ({ bio }) => {
  return (
    <div className='bio-container'>
      <h2>Bio</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Bio;

