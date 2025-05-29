// Componente de tarjeta de mascota 
import { Image, StyleSheet, Text, View } from 'react-native';

export default function PetCard({ pet }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <Text style={styles.name}>{pet.name}</Text>
      <Text>{pet.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8
  }
});

