import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const colorReducer = (state, action) => {
  // action object - { color: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.color) {
    case 'Red':
      return state.red + action.amount <= 255 && state.red + action.amount >= 0
        ? { ...state, red: state.red + action.amount }
        : state;
    case 'Green':
      return state.green + action.amount <= 255 && state.green + action.amount >= 0
        ? { ...state, green: state.green + action.amount }
        : state;
    case 'Blue':
      return state.blue + action.amount <= 255 && state.blue + action.amount >= 0
        ? { ...state, blue: state.blue + action.amount }
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
