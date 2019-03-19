// import { useState, useEffect } from "react";
// import { Modal, Pressable, StyleSheet, Text, TextInput } from "react-native";
// import { Button, View } from "react-native";
// import { io } from 'socket.io-client';
// import { MaterialIcons, Ionicons } from 'react-native-vector-icons'

// let socket;

// export const HomeScreen = () => {
//     const [title, setTitle] = useState('');
//     const [recipe, setRecipe] = useState('');
//     const [MCreateRecipe, setMCreateRecipe] = useState(false);
//     const [MViewRecipe, setMViewRecipe] = useState(false);
//     const [selectedRecipe, setSelectedRecipe] = useState(null);

//     useEffect(() => {
//         socket = io("http://192.168.83.247:3000", {
//             transports: ['websocket'], 
//         });

//         return () => {
//             if (socket) {
//                 socket.disconnect();
//                 console.log('Socket desconectado');
//             }
//         };
//     }, []);

//     const handleRecipe = () => {
        
//         if (title && recipe) {
//             console.log("Uy encontré una receta, mirá: ", title, recipe);
//             socket.emit("title", title);
//             socket.emit("recipe", recipe);

//             setTitle('');
//             setRecipe('');
//         } else {
//             console.log("Ow, no encontré ni una receta");
//         }
//     };

//     const handlePressRecipe = (recipe) => {
//         setSelectedRecipe(recipe); // Guardamos la receta seleccionada
//         setMViewRecipe(true); // Mostramos el modal
//     };

//     const recipes = [
//         {
//             userId: 1, username: "David", stars: 180, plantName: "Menta", plantImage: null
//         },
//         {
//             userId: 2, username: "Facundo", stars: 200, plantName: "Perejil", plantImage: null
//         },
//         {
//             userId: 3, username: "Álvaro", stars: 190, plantName: "Burrito", plantImage: null
//         }
//     ]

//     return (
//         <>
//             <View style={{ margin: 'auto' }}>
//                 <View style={{flexDirection: 'row', top: -215}}>
//                     <Ionicons name="person" size={25} color={'#36f'} style={styles.account} />
//                     <Ionicons name="settings-outline" size={25} color={'#36f'} style={styles.settings} />
//                 </View>


//                 <View style={{top: -170}}>
//                     {recipes.map((recipe) => (
//                         <Pressable key={recipe.userId} style={styles.publication} onPress={() => handlePressRecipe(recipe)}>
//                             <View style={styles.CProfile}></View>
//                             <View style={styles.subCProfile}>
//                                 <Text style={styles.username}>{recipe.username}</Text>
//                                 <View style={styles.otherCProfile}>
//                                     <MaterialIcons name='star' size={22} color={'#ff0'} />
//                                     <Text style={{color: '#fff'}}>{recipe.stars}</Text>
//                                 </View>
//                             </View>
//                             <View style={styles.CPlant}>
//                                 <Text style={styles.plantName}>{recipe.plantName}</Text>
//                                 <View style={styles.imgPlant}></View>
//                             </View>

//                             <Modal animationType="slide" transparent visible={MViewRecipe}>
//                                 <View style={{backgroundColor: '#36f', borderRadius: 10, padding: 10, height: '80%', top: 160}}>
//                                     <MaterialIcons name="close" size={30} color={'#fff'} onPress={() => setMViewRecipe(false)} style={{left: 300}} />

//                                     <Text style={{color: '#fff'}}>Modal view recipe: {recipe.username} </Text>
//                                 </View>
//                             </Modal>
//                         </Pressable>))}
//                 </View>

//                 <Modal animationType="fade" transparent visible={MCreateRecipe}>
//                     <View style={styles.modalStyle}>
                        
//                         <View style={{flexDirection: 'row'}}>
//                             <MaterialIcons name="info" size={22} color={'#fff'} onPress={() => console.log("Tu publicación podrá ser reportada por cualquier usuario, posteriormente será pasada a revisión y en caso de incumplir las reglas será eliminada y serás baneado por un tiempo.")} style={{left: 0}} />
//                             <MaterialIcons name="close" size={22} color={'#fff'} onPress={() => setMCreateRecipe(false)} style={{left: 185}} />
//                         </View>

//                         <TextInput
//                             placeholder="Titulo"
//                             style={styles.inputStyle}
//                             placeholderTextColor={'#fff'}
//                             value={title}
//                             onChangeText={(text) => setTitle(text)}
//                         />

//                         <TextInput
//                             placeholder="Receta"
//                             style={styles.inputStyle}
//                             placeholderTextColor={'#fff'}
//                             value={recipe}
//                             onChangeText={(text) => setRecipe(text)}
//                         />

//                         <View style={{ margin: 10 }}>
//                             <Button title="Send" onPress={handleRecipe} />
//                         </View>
//                     </View>
//                 </Modal>

                

//                 <Pressable onPress={() => setMCreateRecipe(true)} style={styles.buttonSum}>
//                     <Text style={styles.textSum}>+</Text>
//                 </Pressable>
//             </View>
//         </>
//     );
// };

import { useState, useEffect } from "react";
import { Modal, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { Button, View } from "react-native";
import { io } from 'socket.io-client';
import { MaterialIcons, Ionicons } from 'react-native-vector-icons';

let socket;

export const HomeScreen = () => {
    const [title, setTitle] = useState('');
    const [recipe, setRecipe] = useState('');
    const [MCreateRecipe, setMCreateRecipe] = useState(false);
    const [MViewRecipe, setMViewRecipe] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // Nuevo estado para la receta seleccionada

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

    const recipes = [
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

    const handlePressRecipe = (recipe) => {
        setSelectedRecipe(recipe); // Guardamos la receta seleccionada
        setMViewRecipe(true); // Mostramos el modal
    };

    return (
        <>
            <View style={{ margin: 'auto' }}>
                <View style={{ flexDirection: 'row', top: -215 }}>
                    <Ionicons name="person" size={25} color={'#36f'} style={styles.account} />
                    <Ionicons name="settings-outline" size={25} color={'#36f'} style={styles.settings} />
                </View>

                <View style={{ top: -170 }}>
                    {recipes.map((recipe) => (
                        <Pressable
                            key={recipe.userId}
                            style={styles.publication}
                            onPress={() => handlePressRecipe(recipe)}
                        >
                            <View style={styles.CProfile}></View>
                            <View style={styles.subCProfile}>
                                <Text style={styles.username}>{recipe.username}</Text>
                                <View style={styles.otherCProfile}>
                                    <MaterialIcons name="star" size={22} color={'#ff0'} />
                                    <Text style={{ color: '#fff' }}>{recipe.stars}</Text>
                                </View>
                            </View>
                            <View style={styles.CPlant}>
                                <Text style={styles.plantName}>{recipe.plantName}</Text>
                                <View style={styles.imgPlant}></View>
                            </View>
                        </Pressable>
                    ))}
                </View>

                <Modal animationType="slide" transparent visible={MViewRecipe}>
                    <View style={{ backgroundColor: '#36f', borderRadius: 10, padding: 10, height: '80%', top: 160 }}>
                        <MaterialIcons
                            name="close"
                            size={30}
                            color={'#fff'}
                            onPress={() => setMViewRecipe(false)}
                            style={{ left: 300 }}
                        />
                        {selectedRecipe && (
                            <>
                                <Text style={{ color: '#fff' }}>Username: {selectedRecipe.username}</Text>
                                <Text style={{ color: '#fff' }}>Plant Name: {selectedRecipe.plantName}</Text>
                                <Text style={{ color: '#fff' }}>Stars: {selectedRecipe.stars}</Text>
                            </>
                        )}
                    </View>
                </Modal>

                <Modal animationType="fade" transparent visible={MCreateRecipe}>
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
                                onPress={() => setMCreateRecipe(false)}
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

                <Pressable onPress={() => setMCreateRecipe(true)} style={styles.buttonSum}>
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
