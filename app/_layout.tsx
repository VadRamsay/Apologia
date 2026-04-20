import { Stack } from 'expo-router'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from './firebaseConfig'

export default function RootLayout() {
  const [login, setLogin] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLogin(currentUser)
    })
    return unsubscribe
  }, [])


  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  )
}