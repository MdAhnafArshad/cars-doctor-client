import { createContext,useEffect, useState } from "react";
import app from "../Firebase/firebase.conf";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create everything....
    const createUser = (email, password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe  = onAuthStateChanged(auth, (createUser) => {
            setUser(createUser)
            console.log(createUser);
            setLoading(false);
        })
        return ()=>{
            return unSubscribe;
        }
    },[])
    
    const authInfo ={
        user,
        loading,
        createUser,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;