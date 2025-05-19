// context-i yaratmaliyiq ( createContext ) )
// provide etmeliyik
// context-i isletmeliyik hook!  ( useContext )

import { createContext, useEffect, useState } from "react";
import { getUserAuth } from "../api/auth";

// username, email, token
const initialValues = { username: '', email: '', token: '' }
export const AuthContext = createContext(initialValues);


const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialValues)

    useEffect(() => {
        getUserAuth().then((_data) => {
            setAuth(_data)
        })
    }, [])

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
