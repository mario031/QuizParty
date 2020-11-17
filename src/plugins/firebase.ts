import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA1Qhp320bhOrl4GeRxZz6hTp7HHmqkPDg',
    authDomain: 'quizparty-42a0e.firebaseapp.com',
    databaseURL: 'https://quizparty-42a0e.firebaseio.com',
    projectId: 'quizparty-42a0e',
    storageBucket: 'quizparty-42a0e.appspot.com',
    messagingSenderId: '489718366665',
    appId: '1:489718366665:web:f560ec0700aae503ff6818',
    measurementId: 'G-E590KWVXJR',
  });
}

export default firebase;
