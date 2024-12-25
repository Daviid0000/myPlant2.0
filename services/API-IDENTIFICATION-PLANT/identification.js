import { Alert, Text } from "react-native";
import { recipePlant } from "../API-INFO-PLANT/recipePlant";

export const IdentificationPlant = async (base64Image, navigation, setModalData) => {
    console.log('Identificando ando...');
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

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const result = await response.json();
        console.log('suggestions:', JSON.stringify(result.result.classification.suggestions, null, 2));
        console.log('Nombre de planta:', result.result.classification.suggestions[0].name);
        console.log('Foto de planta:', result.result.classification.suggestions[0].similar_images[0].url);
        console.log('Foto más pequeña de la misma planta:', result.result.classification.suggestions[0].similar_images[0].url_small);
        const getPlantName = result.result.classification.suggestions[0].name
        const plantImage = result.result.classification.suggestions[0].similar_images[0].url;
        const plantImageSmall = result.result.classification.suggestions[0].similar_images[0].url_small;
        const getRecipePlant = await recipePlant(getPlantName);
        console.log("rresultado:", getRecipePlant);
        
        Alert.alert('¡Completado!', '¡Planta identificada!');

        setModalData({
            name: getPlantName,
            image: plantImage,
            imageSmall: plantImageSmall,
            description: result.result.classification.suggestions[0].name,
            recipe: getRecipePlant,
        });

        navigation.navigate('Gallery')
    } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Error', 'Failed to upload image.');
    }
};
