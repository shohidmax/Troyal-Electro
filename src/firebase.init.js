import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const q = process.env;
const firebaseConfig = {

  apiKey: q.REACT_APP_apiKey,
  authDomain: q.REACT_APP_authDomain,
  projectId: q.REACT_APP_projectId,
  storageBucket: q.REACT_APP_storageBucket,
  messagingSenderId: q.REACT_APP_messagingSenderId,
  appId: q.REACT_APP_appId

};
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
export default auth;