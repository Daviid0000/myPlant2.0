import { useState, useEffect } from "react";
import { useWindowDimensions,  StyleSheet, Text } from "react-native";
import { View, Alert } from "react-native";
import { io } from 'socket.io-client';
import { FlatList } from "react-native";
import {Navbar} from "../../../components/Navbar/Navbar";
import { BCreatePublication } from "../../../components/Buttons/BCreatePublication";
import posts from "../../../posts";
import { Posts } from "../../../components/Posts/Posts";
import { ModalCreatePost } from "../../../components/Modals/ModalCreatePost";
import { ModalViewPost } from "../../../components/Modals/ModalViewPost";

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

    useEffect( () => {
        const initializeSocket = async () => {
            socket = io("http://192.168.174.247:3000", {
                transports: ['websocket'], 
            });
            console.log('Socket conectado');
            return () => {
                if (socket) {
                    socket.disconnect();
                    console.log('Socket desconectado');
                }
            };
        };
        initializeSocket();
    }, []);

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

    const handleCreatePost = async () => {
        if(!title) {
            console.error("El post requiere un título");
        };
        if(!postDescription) {
            console.error("El post requiere una descripción");
        };
        
        try {
            const response = await fetch("http://192.168.174.247:3000/publicatio", {
                method: "POST",
                headers: {
                    "Authorization" : `Bearer token`
                },
                body: JSON.stringify({
                    email,
                    title,
                    description: postDescription,
                    publicationType: "recipe"
                })
            })

            if(!response.ok) {
                throw new Error(`Error en la petición, estado: ${response.status}`)
            }

            const data = await response.json();
            console.log("datos: ", data);
            
            setTitle('');
            setPostDescription('');
        } catch (error) {
            Alert.alert("Error", "Error in request")
        }
    };

    const handlePressPost = (postDescription) => {
        setSelectedPost(postDescription); // guardar post seleccionado
        setModalViewPost(true); // mostrar el post en un modal
        console.log("post: ", postDescription )
        console.log("title: ", title )
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
                            renderItem={({ item }) => (
                                <Posts onPress={() => handlePressPost(item)} post={item} />
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

            <ModalViewPost modalViewPost={modalViewPost} selectedPost={selectedPost} onPressClose={() => setModalViewPost(false)} />
            <ModalCreatePost 
                postDescription={postDescription}
                title={title}
                handleCreatePost={handleCreatePost}
                modalCreatePost={modalCreatePost} 
                onChangeTitle={(text) => setTitle(text)} 
                onChangeText={(text) => setPostDescription(text)}
                onPressClose={() => setModalCreatePost(false)}
                onPressInfo={
                () => console.log("Tu publicación podrá ser reportada por cualquier usuario, posteriormente será pasada a revisión y en caso de incumplir las reglas será eliminada y serás baneado por un tiempo.")}  
            />
        </>
    );
};



const styles = StyleSheet.create({
    containerPost: {
        justifyContent: 'center', 
        alignItems: 'center', 
        top: 100
    },
});
