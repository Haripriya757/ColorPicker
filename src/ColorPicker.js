import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div>
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorSelection(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && <h3>Selected color : <br></br> {selectedColor}</h3>}
    </div>
  );
};

export default ColorPicker;