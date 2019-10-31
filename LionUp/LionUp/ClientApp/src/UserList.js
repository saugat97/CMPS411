import React from 'react';
import './UserList.css';


function UserList({ userId }) {
  return (
    <div className="UserList">
      <div className="UserList__titlebar">
     
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
