import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCnEsw2HjQx2AXKihsg-ihM-0qSXpX2hrw',
  authDomain: 'spectagram-f82b6.firebaseapp.com',
  databaseURL: 'https://spectagram-f82b6-default-rtdb.firebaseio.com',
  projectId: 'spectagram-f82b6',
  storageBucket: 'spectagram-f82b6.appspot.com',
  messagingSenderId: '606714914073',
  appId: '1:606714914073:web:be2c26d9e8d50473ccd188',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
