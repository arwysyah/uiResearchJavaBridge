import React from 'react';
import {View, Text} from 'react-native';
import HeaderCard from '../components/HeaderCard';
import {imageCarousel} from '../utils/data/data';
import {Image, ImageBitmap, StyleSheet} from 'react-native';

const HomeView = () => {
  console.log(imageCarousel[0].image);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assets/dummy.jpg')}
        style={{
          height: 360,
          width: 360,
          justifyContent: 'center',
          // tintColor: 'grey',
          // opacity: 0.06,
        }}
        // tintColor={tintColor: '#e6e6e6',}
        resizeMode="contain"
      />
      <View style={styles.overlay} />
      {/* <HeaderCard /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(144,144,144,0.84)',
    height: 205,
    width: 360,
    top: 165,
    // justifyConte,
  },
});
export default HomeView;
