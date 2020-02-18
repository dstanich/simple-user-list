import React from 'react';

import './User.scss';

function User(props) {
  const { data, removeUser } = props;
  const { name, location, dob, phone, picture } = data;

  return (
    <div className="User">
      <div>
        <div className="user-name">
          {name.first} {name.last}
        </div>

        <div className="age-container">
          <span className="age-label">Age:</span> {dob.age}
        </div>

        <div className="address">
          <div>
            {location.street.number} {location.street.name}
          </div>
          <div>
            {location.city}, {location.state} {location.postcode}
          </div>
          <div>{location.country}</div>
        </div>

        <div className="phone">{phone}</div>
      </div>

      <img src={picture.large} alt="" />

      <div className="delete-container">
        <button className="delete-button" onClick={() => removeUser(data)}>
          <span role="img" aria-label="Remove user">
            🗑️
          </span>
        </button>
      </div>
    </div>
  );
}

export default User;
