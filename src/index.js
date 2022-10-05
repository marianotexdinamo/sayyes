import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzwbfeXDulSXk0jx1wlbCVlUi0vgCA4S0",
  authDomain: "sayyes-88caf.firebaseapp.com",
  projectId: "sayyes-88caf",
  storageBucket: "sayyes-88caf.appspot.com",
  messagingSenderId: "674846968509",
  appId: "1:674846968509:web:c0f2586264ef75587045d4"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();