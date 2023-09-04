import React, { useState } from 'react';
import Avatar from '../SignleAvatar/SingleAvatar';
import './AvatarChanger.css';

const AvatarChanger = () => {
  const [name, setName] = useState('Check');
  const [backgroundColor, setBackgroundColor] = useState('800080');
  const [inputName, setInputName] = useState('Check'); 
  const colors = ['#800080', '#0000FF', '#008000', '#FF0000', '#ca8a04'];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); 
    if (inputName !== '') {
      setName(inputName);
    }
  }
  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value); 
  }

  const handleColorChange = (color: string) => {
    setBackgroundColor(color.substring(1)); 
  }

  return (
    <div className='avatar-changer-container'>
      <span className="custom-text">Create your Avatar</span>

      <div>
        <Avatar name={name} backgroundColor={backgroundColor} />
      </div>

      <form onSubmit={handleSubmit}>
        <input 
          className="input-box"
          type="text"
          value={inputName}
          onChange={handleNameChange}
         />

      </form>

      <div>
      {colors.map((color, index) => (
        <button 
          key={index} 
          className={`color-button color-${color.substring(1)}`}
          onClick={() => handleColorChange(color)}
        ></button>
      ))}
      </div>
    </div>
  );
}

export default AvatarChanger;
