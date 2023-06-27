import React from 'react';
import './SingleAvatar.css';

type AvatarProps = {
  name: string;
  backgroundColor: string;
};

const Avatar: React.FC<AvatarProps> = ({ name, backgroundColor }) => {
  const avatarUrl = `http://localhost:3000/user-avatar?name=${name}&backgroundColor=${backgroundColor}`;
  return <img className="avatar" src={avatarUrl}  alt="User avatar" />;
};

export default Avatar;