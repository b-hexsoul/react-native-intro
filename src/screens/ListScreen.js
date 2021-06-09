import React from 'react';
import { Text, StyleSheet, View, FlatList, Alert } from 'react-native';

const ListScreen = () => {
  const friends = [
    {
      name: 'Ryan',
      age: 30,
    },
    {
      name: 'Brenda',
      age: 30,
    },
    {
      name: 'Shawn',
      age: 30,
    },
    {
      name: 'Quang',
      age: 30,
    },
  ];

  return (
    <View>
      <Text style={styles.headerText}>List Screen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={friends}
        keyExtractor={(i, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.name}: Age {item.age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 70,
    fontSize: 40,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 80,
  },
});

export default ListScreen;
