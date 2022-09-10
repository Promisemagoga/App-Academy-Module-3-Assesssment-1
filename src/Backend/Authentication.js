import { watchPositionAsync } from 'expo-location';

import * as firebase from 'firebase';
import { Alert } from 'react-native';

export async function registration (FirstName,LastName,Email,Password){

    await firebase.auth().createUserWithPasswordAndEmail(Email,Password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore()
    db.collection('user').doc(currentUser.uid).set({
        email: currentUser.email,
        FirstName:FirstName,
        LastName:LastName,
        Password:Password,
    });

    try {
} catch (error) {
    Alert.alert("Something went wrong", error.message)
}
}