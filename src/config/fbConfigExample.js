import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'API-KEY',
  authDomain: 'Auth-Domain',
  databaseURL: 'database-URL',
  projectId: 'project-ID',
  storageBucket: 'storage-Bucket',
  messagingSenderId: 'messaging-sender-ID',
  appId: 'app-ID'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
