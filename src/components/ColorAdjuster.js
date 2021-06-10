import React from 'react';
const { View, StyleSheet, Text } = require('react-native');
const { TouchableOpacity } = require('react-native-gesture-handler');

const ColorAdjuster = ({ color, code, colorChange }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text>
        {color}: {code}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => colorChange({ color: `${color}`, amount: 15 })}
      >
        <Text>More {color}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => colorChange({ color: `${color}`, amount: -15 })}
      >
        <Text>Less {color}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 5,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: 'white',
  },
});

export default ColorAdjuster;
