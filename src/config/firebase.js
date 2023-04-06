// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDqx49oJCE7UtsHP03A4LrQoHUB5J5q1nM',
  authDomain: 'foodie-726b5.firebaseapp.com',
  projectId: 'foodie-726b5',
  storageBucket: 'foodie-726b5.appspot.com',
  messagingSenderId: '764241096068',
  appId: '1:764241096068:web:71353b9840470e31e1c1d1',
  measurementId: 'G-TTQL03LTM3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const foodieDB = getFirestore();
