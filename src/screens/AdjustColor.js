import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const colorReducer = (state, action) => {
  // action object - { type: 'red' || 'green' || 'blue', payload: 15 || -15}
  switch (action.type) {
    case 'Red':
      return state.red + action.payload <= 255 && state.red + action.payload >= 0
        ? { ...state, red: state.red + action.payload }
        : state;
    case 'Green':
      return state.green + action.payload <= 255 && state.green + action.payload >= 0
        ? { ...state, green: state.green + action.payload }
        : state;
    case 'Blue':
      return state.blue + action.payload <= 255 && state.blue + action.payload >= 0
        ? { ...state, blue: state.blue + action.payload }
        : state;
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
