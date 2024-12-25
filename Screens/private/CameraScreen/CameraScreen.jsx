import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Alert, Text, Pressable } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { styles } from '../../../components/StylesComponents/StylesCamera/styles';
import PermissionsView from '../../../components/CameraControlls/PermissionsView';
import SliderControl from '../../../components/CameraControlls/SliderControl';
import Button from '../../../components/CameraIconsButton/Buttons'
import { IdentificationPlant } from '../../../services/API-IDENTIFICATION-PLANT/identification';
import { getLastSavedImage, saveImageToLibrary } from '../../../services/CameraServices/mediaLibraryServices';
import { usePlantInfo } from '../../../context/PlantInfoContext';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const navigation = useNavigation();
  const { setModalData } = usePlantInfo();
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
  const [cameraProps, setCameraProps] = useState({
    zoom: 0,
    facing: 'back',
    flash: 'on',
    animateShutter: false,
    enableTorch: false,
  });
  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  const cameraRef = useRef(null);

  useEffect(() => {
    if (
      cameraPermission?.granted &&
      mediaLibraryPermissionResponse?.granted
    ) {
      fetchLastImage();
    }
  }, [cameraPermission, mediaLibraryPermissionResponse]);

  const fetchLastImage = async () => {
    const lastImage = await getLastSavedImage();
    setPreviousImage(lastImage);
  };

  const toggleProperty = (prop, option1, option2) => {
    setCameraProps((current) => ({
      ...current,
      [prop]: current[prop] === option1 ? option2 : option1,
    }));
  };

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      try {
        const picture = await cameraRef.current.takePictureAsync({ base64: true });
        // setImage(picture.uri);
        
        navigation.navigate('Gallery');
        await saveImageToLibrary(picture.uri); // Guarda la imagen en la galería
        await IdentificationPlant(picture.base64, navigation, setModalData);
        
      } catch (err) {
        console.error('Error while taking the picture:', err);
      }
    }
  };

  const handleSavePicture = async () => {
    if (image) {
      try {
        await saveImageToLibrary(image);
        Alert.alert('¡Foto guardada!', '¡Tu foto se guardó exitosamente!.');
        setImage(null);
        fetchLastImage();
      } catch (err) {
        console.error('Error while saving the picture:', err);
      }
    }
  };

  if (!cameraPermission || !mediaLibraryPermissionResponse) {
    return <View />;
  }

  if (!cameraPermission.granted || mediaLibraryPermissionResponse.status !== 'granted') {
    return (
      <PermissionsView 
      onRequestPermissions={async () => {
          const cameraStatus = await requestCameraPermission();
          console.log('Camera Permission:', cameraStatus);
          const mediaStatus = await requestMediaLibraryPermission();
          console.log('Media Library Permission:', mediaStatus);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <>
          <View style={styles.topControlsContainer}>
            <Button
              icon={cameraProps.flash === 'on' ? 'flash-on' : 'flash-off'}
              onPress={() => toggleProperty('flash', 'on', 'off')}
              disabled={true}
            />
            <Button
              icon='animation'
              color={cameraProps.animateShutter ? 'white' : '#404040'}
              onPress={() => toggleProperty('animateShutter', true, false)}
              disabled={true}
            />
            <Button
              icon={cameraProps.enableTorch ? 'flashlight-on' : 'flashlight-off'}
              onPress={() => toggleProperty('enableTorch', true, false)}
              disabled={true}
            />
          </View>

          <CameraView
            style={styles.camera}
            zoom={cameraProps.zoom}
            facing={cameraProps.facing}
            flash={cameraProps.flash}
            animateShutter={cameraProps.animateShutter}
            enableTorch={cameraProps.enableTorch}
            ref={cameraRef}
          />

          <SliderControl
            zoom={cameraProps.zoom}
            setZoom={(value) =>
              setCameraProps((current) => ({ ...current, zoom: value }))
            }
          />

          <View style={styles.bottomControlsContainer}>
            <Button
              icon='insert-photo'
              size={40}
              style={{ height: 60 }}
              disabled={false}
            />

            <Button
              icon='camera'
              size={60}
              style={{ height: 60 }}
              onPress={handleTakePicture}
              disabled={true}
            />
            <Button
              icon='flip-camera-ios'
              onPress={() => toggleProperty('facing', 'front', 'back')}
              size={40}
              disabled={true}
            />
          </View>
        </>
      ) : (
        <>
          <Image source={{ uri: image }} style={styles.camera} />
          <View style={styles.bottomControlsContainer}>
            {/* <Button icon='flip-camera-android' onPress={() => setImage(null)} disabled={true} /> */}
            <Pressable style={styles.buttonSavePhoto} onPress={handleSavePicture}>
                <Button icon='save' disabled={true} />
                <Text style={{color: '#fff'}}>Guardar foto en galeria</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}
