import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import Buttons from "../CameraIconsButton/Buttons";
import { styles } from "../StylesComponents/StylesInfoModal/styles";

export const ModalPlantIdentification = ({ modalData, setModalData }) => {
    
    const renderStyledRecipe = (recipe) => {
        if (!recipe) return null;

        const lines = recipe.split("\n").filter(line => line.trim() !== ""); // Dividir por saltos de línea y eliminar líneas vacías.

        return lines.map((line, index) => {
            if (line.startsWith("[") && line.endsWith("]")) {
                return <Text key={index} style={styles.alert}>{line}</Text>;
            }

            if (line.startsWith("Posibles causas de intoxicación") && line.endsWith(":")) {
                return <Text key={index} style={styles.subtitle}>{line}</Text>;
            }

            if (line.startsWith("Ingredientes") && line.endsWith(":")) {
                return <Text key={index} style={styles.subtitle}>{line}</Text>;
            }

            if (line.startsWith("Instrucciones") && line.endsWith(":")) {
                return <Text key={index} style={styles.subtitle}>{line}</Text>;
            }

            if (line.includes("Comestible")) {
                return (
                    <View>
                        <Text style={[styles.plantName, {fontWeight: 'bold', fontSize: 22, }]}>Especie</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.plantName, {textDecorationLine: 'underline'}]}>{modalData?.name}</Text>
                            <Text key={index} style={styles.recipeTitle}>{line}</Text>
                        </View>
                    </View>
                );
            }

            if (line.includes("No comestible")) {
                return (
                    <View>
                        <Text style={[styles.plantName, {fontWeight: 'bold', fontSize: 22, }]}>Especie</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.plantName, {textDecorationLine: 'underline'}]}>{modalData?.name}</Text>
                            <Text key={index} style={styles.noRecipeTitle}>{line}</Text>
                        </View>
                    </View>
                );
            }

            if (line.startsWith("Receta:") && line.endsWith(":")) {
                return <Text key={index} style={styles.subtitleRecip}>{line}</Text>;
            }

            if (line.startsWith("Características") && line.endsWith(":")) {
                return <Text key={index} style={styles.subtitleRecip}>{line}</Text>;
            }

            if (line.startsWith("Descripción") && line.endsWith(":")) {
                return <Text key={index} style={styles.subtitleRecip}>{line}</Text>;
            }

            // Detectar listas desordenadas (líneas que comienzan con "-")
            if (line.trim().startsWith("-")) {
                return <Text key={index} style={styles.unorderedList}>• {line.trim().substring(1).trim()}</Text>;
            }

            // Detectar listas desordenadas (líneas que comienzan con "-")
            if (line.trim().startsWith(".")) {
                return <Text key={index} style={{borderBottomWidth: 1, padding: 5, borderColor: '#fa2', color: '#fa2'}}>• {line.trim().substring(1).trim()}</Text>;
            }

            // Detectar listas ordenadas (líneas que comienzan con "1. ", "2. ", etc.)
            if (/^\d+\.\s/.test(line.trim())) {
                return <Text key={index} style={styles.orderedList}>{line.trim()}</Text>;
            }

            // En caso de que solo sea un párrafo.
            return <Text key={index} style={styles.paragraph}>{line.trim()}</Text>;
        });
    };

    return (
        <>
            <Modal
                animationType="slide"
                transparent
                visible={!!modalData}
            >
                <View style={styles.modal}>
                    <View style={{left: -150, top: 10, zIndex: 1}}>
                        <Buttons icon={'close'} size={25} disabled={true} onPress={() => setModalData(null)} />
                    </View>

                    <View style={{display: 'flex', width: 360, height: 250}}>
                        <Image source={{ uri: modalData.image }} style={styles.imageStyle} />
                        <Image source={{ uri: modalData.imageSmall }} style={styles.imageSmallStyle} />
                    </View>

                    <View style={styles.containerDataPlant}>
                        <ScrollView>
                            {renderStyledRecipe(modalData?.recipe)}
                            <Pressable style={styles.buttonSaveImage} onPress={() => console.log('¡Saved!')}>
                                <Buttons icon={'save'} size={22} disabled={true} />
                                <Text style={styles.textButton}>Guardar en mi jardín</Text>
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    );
};

