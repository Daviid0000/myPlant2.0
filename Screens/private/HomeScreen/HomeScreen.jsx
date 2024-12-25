import { useNavigation } from "@react-navigation/native"
import { Button, Text, View } from "react-native"

export const HomeScreen = () => {
    const navigation = useNavigation();

    return(
        <>
            <View style={{margin: 'auto'}}>
                {/* <Button title="Gallery" onPress={() => navigation.navigate('Gallery')} /> */}
            </View>
        </>
    )
}