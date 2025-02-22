
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const FIREBASE_CONFIG_KEY = 'firebase_config';

export const initializeFirebase = (config: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}) => {
  // Store the config in localStorage
  localStorage.setItem(FIREBASE_CONFIG_KEY, JSON.stringify(config));
  
  // Initialize Firebase if not already initialized
  if (!getApps().length) {
    const app = initializeApp(config);
    return {
      db: getFirestore(app),
      storage: getStorage(app)
    };
  }
  return null;
};

// Try to get existing config
const savedConfig = localStorage.getItem(FIREBASE_CONFIG_KEY);
const firebaseConfig = savedConfig ? JSON.parse(savedConfig) : {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
