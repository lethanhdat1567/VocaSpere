// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAwoJ4SPxUP3NuRs-u1Ap_RUHcNbG2auDY',
    authDomain: 'vocaspere.firebaseapp.com',
    projectId: 'vocaspere',
    storageBucket: 'vocaspere.firebasestorage.app',
    messagingSenderId: '788131808515',
    appId: '1:788131808515:web:337563a479d04cc987d536',
    measurementId: 'G-30N4BLR6GC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
