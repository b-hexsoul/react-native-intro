import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RandomColor = () => {
  const [colorCodes, setColorCodes] = useState([255, 255, 255]);

  const handleColor = () => {
    setColorCodes((prev) => prev.map((color) => generateRandom()));
  };

  const generateRandom = () => Math.random() * (255 - 0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `rgb(${colorCodes[0]},${colorCodes[1]},${colorCodes[2]})`,
    },
    button: {
      backgroundColor: '#ccc',
      color: '#000',
      padding: 10,
      borderRadius: 15,
      marginVertical: 10,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleColor}>
        <Text>Press on me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RandomColor;
