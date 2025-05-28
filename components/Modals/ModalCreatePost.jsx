import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { LibraryIcon } from "../LibraryIcon/LibraryIcon";

export const ModalCreatePost = ({ title, postDescription, handleCreatePost, onPressInfo, onPressClose, onChangeTitle, onChangeText, modalCreatePost }) => {
    return(
        <Modal animationType="fade" transparent visible={modalCreatePost}>
            <View style={styles.modalStyle}>
                <View style={{ flexDirection: 'row', gap: 170 }}>
                    <LibraryIcon library="MaterialIcons" name="info" size={22} color="#fff" onPress={onPressInfo} />
                    <LibraryIcon library="MaterialIcons" name="close" size={22} color="#fff" onPress={onPressClose} />
                </View>

                <TextInput
                    placeholder={"Título"}
                    style={styles.inputStyle}
                    placeholderTextColor={'#fff'}
                    value={title}
                    onChangeText={onChangeTitle}
                />

                <TextInput
                    placeholder="Descripción"
                    style={styles.inputStyle}
                    placeholderTextColor={'#fff'}
                    value={postDescription}
                    onChangeText={onChangeText}
                />

                <View style={{ margin: 10 }}>
                    <Button title="Send" onPress={handleCreatePost} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        padding: 5,
        borderColor: '#fff',
        margin: 5,
        color: '#fff'
    },
    modalStyle: {
        backgroundColor: '#3388ee',
        padding: 10,
        borderRadius: 5,
        width: 250,
        height: 180,
        margin: 'auto'
    },
    
});
