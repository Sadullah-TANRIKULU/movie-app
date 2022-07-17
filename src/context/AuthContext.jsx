import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({});

    const googleLogIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((response)=> {
          console.log(response);
        })
        .catch((error)=> {
          console.log(error);
        })
    };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    

    return (
        <AuthContext.Provider value={{googleLogIn, logOut, user}} >
            {children}
        </AuthContext.Provider>
    )

}



export const UserAuth = () => {
    return useContext(AuthContext);
}