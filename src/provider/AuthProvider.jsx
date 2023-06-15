import { createContext } from "react";
import app from "../Firebase/firebase.conf";
import { getAuth } from "firebase/auth";
import { useState } from "react";



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);


    const authInfo ={
        user,
        loading,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;