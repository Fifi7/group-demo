import React from 'react';

function DisplayChanges({ name, jobTitle, bio, image }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h2>Updated Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Job Title:</strong> {jobTitle}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
      <div style={{ flex: 1 }}>
        <img src={image} alt="Updated Profile" style={{ width: '100px', borderRadius: '50%' }} />
      </div>
    </div>
  );
}

export default DisplayChanges;
