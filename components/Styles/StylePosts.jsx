import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    post: {
        backgroundColor: '#ddd', 
        padding: 10, 
        borderRadius: 5, 
        alignItems: 'center',
        marginVertical: 5, 
        width: '100%', 
    },
    dates: {
        justifyContent: 'center', 
        alignItems: 'flex-start'
    },
    postPart1: {
        flexDirection: 'row',
        gap: 165,
        alignItems: 'center'
    },
    postPart2: {
        flexDirection: 'column'
    },
    CProfile: {
        borderWidth: 1, 
        borderRadius: 50, 
        width: 55, 
        height: 55, 
        borderColor: '#ff0', 
        left: 0,
    },
    subCProfile: {
        flexDirection: 'column'
    },
    username: {
        color: '#fff', 
        left: 10,
        fontSize: 17,
        fontWeight: 'bold'
    },
    timepost: {
        color: '#eee', 
        left: 10,
    },
    otherCProfile: {
        flexDirection: 'row', 
        alignItems: 'center', 
        top: 5
    },
    CPlant: {
        width: '95%',
    },
    plantName: {
        color: '#fff', 
        left: 0, 
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 5
    },
    plantDescription: {
        color: '#fff',
        marginBottom: 10,
        textAlign: 'auto'
    },
    imgPlant: {
        borderWidth: 1, 
        borderRadius: 5, 
        height: 150, 
        borderColor: '#fff', 
    },
    reactions: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 56
    }
})