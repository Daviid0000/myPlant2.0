import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 30,
    },
    topControlsContainer: {
      height: 70,
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    camera: {
      flex: 1,
      width: '100%',
    },
    bottomControlsContainer: {
      height: 100,
      backgroundColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    buttonSavePhoto: {
      backgroundColor: '#222', 
      flexDirection: 'row', 
      alignItems: 'center', 
      borderRadius: 10, 
      padding: 5
    }
  });
  