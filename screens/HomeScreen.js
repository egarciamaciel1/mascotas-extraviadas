import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Inicio</Text>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
      <Button title="Registrar" onPress={() => navigation.navigate('Register')} />
      <Button title="Reportar Mascota" onPress={() => navigation.navigate('Report')} />
    </View>
  );
}

