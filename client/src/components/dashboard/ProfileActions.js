import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../profile/Profile';
import { Col, Row } from "react-bootstrap";

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile" >
         <i className="fas fa-user-circle text-info mr-1"  style={{"width":"100px"}}/> Edit Profile
       </Link>
      <Profile />
    </div>
  );
};

export default ProfileActions;
