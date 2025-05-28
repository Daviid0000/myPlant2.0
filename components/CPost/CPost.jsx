import { Pressable, Text, View, StyleSheet } from "react-native"
import { FontAwesome6, Ionicons, AntDesign, EvilIcons, Feather } from 'react-native-vector-icons';

export const CPost = ({ onPress, post }) => {
    return(
        <Pressable
            style={styles.post}
            onPress={onPress}
        >
            <View style={styles.dates}>
                <View style={styles.postPart1}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.CProfile}></View>
                    <View style={styles.subCProfile}>
                        <Text style={styles.username}>{post.username}</Text>
                        <Text style={styles.timepost}>Hace 13seg...</Text>
                    </View>
                  </View>
                    <Feather name="user-plus" size={24} color="#fff" />
                </View>

                <View>
                    <View style={styles.CPlant}>
                        <Text style={styles.plantName}>{post.plantName}</Text>
                        <Text style={styles.plantDescription}>{post.description}</Text>
                        <View style={styles.imgPlant}></View>
  
                        <View style={styles.reactions}>
                            <View style={styles.icons}>
                                <AntDesign name="hearto" size={22} color="#fff" />
                                <Text style={styles.textReaction}>0</Text>
                            </View>
                            
                            <View style={styles.icons}>
                                <AntDesign name="message1" size={22} color="#fff" />
                                <Text style={styles.textReaction}>0</Text>
                            </View>
                            
                            <View style={styles.icons}>
                                <EvilIcons name="share-google" size={32} color="#fff" />
                                <Text style={styles.textReaction}>0</Text>
                            </View>
                            
                            <View style={styles.icons}>
                                <Ionicons name="save-outline" size={22} color="#fff" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    post: {
        backgroundColor: '#36f', 
        gap: 10, 
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
        gap: 60
    },
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