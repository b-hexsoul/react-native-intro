import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Brandon';
  return (
    <View>
      <Text style={styles.textPrimary}>This is the component screen!</Text>
      <Text style={styles.textSecondary}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPrimary: {
    fontSize: 45,
  },
  textSecondary: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
