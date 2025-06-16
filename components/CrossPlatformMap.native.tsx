// components/CrossPlatformMap.native.tsx
import { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function CrossPlatformMap() {
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

  if (!region || !location) {
    return <Text>Cargando mapa...</Text>;
  }

  return (
    <MapView style={{ width: '100%', height: 200, marginVertical: 10 }} region={region}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="Ubicación actual"
      />
    </MapView>
  );
}
