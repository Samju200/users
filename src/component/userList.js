import React, { useState } from 'react';
import './userList.css';
import Users from '../component/users';
import UserDetails from '../component/userDetails';

const UserList = ({ users, setShowCategory, showCategory }) => {
  const [userData, setUserData] = useState(null);

  return (
    <div className="user-list">
      {userData === null &&
        users.map((user) => {
          const {
            name: { title, first, last },
            location: {
              street: { number, name },
              city,
              state,
              country,
            },
            email,
            phone,
            cell,
            dob: { age },
            registered: { date },
            picture: { large },
          } = user;
          return (
            <Users
              key={date}
              title={title}
              firstName={first}
              lastName={last}
              streetNum={number}
              streetName={name}
              city={city}
              state={state}
              email={email}
              phone={phone}
              cell={cell}
              age={age}
              country={country}
              registered={date}
              image={large}
              handleClick={() => setUserData(user)}
              setShowCategory={setShowCategory}
              showCategory={showCategory}
            />
          );
        })}
      {userData && (
        <UserDetails user={userData} handleClick={() => setUserData(null)} />
      )}
    </div>
  );
};

export default UserList;
