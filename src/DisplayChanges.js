import React from 'react';

function DisplayChanges({ name, jobTitle, bio, image }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center',backgroundColor:'#CBC3E3' }}>
      <div style={{ flex: 1 }}>
        <h1>{name}</h1>
        <h2>{jobTitle}</h2>
        <p>{bio}</p>
      </div>
      <div style={{ flex: 1 }}>
        <img src={image} alt="Updated Profile" style={{ width: '300px', borderRadius: '50%' }} />
      </div>
    </div>
  );
}

export default DisplayChanges;
