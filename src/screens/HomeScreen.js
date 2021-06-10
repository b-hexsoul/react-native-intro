import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Components')} title="Go to components demo" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListScreen')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Counter')}>
        <Text>Go to Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pictures')}>
        <Text>Go to Pictures!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RandomColor')}>
        <Text>Go to Color Generator!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdjustColor')}>
        <Text>Go to Adjust Colors!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InputName')}>
        <Text>Go to input name!</Text>
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
    color: '#000',
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
});

export default HomeScreen;
