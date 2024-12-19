import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
import { Button, ScrollView, View } from "react-native"
import { Text } from "react-native"

export const GaleryScreen = () => {
    const [image, setImage] = useState('')

    // const getImage = async () => {
    //     const photo = await AsyncStorage.getItem('image64');
    //     setImage(photo)
    //     console.log('obtenido:', photo)
    // }

    const getImage = async () => {
        const photo = await AsyncStorage.getItem('image64');
        
        if (photo) {
            // Convertir la cadena JSON de vuelta en un objeto
            const parsedPhoto = JSON.parse(photo);
            setImage(parsedPhoto.uri);  // Asumiendo que el objeto tiene un campo 'uri'
            console.log('Obtenido:', parsedPhoto);
        } else {
            console.log('No se encontró la imagen en AsyncStorage');
        }
    }
    

    return(
        <>
        <View style={{borderWidth: 1, padding: 10, top: 50, height: '80%'}}>

        <ScrollView>
            <Text style={{color: '#000'}}>
                IMAGEN: {image}
            </Text>
            
        </ScrollView>

            <Button title="Obtener" onPress={() => getImage()} />
        </View>
        </>
    )
}