// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWSEfSFWlR7ASw22N0vkDT8NrTzQEzoUs',
  authDomain: 'jadist-sembako.firebaseapp.com',
  databaseURL:
    'https://jadist-sembako-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'jadist-sembako',
  storageBucket: 'jadist-sembako.appspot.com',
  messagingSenderId: '21496224269',
  appId: '1:21496224269:web:74978c4e43e2c422795344',
  measurementId: 'G-T5MFK75RF1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
