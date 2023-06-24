import React from 'react';
import ColorPicker from './ColorPicker.js';

const App = () => {
  const colors = ['red', 'pink', 'green', 'violet', 'yellow', 'skyblue', 'blue', 'maroon', 'sandal'];

  return (
    <div>
      <h1>Color Picker: </h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
