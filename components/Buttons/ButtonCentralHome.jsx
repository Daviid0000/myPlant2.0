import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from 'react-native-vector-icons'

export const ButtonCentralHome = ({ onPress }) => {
    return (
      <Pressable
        style={styles.cameraButtonContainer}
        onPress={onPress}
      >
        <View style={styles.cameraButton}>
          <Ionicons name="camera" size={24} color="#fff" />
        </View>
      </Pressable>
    );
  };

  const styles = StyleSheet.create({
    cameraButtonContainer: {
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cameraButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });