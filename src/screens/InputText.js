import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const InputText = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={(newpassword) => setPassword(newpassword)}
        value={password}
        placeholder={'input your password'}
      />
      <Text style={styles.text}>My password is: {password}</Text>
      {password.length < 6 && (
        <Text style={{ color: 'red' }}>Your password must be longer than 6 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
  },
  text: {
    margin: 20,
    fontSize: 25,
  },
});

export default InputText;
