import { Alert } from "react-native";

export const recipePlant = async (plantName) => {
    console.log('Analizando ando...');
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
            prompt: `En caso de que la planta: ${plantName} sea comestible pon 'Comestible' y abajo brinda una receta paso a paso para preparar con las partes comestibles de la planta, solo brinda la receta. Ni más ni menos. Abajo brinda los ingredientes de la receta. Dame las siguientes características de la planta: ${plantName}, Características: .Tipo de planta: "", .Floración: "", .Altura: "(número)cm", .Anchura: "(número)cm", .Tamaño de flor: ""(solo si es que tiene), .Habitat: "", .Partes comestibles: ""(Solo si es comestible). Descripción: "", abajo de este subtitulo brinda una descripción breve acerca de la planta,  . En caso de que la planta: ${plantName} no sea comestible pon 'No es comestible' y abajo brinda una descripción breve explicando por qué no se debe consumir, abajo enlista posibles causas de intoxicación solo en caso de que sea una planta tóxica. Dame las siguientes características de la planta: ${plantName}, .Tipo de planta: "", .Floración: "", .Altura: "", .Anchura: "", .Tamaño de flor: ""(solo si es que tiene), .Habitat: "", .Partes comestibles: ""(Solo si es comestible). Ni más ni menos. Condiciones: NO encierres nada de texto entre carácteres especiales como ** **. NO responder nada parecido a: ¡Claro! Aquí tines una receta sencilla... ¿Quieres otra receta? ¿Deseas otra receta?. ¡Claro! aquí tienes información sencilla. Información sobre la planta: . ¿Quieres otra información? ¿Deseas otra información?. NO dar una advertencia al final de la receta.`,
            max_tokens: 500,
            temperature: 0.8
            }
    )
});

if(!response.ok) {
    throw new Error(`HTTP status ${response.status}`);
}

const result = await response.json();

console.log("Receta: ", result.generations[0].text)
const formatedResult = result.generations[0].text
return formatedResult
} catch (error) {
    console.error('Error uploading image:', error);
        Alert.alert('Error', 'Failed to get details.');
}
}