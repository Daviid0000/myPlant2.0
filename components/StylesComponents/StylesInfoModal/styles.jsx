import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        margin: 'auto',
        alignItems: 'center',
        backgroundColor: '#fff4e6',
        borderRadius: 10,
        width: '100%',
        top: 0,
    },
    imageStyle: {
        flexGrow: 1,
        objectFit: 'cover',
        top: -50,
        backgroundColor: '#ffd8a8'
    },
    imageSmallStyle: {
        top: 119,
        width: 80,
        height: 60,
        position: 'absolute',
        left: 10,
        backgroundColor: '#ffd8a8',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 1
    },
    buttonSaveImage: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fa0',
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 50
    },
    textButton: {
        color: '#fff',
        left: 5
    },
    plantName: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fa0',
    },
    alert: {
        color: '#f00',
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20
    },
    recipeTitle: {
        color: '#0e0',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        left: 70
    },
    noRecipeTitle: {
        color: '#f00',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        left: 70
    },
    unorderedList: {
        color: '#fff',
        paddingBottom: 10,
        backgroundColor: '#ffd8a8',
        padding: 5,
        borderWidth: 1,
        borderColor: '#fa0',
        fontWeight: 'bold'
    },
    orderedList: {
        color: '#fff',
        marginTop: 5,
        backgroundColor: '#ffd8a8',
        padding: 5,
        borderRadius: 5,
        borderColor: '#fa0',
        fontWeight: 'bold'
    },
    paragraph: {
        color: '#fa0',
        marginTop: 10,
        textAlign: 'left',
    },
    subtitle: {
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        color: '#fa0',
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    subtitleRecip: {
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        color: '#fa0',
        fontSize: 16,
    },
    containerDataPlant: {
        backgroundColor: '#fff', 
        borderRadius: 10, 
        height:600, 
        width:360, 
        padding: 10, 
        top: -60
    }
});
