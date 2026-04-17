import { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function RegisterationScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View>
            <Text>Create Thy Account</Text>
            <TextInput
                placeholder='Email Please'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder='What is Thy Password?'
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}