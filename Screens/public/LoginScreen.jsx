import { useState } from "react"
import { Button, Text, TextInput } from "react-native"

export const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

    }
    return(
        <>
            <Text>LoginScreen</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <Button onPress={handleLogin} />
        </>
    )
}