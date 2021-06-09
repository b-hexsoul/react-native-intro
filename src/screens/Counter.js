import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text>Increment Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
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
