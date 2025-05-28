import { StyleSheet, Text, View } from 'react-native';

const IconLibraries = {
    FontAwesome6: require('react-native-vector-icons/FontAwesome6').default,
    MaterialIcons: require('react-native-vector-icons/MaterialIcons').default,
    Ionicons: require('react-native-vector-icons/Ionicons').default,
    AntDesign: require('react-native-vector-icons/AntDesign').default,
    EvilIcons: require('react-native-vector-icons/EvilIcons').default,
    Feather: require('react-native-vector-icons/Feather').default,
};

export const LibraryIcon = ({ library, name, size, color, reaction, onPress }) => {
    const IconComponent = IconLibraries[library];
    if (!IconComponent) {
        console.error(`La librería ${library} no está definida.`);
        return null;
    }
    return (
            <View style={styles.icons}>
                    <IconComponent name={name} size={size} color={color} onPress={onPress} />
                <Text style={styles.textReaction}>{reaction}</Text>
            </View>
    )
};

const styles = StyleSheet.create({
    textReaction: {
        color: '#fff',
        fontSize: 15,
        marginHorizontal: 5
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})