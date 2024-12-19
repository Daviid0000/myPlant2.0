import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Button from '../../components/Buttons'

export const TopControls = ({ cameraProps, toggleProperty }) => (
  <View style={styles.topControlsContainer}>
    <Button
      icon={cameraProps.flash === 'on' ? 'flash-on' : 'flash-off'}
      onPress={() => toggleProperty('flash', 'on', 'off')}
    />
    <Button
      icon="animation"
      color={cameraProps.animateShutter ? 'white' : '#404040'}
      onPress={() => toggleProperty('animateShutter', true, false)}
    />
    <Button
      icon={cameraProps.enableTorch ? 'flashlight-on' : 'flashlight-off'}
      onPress={() => toggleProperty('enableTorch', true, false)}
    />
  </View>
);

export const BottomControls = ({ previousImage, setImage, takePicture, toggleProperty, savePicture }) => (
    <View style={styles.bottomControlsContainer}>
      <Pressable onPress={() => previousImage && setImage(previousImage)}>
        <Image source={{ uri: previousImage }} style={styles.previousImage} />
      </Pressable>
      <Button icon="camera" size={60} style={{ height: 60 }} onPress={takePicture} />
      <Button
        icon="flip-camera-ios"
        onPress={() => toggleProperty('facing', 'front', 'back')}
        size={40}
      />
      <Button icon="check" onPress={savePicture} />
    </View>
  );

  const styles = StyleSheet.create({
    topControlsContainer: {
      height: 100,
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    bottomControlsContainer: {
      height: 100,
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    previousImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
      },
  });
  