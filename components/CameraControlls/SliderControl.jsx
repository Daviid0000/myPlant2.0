import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderControl = ({ value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={0.1}
        value={value}
        onValueChange={onValueChange}
        maximumTrackTintColor='#fff'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000'
  },
  slider: {
    width: '90%',
    height: 40,
    color: '#fff',

  },
});

export default SliderControl;
