import React, { useState } from 'react';
import { View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const AdjustColor = () => {
  const [color, setColor] = useState([255, 255, 255]);

  const colorChange = (_color, type) => {
    switch (_color) {
      case 'Red':
        return setColor(
          [...color].map((color, idx) => {
            if (type === 'inc') {
              return idx === 0 && color <= 250 ? color + 5 : color;
            } else {
              return idx === 0 && color >= 5 ? color - 5 : color;
            }
          })
        );
      case 'Green':
        return setColor(
          [...color].map((color, idx) => {
            if (type === 'inc') {
              return idx === 1 && color <= 250 ? color + 5 : color;
            } else {
              return idx === 1 && color >= 5 ? color - 5 : color;
            }
          })
        );
      case 'Blue':
        return setColor(
          [...color].map((color, idx) => {
            if (type === 'inc') {
              return idx === 2 && color <= 250 ? color + 5 : color;
            } else {
              return idx === 2 && color >= 5 ? color - 5 : color;
            }
          })
        );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
      }}
    >
      <ColorAdjuster colorChange={colorChange} code={color[0]} color={'Red'} />
      <ColorAdjuster colorChange={colorChange} code={color[1]} color={'Green'} />
      <ColorAdjuster colorChange={colorChange} code={color[2]} color={'Blue'} />
    </View>
  );
};

export default AdjustColor;
