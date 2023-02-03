import React, { useState } from 'react';
import './users.css';
import { BiEnvelope } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Users = ({
  title,
  firstName,
  lastName,
  streetNum,
  streetName,
  city,
  country,
  state,
  email,
  phone,
  image,
  handleClick,
  setShowCategory,
  showCategory,
}) => {
  return (
    <div className="user-profile" onClick={handleClick}>
      <div className="user-details">
        <div className="user-pictures">
          <Avatar src={image} className="user-picture" />
        </div>

        <div className="user-info">
          <h1>
            {firstName} {lastName}
          </h1>
          <h5>
            {streetNum} {streetName}, {state} {showCategory ? '' : country}
          </h5>
          <div className="user-contact">
            <p>
              <BiEnvelope /> {email}
            </p>
            <p>
              <FiPhoneCall /> {phone}
            </p>
            <div className="user-btn">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
