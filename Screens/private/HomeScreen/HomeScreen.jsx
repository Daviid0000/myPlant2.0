import { useState, useEffect } from "react";
import { useWindowDimensions, Modal, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { Button, View, Alert } from "react-native";
import { io } from 'socket.io-client';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';
import { FlatList } from "react-native";
import {Navbar} from "../../../components/Navbar/Navbar";
import { BCreatePublication } from "../../../components/Buttons/BCreatePublication";
import posts from "../../../posts";
import { CPost } from "../../../components/CPost/CPost";

let socket;

export const HomeScreen = () => {
    const [title, setTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [modalCreatePost, setModalCreatePost] = useState(false);
    const [modalViewPost, setModalViewPost] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    
    const widthScreen = useWindowDimensions();

    const topBar = widthScreen.height.toString();
    const top = .07 * topBar;

    // useEffect( () => {
    //     const initializeSocket = async () => {
    //         socket = io("http://192.168.174.247:3000", {
    //             transports: ['websocket'], 
    //         });
    //         console.log('Socket conectado');
    //         return () => {
    //             if (socket) {
    //                 socket.disconnect();
    //                 console.log('Socket desconectado');
    //             }
    //         };
    //     };
    //     initializeSocket();
    // }, []);

    // useEffect(() => {
    //     const fetchPublications = async () => {

    //         try {
    //             const response = await fetch("http://192.168.174.247:3000/publication", {
    //                 method: 'GET',
    //             });
                
    //             if(!response.ok) {
    //                 throw new Error(`Error al obtener las publicaciones. STATUS:${response.status}`)
    //             }
    //             const data = await response.json();
        
    //             console.log("Publicaciones obtenidas:", data);
    //         } catch (error) {
    //             console.error("Error al obtener las publicaciones:", error);
    //         }

    //     }
    //     fetchPublications();
    // }, [])

    // const handlePost = async () => {
    //     if(!title) {
    //         console.error("El post requiere un título");
    //     };
    //     if(!postDescription) {
    //         console.error("El post requiere una descripción");
    //     };
        
    //     try {
    //         const response = await fetch("http://192.168.174.247:3000/publicatio", {
    //             method: "POST",
    //             headers: {
    //                 "Authorization" : `Bearer token`
    //             },
    //             body: JSON.stringify({
    //                 email,
    //                 title,
    //                 description: postDescription,
    //                 publicationType: "recipe"
    //             })
    //         })

    //         if(!response.ok) {
    //             throw new Error(`Error en la petición, estado: ${response.status}`)
    //         }

    //         const data = await response.json();
    //         console.log("datos: ", data);
            
    //         setTitle('');
    //         setPostDescription('');
    //     } catch (error) {
    //         Alert.alert("Error", "Error in request")
    //     }
    // };



    const handlePressPost = (postDescription) => {
        setSelectedPost(postDescription); // guardar post seleccionado
        setModalViewPost(true); // mostrar el post en un modal
    };

    return (
        <>
            <View>
                <View style={{top, justifyContent: 'center', alignItems: 'center'}}>
                    <Navbar  />
                </View>
                
                <View style={styles.containerPost}>
                    {posts.length > 0 ? (
                        <FlatList
                            data={posts}
                            keyExtractor={(item) => item.userId.toString()}
                            renderItem={({ item: postDescription}) => (
                                <CPost onPress={handlePressPost} post={postDescription} />
                            )}
                        />
                    ) : (
                        <View>

                            <Text style={{ textAlign: 'center', marginTop: 20 }}
                                >¡Se el primero en publicar algo!
                            </Text>
                        </View>
                    )}
                </View>

                <BCreatePublication widthScreen={widthScreen} createPublication={() => setModalCreatePost(true)} />
            </View>
        </>
    );
};

{/* <Modal animationType="slide" transparent visible={modalViewPost}>
    <View style={{ backgroundColor: '#36f', borderRadius: 10, padding: 10, height: '80%', top: 160 }}>
        <MaterialIcons
            name="close"
            size={30}
            color={'#fff'}
            onPress={() => setModalViewPost(false)}
            style={{ left: 300 }}
        />
        {selectedPost && (
            <>
                <Text style={{ color: '#fff' }}>Username: {selectedPost.username}</Text>
                <Text style={{ color: '#fff' }}>Plant Name: {selectedPost.plantName}</Text>
                <Text style={{ color: '#fff' }}>Stars: {selectedPost.stars}</Text>
            </>
        )}
    </View>
</Modal>

<Modal animationType="fade" transparent visible={modalCreatePost}>
    <View style={styles.modalStyle}>
        <View style={{ flexDirection: 'row' }}>
            <MaterialIcons
                name="info"
                size={22}
                color={'#fff'}
                onPress={() =>
                    console.log(
                        "Tu publicación podrá ser reportada por cualquier usuario, posteriormente será pasada a revisión y en caso de incumplir las reglas será eliminada y serás baneado por un tiempo."
                    )
                }
                style={{ left: 0 }}
            />
            <MaterialIcons
                name="close"
                size={22}
                color={'#fff'}
                onPress={() => setModalCreatePost(false)}
                style={{ left: 185 }}
            />
        </View>

        <TextInput
            placeholder="Titulo"
            style={styles.inputStyle}
            placeholderTextColor={'#fff'}
            value={title}
            onChangeText={(text) => setTitle(text)}
        />

        <TextInput
            placeholder="Descripción"
            style={styles.inputStyle}
            placeholderTextColor={'#fff'}
            value={postDescription}
            onChangeText={(text) => setPostDescription(text)}
        />

        <View style={{ margin: 10 }}>
            <Button title="Send" onPress={handlePost} />
        </View>
    </View>
</Modal> */}

const styles = StyleSheet.create({
    containerPost: {
        justifyContent: 'center', 
        alignItems: 'center', 
        top: 100
    },

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
        width: 250,
        height: 180,
        margin: 'auto'
    },
    
});
