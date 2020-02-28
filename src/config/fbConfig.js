import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCqpigVcTiIy55tUovDcKpMfjsgEH0iVLg',
  authDomain: 'daniel-marioplan-2e85f.firebaseapp.com',
  databaseURL: 'https://daniel-marioplan-2e85f.firebaseio.com',
  projectId: 'daniel-marioplan-2e85f',
  storageBucket: 'daniel-marioplan-2e85f.appspot.com',
  messagingSenderId: '1069335320029',
  appId: '1:1069335320029:web:812a3c22ae42ca6dd2d234'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
