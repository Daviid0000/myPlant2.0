import React, { useRef, useEffect } from "react";
import { Modal, View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "../StylesComponents/StylesInfoModal/styles";
import {createShimmerPlaceholder} from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

export const ModalPlantPlaceholder = ({ visible }) => {

    const IdentifyPlantGIF = require('../../assets/indentifyPlantSplash.gif')

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
                        {/* Button Camera */}
                        <ShimmerPlaceholder
                            style={{
                                width: "5%",
                                height: 20,
                                borderRadius: 5,
                                marginBottom: 10,
                                position: 'absolute',
                                top: '10.8%',
                                left: 145,
                                zIndex: 10
                            }}
                            shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
                            linearGradientProps={{
                                colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* Circle Camera */}
                        <ShimmerPlaceholder
                            style={{
                                width: "10%",
                                height: 35,
                                borderRadius: 50,
                                marginBottom: 10,
                                position: 'absolute',
                                top: '12.1%',
                                left: 160,
                                zIndex: 15
                            }}
                            shimmerColors={["#fdc061", "#ffddaa", "#fdc061"]}
                            linearGradientProps={{
                                colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                            {/* Camera cube */}
                        <ShimmerPlaceholder
                            style={{
                                width: "25%",
                                height: 50,
                                borderRadius: 5,
                                marginBottom: 10,
                                position: 'absolute',
                                top: '11.3%',
                                zIndex: 10
                            }}
                            shimmerColors={["#ffaa22", "#ffddaa", "#ffaa22"]}
                            linearGradientProps={{
                                colors: ["#ffaa22", "#ffddaa", "#ffaa22"],
                                start: { x: 0, y: 0 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                {/* Contenedor de datos */}
                <View style={styles.containerDataPlant}>
                    <ScrollView>
                        <View style={{position: 'absolute', zIndex: 1, margin: 'auto', left: '30%', top: '20%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#fff', fontSize: 17, top: 10}}>Identificando planta...</Text>
                            <Image source={IdentifyPlantGIF} style={{width: 100, height: 100, left: -5}} />
                        </View>
                        
                        {/* Title */}
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
                        
                        {/* Content */}
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

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "90%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 55,
                                position: 'absolute'
                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "85%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 75,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "90%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 95,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        
                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "85%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 115,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* Title */}
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

                        {/* Content */}
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

                            {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "90%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 205,
                                position: 'absolute'
                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "85%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 225,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "90%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 245,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        
                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "85%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 265,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* Title */}
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

                        {/* Content */}
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

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "90%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 355,
                                position: 'absolute'
                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "85%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 375,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "90%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 395,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />
                        
                        {/* text */}
                        <ShimmerPlaceholder
                            style={{
                                width: "85%",
                                height: 10,
                                borderRadius: 5,
                                marginBottom: 10,
                                left: 10,
                                top: 415,
                                position: 'absolute'

                            }}
                            shimmerColors={["#ffcf85", "#ffddaa", "#ffcf85"]}
                            linearGradientProps={{
                                colors: ["#ff4422", "#ff22aa", "#ff4422"],
                                start: { x: 0, y: 1 },
                                end: { x: 1, y: 0 },
                            }}
                        />

                        <Pressable
                            style={{
                                backgroundColor: "#ffaa22",
                                padding: 15,
                                borderRadius: 5,
                                marginTop: 15,
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
