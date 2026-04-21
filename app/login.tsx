import { useRouter } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../config/firebaseConfig'

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
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />

            <Text style={styles.title}>Log In</Text>

            <TextInput
                style={styles.input}
                placeholder='What is Thy Email?'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
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

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },

    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 40,
    },

    input: {
        color: '#ffffff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        fontSize: 16,
    },

    title: {
        color: '#ffffff'
    }
})

