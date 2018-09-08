import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAZ_JXrJmeEtDstZarjwyT6MXfjaNjHLxw',
	authDomain: 'music-player-ea852.firebaseapp.com',
	databaseURL: 'https://music-player-ea852.firebaseio.com',
	projectId: 'music-player-ea852',
	storageBucket: 'music-player-ea852.appspot.com',
	messagingSenderId: '800560206741',
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storageRef = firebase.storage().ref();
export const dbRef = firebase.database().ref();
