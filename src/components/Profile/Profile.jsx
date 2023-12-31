import React from 'react';
import { ProfileContainer } from './ProfileStyled';

export const Profile = propsProfile => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = propsProfile;
  return (
    <ProfileContainer>
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </ProfileContainer>
  );
};
