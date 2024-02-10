import React, { useState } from 'react';
import DisplayChanges from './DisplayChanges'; // Import the DisplayChanges component

function HeroSection() {
  const [name, setName] = useState('Refilwe Gololo');
  const [jobTitle, setJobTitle] = useState('Junior JAVA Developer');
  const [bio, setBio] = useState("I'm a passionate and dedicated junior Java developer with a strong foundation in coding and problem-solving. My journey in the world of technology has fueled my curiosity and drive to contribute to innovative solutions.");
  const [image, setImage] = useState('./Assets/Images/My_Pic.png');
  const [showChanges, setShowChanges] = useState(false); // State to control displaying changes

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can save the updated information, including the image.
    console.log('Updated Information:', { name, jobTitle, bio, image });
    setShowChanges(true); // Set showChanges to true after submitting the form
  };

  return (
    <div>
      <div style={{ backgroundColor: 'pink', padding: '20px', borderRadius: '10px' }}>
        <div className="hero__content">
          <div className="hero__text">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <input type="text" value={name} onChange={handleNameChange} style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }} />
              <input type="text" value={jobTitle} onChange={handleJobTitleChange} style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }} />
              <textarea value={bio} onChange={handleBioChange} style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px', height: '150px' }} />
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '10px' }} />
              <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Changes</button>
            </form>
          </div>
          <div className="hero__image">
            <img src={image} alt="Profile Image" style={{ width: '200px', borderRadius: '50%' }} />
          </div>
        </div>
      </div>
      {/* Conditionally render the DisplayChanges component */}
      {showChanges && <DisplayChanges name={name} jobTitle={jobTitle} bio={bio} image={image} />}
    </div>
  );
}

export default HeroSection;
