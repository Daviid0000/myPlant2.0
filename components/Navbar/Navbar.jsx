import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; 

export const Navbar = ({ widthScreen }) => {
    
    return (
        <View style={{flexDirection: 'row', gap: 280}}>
            <Ionicons name="person" size={25} color={'#36f'}  />
            <Ionicons name="settings-outline" size={25} color={'#36f'} />
        </View>
    )
}

const styles = StyleSheet.create({
    account: {
        position: 'absolute', 
    },
    settings: {
        position: 'absolute', 
    }
})