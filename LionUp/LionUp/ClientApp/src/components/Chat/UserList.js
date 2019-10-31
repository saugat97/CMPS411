import React from 'react';
import './UserList.css';
import defaultAvatar from './default-avatar.png';

function UserList({ userId }) {
  return (
    <div className="UserList">
      <div className="UserList__titlebar">
        <img
          src={defaultAvatar}
          className="UserList__titlebar__avatar"
          alt="avatar"
        />
        <span className="UserList__titlebar__logged-in-as">{userId}</span>
      </div>
      <div className="UserList__container">
        <ul className="UserList__container__list">
          <li className="UserList__container__list__item">
            


          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserList;
