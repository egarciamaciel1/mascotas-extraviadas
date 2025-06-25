import { logoutUser } from '@/firebase/authService';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

//INICIO CODIGO AGREGADO PARA PARA EL MANEJO DE SI FALLA FIREBASE
const handleLogout = async () => {
  try {
    await logoutUser();
    router.push('/login'); // Redirige al login después de cerrar sesión
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};
//FIN CODIGO AGREGADO PARA PARA EL MANEJO DE SI FALLA FIREBASE

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Mascotas Extraviadas</Text>

      <Button title="Iniciar Sesión" onPress={() => router.push('/login')} />
      <Button title="Registrarse" onPress={() => router.push('/register')} />
      <Button title="Reportar Mascota" onPress={() => router.push('/report')} />
      <Button title="Cerrar sesión" onPress={handleLogout} />
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
