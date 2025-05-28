import { Modal, Text, View } from "react-native"
import { LibraryIcon } from "../LibraryIcon/LibraryIcon"

export const ModalViewPost = ({ onPressClose, modalViewPost, selectedPost }) => {
    return(
        <Modal animationType="slide" transparent visible={modalViewPost}>
            <View style={{ backgroundColor: '#36f', borderRadius: 10, padding: 10, height: '80%', top: 160 }}>
                <LibraryIcon library={"MaterialIcons"} name="close" size={30} color="#fff" onPress={onPressClose} />
                {selectedPost && (
                    <>
                        <Text style={{ color: '#fff' }}>Username: {selectedPost.username}</Text>
                        <Text style={{ color: '#fff' }}>Plant Name: {selectedPost.plantName}</Text>
                        <Text style={{ color: '#fff' }}>Stars: {selectedPost.stars}</Text>
                    </>
                )}
            </View>
        </Modal>
    )
}