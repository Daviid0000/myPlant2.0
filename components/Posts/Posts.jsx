import { Pressable, Text, View } from "react-native"
import { LibraryIcon } from "../LibraryIcon/LibraryIcon";
import { styles } from '../Styles/StylePosts';

export const Posts = ({ onPress, post }) => {
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
                    <LibraryIcon library={'Feather'} name={'user-plus'} size={24} color={'#fff'} />
                </View>

                <View>
                    <View style={styles.CPlant}>
                        <Text style={styles.plantName}>{post.plantName}</Text>
                        <Text style={styles.plantDescription}>{post.description}</Text>
                        <View style={styles.imgPlant}></View>
  
                        <View style={styles.reactions}>
                            <LibraryIcon library={'AntDesign'} name={'hearto'} size={22} color={'#fff'} reaction={0} />
                            <LibraryIcon library={'AntDesign'} name={'message1'} size={22} color={'#fff'} reaction={0} />
                            <LibraryIcon library={'EvilIcons'} name={'share-google'} size={32} color={'#fff'} reaction={0} />
                            <LibraryIcon library={'Ionicons'} name={'save-outline'} size={22} color={'#fff'} />
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
