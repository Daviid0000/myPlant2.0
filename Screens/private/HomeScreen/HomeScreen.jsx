import { useState, useEffect } from "react";
import { Modal, StyleSheet, TextInput } from "react-native";
import { Button, View } from "react-native";
import { io } from 'socket.io-client';

let socket;

export const HomeScreen = () => {
    const [title, setTitle] = useState('');
    const [recipe, setRecipe] = useState('');

    useEffect(() => {
        socket = io("http://192.168.83.247:3000", {
            transports: ['websocket'], 
        });

        return () => {
            if (socket) {
                socket.disconnect();
                console.log('Socket desconectado');
            }
        };
    }, []);

    const handleRecipe = () => {
        
        if (title && recipe) {
            console.log("Uy encontré una receta, mirá: ", title, recipe);
            socket.emit("title", title);
            socket.emit("recipe", recipe);

            setTitle('');
            setRecipe('');
        } else {
            console.log("Ow, no encontré ni una receta");
        }
    };

    return (
        <>
            <View style={{ margin: 'auto' }}>
                <Modal animationType="fade" transparent>
                    <View style={styles.modalStyle}>
                        <TextInput
                            placeholder="Titulo"
                            style={styles.inputStyle}
                            placeholderTextColor={'#fff'}
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />

                        <TextInput
                            placeholder="Receta"
                            style={styles.inputStyle}
                            placeholderTextColor={'#fff'}
                            value={recipe}
                            onChangeText={(text) => setRecipe(text)}
                        />

                        <View style={{ margin: 10 }}>
                            <Button title="Send" onPress={handleRecipe} />
                        </View>
                    </View>
                </Modal>

                <View style={{ width: 35, top: 270, left: 120 }}>
                    <Button title="+" onPress={() => console.log("abrir modal")} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        padding: 5,
        borderColor: '#fff',
        margin: 5,
        color: '#fff'
    },
    modalStyle: {
        backgroundColor: '#3388ee',
        padding: 10,
        borderRadius: 5,
        width: 200,
        height: 140,
        margin: 'auto'
    }
});
