import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'XXX',
  authDomain: 'xxx.firebaseapp.com',
  databaseURL: 'https://xxx.firebaseio.com',
  projectId: 'xxx',
  storageBucket: 'xxx.appspot.com',
  messagingSenderId: 'xxxxxx',
  appId: 'XXX'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
