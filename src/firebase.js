import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC411GZj24_YmzOexx0t_RuykhQvRe-Djw",
  authDomain: "auth-129a4.firebaseapp.com",
  projectId: "auth-129a4",
  storageBucket: "auth-129a4.appspot.com",
  messagingSenderId: "484108219467",
  appId: "1:484108219467:web:3525966bb293a4465cc9ce",
  measurementId: "G-XT6E9WYPFW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error)
    })
}