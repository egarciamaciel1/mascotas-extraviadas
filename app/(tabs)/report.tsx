// app/(tabs)/report.tsx
//import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { reportLostPet } from '@/firebase/reportService';

import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
//import { useEffect, useState } from 'react';
//
const [location, setLocation] = useState(null);
const [region, setRegion] = useState(null);

useEffect(() => {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permiso para acceder a la ubicación fue denegado');
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
    setRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  })();
}, []);

//
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

	{region && (
    <MapView
      style={{ width: '100%', height: 200, marginVertical: 10 }}
      region={region}
    >
      <Marker
        coordinate={{
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
        }}
        title="Ubicación actual"
      />
    </MapView>
  )}

      <Button title="Reportar mascota" onPress={handleReport} />
    </View>
  );
}
