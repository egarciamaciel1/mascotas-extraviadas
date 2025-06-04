// firebase/reportService.ts
import { db } from './firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export const reportLostPet = async (data: {
  nombre: string;
  descripcion: string;
  zona: string;
  telefonoContacto: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'reportes'), {
      ...data,
      fecha: Timestamp.now(), // Guarda la fecha actual
    });
    return docRef.id;
  } catch (error) {
    console.error('Error al reportar mascota:', error);
    throw error;
  }
};
