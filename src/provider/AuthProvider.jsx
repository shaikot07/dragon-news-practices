import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const AuthContext = createContext(null);
const auth =getAuth(app)
const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null)
      const [loading,setLoading]= useState(true)

      // create user with email and password 
      const createUser = (email,password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
      }

      // signin  user 
      const signIn = (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
      }
      // logOut 
      const  logOut = () =>{
            setLoading(true)
            return signOut(auth)
      }

      //  one stase change and set valu in state
      useEffect(()=>{
           const unSubscribe= onAuthStateChanged(auth,currentUser =>{
                  setUser(currentUser)
                  setLoading(false)
            })
            return ()=>{
                  unSubscribe()
            }
      },[])

      const authInfo ={
            createUser,
            signIn,
            user,
            logOut,
            loading
      }
      return (
            <AuthContext.Provider value={ authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;