import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PictureCard = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.imageText}>
        {title[0].toUpperCase()}
        {title.slice(1)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    marginHorizontal: 20,
  },
  imageText: {
    fontSize: 30,
  },
});

export default PictureCard;
