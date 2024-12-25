import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const PermissionsView = ({ onRequestPermissions }) => {
  return (
    <View style={styles.container}>
      <Text>Necesitamos permisos de tu cámara y galeria para continuar</Text>
      <Pressable 
      style={styles.button} 
      onPress={onRequestPermissions} 
      android_ripple={{ 
        color:'rgba(0, 255, 255, 0.2)', 
        borderless: false, 
        radius: 160
      }}
    >
        <Text style={styles.buttonText}>Dar permisos</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: '#36f',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#36f',
    fontSize: 16,
  },
});

export default PermissionsView;
