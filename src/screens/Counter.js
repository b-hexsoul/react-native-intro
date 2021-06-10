import React, { useState } from 'react';
import { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return state + action.payload;
    case 'decrease':
      return state - action.payload;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <View style={styles.container}>
      <Text>Count: {state}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'increase', payload: 1 })}
      >
        <Text>Increment Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'decrease', payload: 1 })}
      >
        <Text>Decrement Counter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ccc',
    padding: 14,
    marginVertical: 10,
  },
  countText: {},
});

export default Counter;
