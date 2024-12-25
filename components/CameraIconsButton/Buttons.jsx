import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default Button = ({icon, size, style, onPress, disabled }) => {

    return (
        <Pressable 
            style={[styles.button, style]}
            onPress={onPress}
        >
            <MaterialIcons 
                name = {icon}
                size={size? size : 28}
                color={disabled === true ? '#f1f1f1' : '#666666'}
                disabled={disabled}
            />
        </Pressable>
    )

}

const styles = StyleSheet.create({
  button : {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})