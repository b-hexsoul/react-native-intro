import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const colorReducer = (state, action) => {
  // action object - { color: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.color) {
    case 'Red':
      return { ...state, red: state.red + action.amount };
    case 'Green':
      return { ...state, green: state.green + action.amount };
    case 'Blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const AdjustColor = () => {
  const [state, dispatch] = useReducer(colorReducer, { red: 255, green: 255, blue: 255 });
  const { red, green, blue } = state;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      }}
    >
      <ColorAdjuster colorChange={dispatch} code={state.red} color={'Red'} />
      <ColorAdjuster colorChange={dispatch} code={state.green} color={'Green'} />
      <ColorAdjuster colorChange={dispatch} code={state.blue} color={'Blue'} />
    </View>
  );
};

export default AdjustColor;
