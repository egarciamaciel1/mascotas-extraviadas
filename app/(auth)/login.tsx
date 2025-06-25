// app/(tabs)/login.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { loginUser } from '@/firebase/authService';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      Alert.alert('Inicio de sesión exitoso');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Correo" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}
