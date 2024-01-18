import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyDABvNBXPva9TKCq8FYgi0rYpF9W7e4OeM',
  authDomain: 'swiggy-clone-7a572.firebaseapp.com',
  projectId: 'swiggy-clone-7a572',
  storageBucket: 'swiggy-clone-7a572.appspot.com',
  messagingSenderId: '717833330550',
  appId: '1:717833330550:web:951f3c252ae332afbc6457',
}

// Initialize firebase
const app = initializeApp(firebaseConfig)

// Initialize firebase authentication and get a reference to the service
const auth = getAuth(app)

export { auth }
