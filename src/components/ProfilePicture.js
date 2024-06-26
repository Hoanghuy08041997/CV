import React from 'react';
import picture from './avt.jpg'

const ProfilePicture = () => {
  return (
    <div className="text-center">
      <img src={picture} alt="Profile" className="img-fluid rounded-circle" style={{height: '200px',width: '200px'}} />
    </div>
  );
};

export default ProfilePicture;
