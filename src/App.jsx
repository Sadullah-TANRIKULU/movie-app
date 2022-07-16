import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

import Router from "./router/Router";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC47GkduSZdmOTlh0XXr57W6ZMG2ZcJk6I",
  authDomain: "movie-app-e48e8.firebaseapp.com",
  projectId: "movie-app-e48e8",
  storageBucket: "movie-app-e48e8.appspot.com",
  messagingSenderId: "760674641161",
  appId: "1:760674641161:web:131f3f4dc0b54f63cf5fd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  return (
    <div className="App p-2 ">
      <Router />
    </div>
  );
}

export default App;
