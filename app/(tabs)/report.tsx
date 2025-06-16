import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { reportLostPet } from '@/firebase/reportService';
import CrossPlatformMap from '../../components/CrossPlatformMap';


export default function ReportScreen() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [zona, setZona] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleReport = async () => {
    if (!nombre || !descripcion || !zona || !telefono) {
      Alert.alert('Completa todos los campos');
      return;
    }

    try {
      await reportLostPet({
        nombre,
        descripcion,
        zona,
        telefonoContacto: telefono,
      });
      Alert.alert('Reporte enviado correctamente');
      setNombre('');
      setDescripcion('');
      setZona('');
      setTelefono('');
    } catch (err) {
      Alert.alert('Error al enviar el reporte');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre de la mascota:</Text>
      <TextInput value={nombre} onChangeText={setNombre} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Descripción:</Text>
      <TextInput value={descripcion} onChangeText={setDescripcion} multiline style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Zona donde se perdió:</Text>
      <TextInput value={zona} onChangeText={setZona} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Teléfono de contacto:</Text>
      <TextInput value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" style={{ borderWidth: 1, marginBottom: 10 }} />

      {/* Aquí va el mapa multiplataforma */}
      <CrossPlatformMap />

      <Button title="Reportar mascota" onPress={handleReport} />
    </View>
  );
}

