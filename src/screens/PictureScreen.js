import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PictureCard from '../components/PictureCard';

const PictureScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { image: require('../../assets/beach.jpg'), title: 'beach' },
          { image: require('../../assets/forest.jpg'), title: 'forest' },
          { image: require('../../assets/mountain.jpg'), title: 'mountain' },
        ]}
        renderItem={({ item, idx }) => (
          <PictureCard key={item.title} image={item.image} title={item.title} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
});

export default PictureScreen;
