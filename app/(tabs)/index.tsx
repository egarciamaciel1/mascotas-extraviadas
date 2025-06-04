import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { logoutUser } from '@/firebase/authService';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Mascotas Extraviadas</Text>

      <Button title="Iniciar Sesión" onPress={() => router.push('/login')} />
      <Button title="Registrarse" onPress={() => router.push('/register')} />
      <Button title="Reportar Mascota" onPress={() => router.push('/report')} />
      <Button title="Cerrar sesión" onPress={logoutUser} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 30
  }
});
