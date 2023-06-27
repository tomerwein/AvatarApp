import React, { useState } from 'react';
import Avatar from '../SignleAvatar/SingleAvatar';
import './AvatarChanger.css';

const AvatarChanger = () => {
  const [name, setName] = useState('Alterya');
  const [backgroundColor, setBackgroundColor] = useState('800080');
  const [inputName, setInputName] = useState('Alterya'); 

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter' && inputName !== '') {
      event.preventDefault(); 
      setName(inputName);
    }
  }
  
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value); 
  }

  const handleColorChange = (color: string) => {
    setBackgroundColor(color); 
  }

  return (
    <div className='avatar-changer-container'>
      <span className="custom-text">Create your Avatar</span>

      <div>
        <Avatar name={name} backgroundColor={backgroundColor} />
      </div>

      <div>
        <input 
          className="input-box"
          type="text"
          value={inputName}
          onChange={handleNameChange}
          onKeyDown={handleKeyPress} />
      </div>

      <div>
        <button className="color-button" style={{background: '#800080'}} onClick={() => handleColorChange('800080')}></button>
        <button className="color-button" style={{background: '#0000FF'}} onClick={() => handleColorChange('0000FF')}></button>
        <button className="color-button" style={{background: '#008000'}} onClick={() => handleColorChange('008000')}></button>
        <button className="color-button" style={{background: '#FF0000'}} onClick={() => handleColorChange('FF0000')}></button>
        <button className="color-button" style={{background: '#ca8a04'}} onClick={() => handleColorChange('ca8a04')}></button>
      </div>
    </div>
  );
}

export default AvatarChanger;
