// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyBfuVqJwm3GVxHXuFcr6EzDd-WInN4Kx1Q',
  authDomain: 'jjs-restaurant.firebaseapp.com',
  projectId: 'jjs-restaurant',
  storageBucket: 'jjs-restaurant.firebasestorage.app',
  messagingSenderId: '444184540547',
  appId: '1:444184540547:web:2d297ea2f4387fc31772b6',
  measurementId: 'G-V7T9Z5DVTS',
};

// Initialize Firebase app only once
const app = getApps()[0] || initializeApp(firebaseConfig);

// Initialize Analytics safely (optional)
if (typeof window !== 'undefined') {
  try {
    getAnalytics(app);
  } catch (err) {
    console.warn('Analytics not supported in this environment:', err);
  }
}

export const firebaseAuth = getAuth(app);
export default app;
