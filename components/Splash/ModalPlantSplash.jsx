// import React from "react";
// import { Modal, View, Text, ScrollView, Pressable } from "react-native";
// import { styles } from "../StylesComponents/StylesInfoModal/styles";
// import ShimmerPlaceholder from "react-native-shimmer-placeholder";

// export const ModalPlantPlaceholder = ({ visible }) => {
//     return (
//         <Modal animationType="slide" transparent visible={visible}>
//             <View style={styles.modal}>
                
//                 <View style={{ display: "flex", width: 360, height: 300 }}>
//                     {/* Image  */}
//                     <ShimmerPlaceholder style={{ 
//                         width: '100%',
//                         flex: 1, 
//                         backgroundColor: "#ffaa22", 
//                         marginBottom: 10, 
//                         borderRadius: 10
//                     }} 
//                     shimmerColors={["#ffddaa", "#ffaa22", "#ffaa22"]}
//                         linearGradientProps={{
//                             colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
//                             start: { x: 0, y: 0 },
//                             end: { x: 1, y: 0 },
//                         }}
//                     />
                    
//                 </View>

//                 <View style={styles.containerDataPlant}>
//                     <ScrollView>
//                         {/* Title */}
//                         <ShimmerPlaceholder style={{ 
//                             width: '100%',
//                             height: 30, 
//                             backgroundColor: "#ff6622", 
//                             borderRadius: 5, 
//                             marginBottom: 10 
//                         }} 
//                         shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
//                         linearGradientProps={{
//                             colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
//                             start: { x: 0, y: 0 },
//                             end: { x: 1, y: 0 },
//                         }}
//                         />

//                         {/* Description */}
//                         <ShimmerPlaceholder style={{ 
//                             width: '100%',
//                             height: 100, 
//                             backgroundColor: "#ff4422", 
//                             borderRadius: 5, 
//                             marginBottom: 10 
//                         }} 
//                         shimmerColors={["#ffddaa", "#ffaa22", "#ffaa22"]}
//                         linearGradientProps={{
//                             colors: ["#ff4422", "#ff22aa", "#ff4422"],
//                             start: { x: 0, y: 0 },
//                             end: { x: 1, y: 0 },
//                         }}
//                         />

//                         {/* Title */}
//                         <ShimmerPlaceholder style={{ 
//                             width: '100%',
//                             height: 30, 
//                             backgroundColor: "#ff6622", 
//                             borderRadius: 10, 
//                             marginBottom: 15 
//                         }} 
//                         shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
//                         linearGradientProps={{
//                             colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
//                             start: { x: 0, y: 0 },
//                             end: { x: 1, y: 0 },
//                         }}
//                         />

//                         {/* Description */}
//                         <ShimmerPlaceholder style={{ 
//                             width: '100%',
//                             height: 100, 
//                             backgroundColor: "#ff4422", 
//                             borderRadius: 5, 
//                             marginBottom: 10 
//                         }} 
//                         shimmerColors={["#ffddaa", "#ffaa22", "#ffaa22"]}
//                         linearGradientProps={{
//                             colors: ["#ff4422", "#ff22aa", "#ff4422"],
//                             start: { x: 0, y: 0 },
//                             end: { x: 1, y: 0 },
//                         }}
//                         />
                        
//                         {/* Title */}
//                         <ShimmerPlaceholder style={{ 
//                             width: '100%',
//                             height: 30, 
//                             backgroundColor: "#ff6622", 
//                             borderRadius: 10, 
//                             marginBottom: 15 
//                         }} 
//                         shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
//                         linearGradientProps={{
//                             colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
//                             start: { x: 0, y: 0 },
//                             end: { x: 1, y: 0 },
//                         }}
//                         />

//                         {/* Description */}
//                         <ShimmerPlaceholder style={{ 
//                             width: '100%',
//                             height: 100, 
//                             backgroundColor: "#ff4422", 
//                             borderRadius: 5, 
//                             marginBottom: 10 
//                         }} 
//                         shimmerColors={["#ffddaa", "#ffaa22", "#ffaa22"]}
//                         linearGradientProps={{
//                             colors: ["#ff4422", "#ff22aa", "#ff4422"],
//                             start: { x: 0, y: 0 },
//                             end: { x: 1, y: 0 },
//                         }}
//                         />

//                         <Pressable style={{ 
//                             backgroundColor: "#ffaa22", 
//                             padding: 10, 
//                             borderRadius: 5, 
//                             marginTop: 20 }}>
//                             <Text style={{ textAlign: "center", color: "#ffffff" }}>Guardar en mi jardín</Text>
//                         </Pressable>
//                     </ScrollView>
//                 </View>
//             </View>
//         </Modal>
//     );
// };

import React, { useRef, useEffect } from "react";
import { Modal, View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "../StylesComponents/StylesInfoModal/styles";
import {createShimmerPlaceholder} from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

export const ModalPlantPlaceholder = ({ visible }) => {
//     const shimmerRefs = useRef([]);

//     useEffect(() => {
//         if (visible) {
//             shimmerRefs.current.forEach((shimmer) => shimmer?.play?.());
//         } else {
//             shimmerRefs.current.forEach((shimmer) => shimmer?.stop?.());
//         }
//     }, [visible]);

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

    return (
        <Modal animationType="slide" transparent visible={visible}>
            <View style={styles.modal}>
                {/* Contenedor principal */}
                    <ShimmerPlaceholder
                        style={{ width: 360, height: 300 }}
                        shimmerColors={["#fdc061", "#ffddaa", "#fdc061"]}
                        linearGradientProps={{
                            colors: ["#ffddaa", "#ffaa22", "#ffaa22"],
                            start: { x: 0, y: 0 },
                            end: { x: 1, y: 0 },
                        }}
                    />

                {/* Contenedor de datos */}
                <View style={styles.containerDataPlant}>
                    <ScrollView>

                        <ShimmerPlaceholder
                            style={{
                                width: "100%",
                                height: 30,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
                            linearGradientProps={{
                                colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        <ShimmerPlaceholder
                            style={{
                                width: "100%",
                                height: 100,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            shimmerColors={["#fdc061", "#ffddaa", "#fdc061"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        <ShimmerPlaceholder
                            style={{
                                width: "100%",
                                height: 30,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
                            linearGradientProps={{
                                colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        <ShimmerPlaceholder
                            style={{
                                width: "100%",
                                height: 100,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            shimmerColors={["#fdc061", "#ffddaa", "#fdc061"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        <ShimmerPlaceholder
                            style={{
                                width: "100%",
                                height: 30,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
                            linearGradientProps={{
                                colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        <ShimmerPlaceholder
                            style={{
                                width: "100%",
                                height: 100,
                                borderRadius: 5,
                                marginBottom: 10,
                            }}
                            shimmerColors={["#fdc061", "#ffddaa", "#fdc061"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        {/* Otros placeholders pueden seguir aquí */}
                        <Pressable
                            style={{
                                backgroundColor: "#ffaa22",
                                padding: 10,
                                borderRadius: 5,
                                marginTop: 20,
                            }}
                        >
                            <Text style={{ textAlign: "center", color: "#ffffff" }}>Guardar en mi jardín</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};
