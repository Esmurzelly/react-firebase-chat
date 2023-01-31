import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'firebase/firestore';
// import 'firebase/auth';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


import {getAuth} from 'firebase/auth';
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore, initializeFirestore} from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";


const app = initializeApp({
  apiKey: "AIzaSyAsEBAz8tQHkcv7PVAgyhdyt0ey-KirfI8",
  authDomain: "chat-react-e8adf.firebaseapp.com",
  projectId: "chat-react-e8adf",
  storageBucket: "chat-react-e8adf.appspot.com",
  messagingSenderId: "1084532233680",
  appId: "1:1084532233680:web:594481e6052e83b465d5d5",
  measurementId: "G-V1XDPMSDGV"
});

export const Context = createContext(null);

const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      auth,
      db
    }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);