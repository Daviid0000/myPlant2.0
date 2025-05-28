import { Pressable,StyleSheet } from "react-native"
import { Ionicons } from 'react-native-vector-icons'; 

export const BCreatePublication = ({ createPublication, widthScreen }) => {
    const topScreen = widthScreen.height.toString();
    const leftScreen = widthScreen.width.toString();
    const top = .84 * topScreen;
    const left = .75 * leftScreen;

    return(
        <Pressable style={[styles.add, { top, left, }]} onPress={createPublication}>
            <Ionicons name="add" size={32} color={"red"} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    add: {
        borderWidth: 1,
        borderColor: '#f00',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        position: 'absolute'
    }
})