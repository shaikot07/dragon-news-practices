import { createContext } from "react";
import app from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"

export const AuthContext = createContext(null);
const auth =getAuth(app)
const AuthProvider = ({children}) => {


      // create user with email and password 
      const createUser = (email,password) =>{
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // signin  user 
      const signIn = (email,password) =>{
            return signInWithEmailAndPassword(auth, email, password)
      }


      const authInfo ={
            createUser,
            signIn
      }
      return (
            <AuthContext.Provider value={ authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;