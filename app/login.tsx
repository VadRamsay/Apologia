import { useRouter } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from './firebaseConfig'

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.replace('/')
        } catch (error) {
            Alert.alert("Thy Credentials Failed", "Please Check Thy Email and or Password")
        }
    }

    return (
        <View>
            <Text>Log In</Text>
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
            <TouchableOpacity onPress={handleLogin}>
                <Text>Log In - Enter the Land of Milk and Honey</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScreen;

