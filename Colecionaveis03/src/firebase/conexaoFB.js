import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBioDCNBOHhHInTq6f6VVDtE4QrEtxY-8o',
  authDomain: 'colecionaveisfb-54116.firebaseapp.com',
  databaseURL: 'https://colecionaveisfb-54116.firebaseio.com',
  projectId: 'colecionaveisfb-54116',
  storageBucket: 'colecionaveisfb-54116.appspot.com',
  messagingSenderId: '1029680485720',
  appId: '1:1029680485720:web:e9f309825012650267c12d',
  measurementId: 'G-190W7S19D2',
};

const app = firebase.initializeApp(firebaseConfig);

export default app.firestore();
