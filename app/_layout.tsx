import { Stack, useRouter, useSegments } from 'expo-router'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from './firebaseConfig'

export default function RootLayout() {
  const [login, setLogin] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const segments = useSegments()

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLogin(currentUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  // Redirect 
  useEffect(() => {
    if (loading) return

    const inAuthScreen = segments[0] === 'login' || segments[0] === 'register'

    if (!login && !inAuthScreen) {
      router.replace("/login")
    }
    if (login && inAuthScreen) {
      router.replace("/")
    }
  }, [login, loading, segments])

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  )
} 