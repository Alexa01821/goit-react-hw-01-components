import React from 'react';
import { FriendListContainer, FriendsStatus } from './FriendListStyles';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id} className="item">
              <FriendsStatus $isOnline={isOnline}></FriendsStatus>
              <img className="avatar" src={avatar} alt={name} width="48" />
              <p className="name">{name}</p>
            </li>
          );
        })}
    </FriendListContainer>
  );
};
