import { signOut } from 'firebase/auth'
import { Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../config/firebaseConfig'

function HomeScreen() {

    const handleLogout = async () => {
        await signOut(auth)
    }

    return (
        <View>
            <Text>Welcome to Apologia</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen