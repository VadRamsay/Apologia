import { useRouter } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../config/firebaseConfig'

function RegisterScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            router.replace('/')
        } catch (error) {
            Alert.alert("Thy Regesteration Failed", "Please Check Thy Email and or Password")
        }
    }

    return (
        <View>
            <Text>Create Thy Account</Text>
            <TextInput
                placeholder='What is Thy Email?'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='What is Thy Password?'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity onPress={handleRegister}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen

