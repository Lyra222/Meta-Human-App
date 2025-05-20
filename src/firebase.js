// This connects the app to Firebase for login, stories, and file uploads
import { initializeApp } from 'firebase/app'; // Core Firebase setup
import { getAuth } from 'firebase/auth'; // For user login
import { getFirestore } from 'firebase/firestore'; // For saving stories
import { getStorage } from 'firebase/storage'; // For photos and audio
// Removed: import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyBu_XaJdtk6cGqT2X18rE9o1l2FSc2nYc",
  authDomain: "meta-human-1a0a2.firebaseapp.com",
  projectId: "meta-human-1a0a2",
  storageBucket: "meta-human-1a0a2.appspot.com",
  messagingSenderId: "1026873736957",
  appId: "1:1026873736957:web:6c9c581af2d12c5a9a1e9c"
};

const app = initializeApp(firebaseConfig); // Start Firebase
export const auth = getAuth(app); // Login system
export const db = getFirestore(app); // Story database
export const storage = getStorage(app); // File uploads
// Removed: export const messaging = getMessaging(app);