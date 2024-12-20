import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Slider from '@react-native-community/slider';
import Button from '../../../components/Buttons'

export default function App() {
  
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
    const [cameraProps, setCameraProps] = useState({
        zoom: 0,
        facing: 'back',
        flash: 'on',
        animateShutter: false,
        enableTorch: false
    });
    const [image, setImage] = useState(null);
    const [previousImage, setPreviousImage] = useState(null);

    const cameraRef = useRef(null);

    useEffect(() => {
        if(cameraPermission && cameraPermission.granted && mediaLibraryPermissionResponse && mediaLibraryPermissionResponse.status === 'granted') {
            getLastSavedImage();
        }
    }, [cameraPermission, mediaLibraryPermissionResponse])

    if (!cameraPermission || !mediaLibraryPermissionResponse) {
        return <View />
    }
  
    if (!cameraPermission.granted || mediaLibraryPermissionResponse.status !== 'granted') {
        return (
          <View style={styles.container}>
              <Text>We need camera and gallery permissions to continue.</Text>
              <TouchableOpacity style={styles.button} onPress={() => {
                  requestCameraPermission();
                  requestMediaLibraryPermission();
              }} >
                  <Text style={styles.buttonText}>Grant Permissions</Text>
              </TouchableOpacity>
          </View>
        )
    }
  
    const toggleProperty = (prop, option1, option2) => {
        setCameraProps((current) => ({
            ...current,
            [prop]:current[prop] === option1 ? option2 : option1
        }));
    };

    const zoomIn = () => {
        setCameraProps((current) => ({
            ...current,
            zoom: Math.min(current.zoom + 0.1, 1)
        }))
    }

    const zoomOut = () => {
      setCameraProps((current) => ({
          ...current,
          zoom: Math.max(current.zoom - 0.1, 0)
      }))
  }

  const takePicture = async() => {
      if(cameraRef.current) {
          try {
              const picture = await cameraRef.current.takePictureAsync({ base64: true});
              setImage(picture.uri);
              sendImageToServer(picture.base64)
              
          } catch (err) {
            console.log('Error while taking the picture : ', err);
          }
      }
  }

  const savePicture = async() => {
      if(image) {
          try {
              const asset = await MediaLibrary.createAssetAsync(image);
              const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
              
              Alert.alert('Photo saved!', image);
              setImage(null);
              getLastSavedImage();
          } catch (err) {
              console.log('Error while saving the picture : ', err);
          }
      }
  }

  const getLastSavedImage = async() => {
      if(mediaLibraryPermissionResponse && mediaLibraryPermissionResponse.status === 'granted') {
          const dcimAlbum = await MediaLibrary.getAlbumAsync('DCIM');

          if(dcimAlbum) {
              const {assets} = await MediaLibrary.getAssetsAsync({
                  album: dcimAlbum,
                  sortBy: [[MediaLibrary.SortBy.creationTime, false]],
                  mediaType: MediaLibrary.MediaType.photo,
                  first: 1
              });

              if(assets.length > 0) {
                  const assetInfo = await MediaLibrary.getAssetInfoAsync(assets[0].id);
                  setPreviousImage(assetInfo.localUri || assetInfo.uri);
              } else {
                  setPreviousImage(null);
              }

          } else {
              setPreviousImage(null);
          }
      }
  }

  const sendImageToServer = async (base64Image) => {
    try {
        const response = await fetch('https://plant.id/api/v3/identification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-Key': `${process.env.EXPO_PUBLIC_PLANTID_API_KEY}`
            },
            body: JSON.stringify({
                images: base64Image,
                latitude: 49.207,
                longitude: 16.608,
                similar_images: true
            }),
        });

        console.log(response)

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const result = await response.json();
        console.log('suggestions:', JSON.stringify(result.result.classification.suggestions, null, 2));
        console.log('plant name:', result.result.classification.suggestions[0].name);
        const getPlantName = result.result.classification.suggestions[0].name
        recipePlant(getPlantName);
        Alert.alert('Success', 'Image uploaded successfully!');
        
    } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Error', 'Failed to upload image.');
    }
};

const recipePlant = async (plantName) => {
    console.log('ejeecutando ando...');
  try {
    const response = await fetch(`https://api.cohere.ai/generate`, {
      method: 'POST',
      headers: {
          'Authorization': `Bearer ${process.env.EXPO_PUBLIC_COHERE_API_KEY}`,
          'Content-Type': 'application/json',
          'Cohere-Version': '2022-12-06'
      },
      body: JSON.stringify(
          {
              model: "command-xlarge-nightly",
              prompt: `Listame la siguiente información precisa acerca de la planta: ${plantName}. ¿Comestible? En caso de que sea comestible, contestame únicamente 'Comestible' o 'No comestible' y tampoco responder nada parecido a ¡Claro! Aquí tines una receta sencilla...... brinda una receta paso a paso para preparar con la planta: ${plantName}, solo brinda la receta, ni más ni menos. Sin terminar diciendo algo parecido a ¿Quieres otra receta? ¿Deseas otra receta? Tampoco dar una advertencia al final de la receta.  '¿No comestible? En caso de que no sea comestible únicamente no respondas a nada parecido a ¡Claro! aquí tienes información sencilla...... y brinda una información breve y precisa de la planta: ${plantName}, solo brinda una información del por qué no es comestible y añade un listado de posibles causas de intoxicación en caso de  que pudiese darse el caso que sea una planta tóxica, ni más ni menos. Sin terminar diciendo algo parecido a ¿Quieres otra información? ¿Deseas otra información?.`,
              max_tokens: 250,
              temperature: 0.8
            }
      )
  });

  if(!response.ok) {
    throw new Error(`HTTP status ${response.status}`);
  }

  const result = await response.json();
  console.log("Receta: ", result.generations[0].text)
  } catch (error) {
    console.error('Error uploading image:', error);
        Alert.alert('Error', 'Failed to get details.');
  }
}

  return (
    <View style={styles.container}>
      {!image ? (
          <>
              <View style={styles.topControlsContainer}>
              
              <Button 
                  icon={cameraProps.flash === 'on' ? 'flash-on' : 'flash-off'}
                  onPress={() => toggleProperty('flash', 'on', 'off')}
              />
              <Button 
                  icon='animation'
                  color={cameraProps.animateShutter ? 'white' : '#404040'}
                  onPress={() => toggleProperty('animateShutter', true, false)}
              />
              <Button 
                  icon={cameraProps.enableTorch ? 'flashlight-on' : 'flashlight-off'}
                  onPress={() => toggleProperty('enableTorch', true, false)}
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
            <View style={styles.sliderContainer}>
              <Button 
                  icon='zoom-out'
                  onPress={zoomOut}
              />
              <Slider 
                  style= {styles.slider}
                  minimumValue={0}
                  maximumValue={1}
                  value={cameraProps.zoom}
                  onValueChange={(value) => setCameraProps((current) => ({...current, zoom:value}))}
                  step={0.1}
              />
              <Button 
                  icon='zoom-in'
                  onPress={zoomIn}
              />
            </View>
            <View style={styles.bottomControlsContainer}> 
                <TouchableOpacity onPress={() => previousImage && setImage(previousImage)}>
                    <Image 
                        source={{uri:previousImage}}
                        style={styles.previousImage}
                    />
                </TouchableOpacity>
                
                <Button 
                    icon='camera'
                    size={60}
                    style={{height:60}}
                    onPress={takePicture}
                />
                <Button 
                  icon='flip-camera-ios'
                  onPress={() => toggleProperty('facing', 'front', 'back')}
                  size={40}
              />
            </View>
          </>
      ) : (
          <>
              <Image source={{uri:image}} style={styles.camera}/>
              <View style={styles.bottomControlsContainer}>
                  <Button 
                      icon='flip-camera-android'
                      onPress={()=> setImage(null)}
                  />
                  <Button 
                      icon='check'
                      onPress={savePicture}
                  />
              </View>
          </>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  topControlsContainer: {
    height: 100,
    backgroundColor:'black',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
},
buttonText: {
    color: 'white',
    fontSize: 16,
},
camera: {
  flex:1,
  width: '100%',
},
slider: {
  flex:1,
  marginHorizontal: 10,
},
sliderContainer: {
  position: 'absolute',
  bottom: 120,
  left : 20,
  right: 20,
  flexDirection: 'row'
},
bottomControlsContainer: {
  height:100,
  backgroundColor: 'black',
  flexDirection: 'row',
  justifyContent:'space-around',
  alignItems:'center',
},
previousImage: {
  width:60,
  height:60,
  borderRadius: 50
}
});