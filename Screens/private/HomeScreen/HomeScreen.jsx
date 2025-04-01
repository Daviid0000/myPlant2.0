import { useState, useEffect } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { Button, View, Alert } from "react-native";
import { io } from 'socket.io-client';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';

let socket;

export const HomeScreen = () => {
    const [title, setTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [modalCreatePost, setModalCreatePost] = useState(false);
    const [modalViewPost, setModalViewPost] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

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

    const handlePost = async () => {
        if(!title) {
            console.error("El post requiere un título");
        };
        if(!postDescription) {
            console.error("El post requiere una descripción");
        };
        
        try {
            const response = await fetch("http://ooo.ooo.ooo.000:3000/publicatio    ", {
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
        // if (title && postDescription) {
        //     console.log("Uy encontré una publicación, mirá: ", title, postDescription);
            
        // } else {
        //     console.log("Ow, no encontré ni una publicación.  :(");
        // }
    };

    const posts = [
        {
            userId: 1, username: "David", stars: 180, plantName: "Menta", plantImage: null
        },
        {
            userId: 2, username: "Facundo", stars: 200, plantName: "Perejil", plantImage: null
        },
        {
            userId: 3, username: "Álvaro", stars: 190, plantName: "Burrito", plantImage: null
        }
    ];

    const handlePressPost = (postDescription) => {
        setSelectedPost(postDescription); // guardar post seleccionado
        setModalViewPost(true); // mostrar el post en un modal
    };

    return (
        <>
            <View style={{ margin: 'auto' }}>
                <View style={{ flexDirection: 'row', top: -215 }}>
                    <Ionicons name="person" size={25} color={'#36f'} style={styles.account} />
                    <Ionicons name="settings-outline" size={25} color={'#36f'} style={styles.settings} />
                </View>

                <View style={{ top: -170 }}>
                    {posts.map((postDescription) => (
                        <Pressable
                            key={postDescription.userId}
                            style={styles.publication}
                            onPress={() => handlePressPost(postDescription)}
                        >
                            <View style={styles.CProfile}></View>
                            <View style={styles.subCProfile}>
                                <Text style={styles.username}>{postDescription.username}</Text>
                                <View style={styles.otherCProfile}>
                                    <MaterialIcons name="star" size={22} color={'#ff0'} />
                                    <Text style={{ color: '#fff' }}>{postDescription.stars}</Text>
                                </View>
                            </View>
                            <View style={styles.CPlant}>
                                <Text style={styles.plantName}>{postDescription.plantName}</Text>
                                <View style={styles.imgPlant}></View>
                            </View>
                        </Pressable>
                    ))}
                </View>

                <Modal animationType="slide" transparent visible={modalViewPost}>
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
                </Modal>

                <Pressable onPress={() => setModalCreatePost(true)} style={styles.buttonSum}>
                    <Text style={styles.textSum}>+</Text>
                </Pressable>
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
        width: 250,
        height: 180,
        margin: 'auto'
    },
    buttonSum: {
        width: 55, 
        height: 55, 
        top: 160, 
        left: 270, 
        backgroundColor: '#36f', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 50,
        zIndex: 1
    },
    textSum: {
        color: '#fff', 
        textAlign: 'center', 
        fontSize: 25
    },
    publication: {
        backgroundColor: '#36f', 
        gap: 10, 
        padding: 10, 
        borderRadius: 5, 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 5, 
        width: 340, 
        height: 70
    },
    CProfile: {
        borderWidth: 1, 
        borderRadius: 50, 
        width: 55, 
        height: 55, 
        borderColor: '#fff', 
        left: 0
    },
    subCProfile: {
        flexDirection: 'column'
    },
    username: {
        color: '#fff', 
        left: 10
    },
    otherCProfile: {
        flexDirection: 'row', 
        alignItems: 'center', 
        top: 5
    },
    CPlant: {
        alignItems: 'center', 
        flexDirection: 'row', 
        left: 230, 
        position: 'absolute'
    },
    plantName: {
        color: '#fff', 
        left: 0, 
        fontSize: 17
    },
    imgPlant: {
        borderWidth: 1, 
        borderRadius: 50, 
        width: 45, 
        height: 45, 
        borderColor: '#fff', 
        left: 10
    },
    account: {
        position: 'absolute', 
        left: 10
    },
    settings: {
        position: 'absolute', 
        left: 300
    }
});
