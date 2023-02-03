import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyArlISOvNlwmd6qaD9UysqzBTbv78hZK1Y",
  authDomain: "vuex-auth-d3841.firebaseapp.com",
  projectId: "vuex-auth-d3841",
  storageBucket: "vuex-auth-d3841.appspot.com",
  messagingSenderId: "296934957558",
  appId: "1:296934957558:web:9e21dcf147742febeba7d7",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
