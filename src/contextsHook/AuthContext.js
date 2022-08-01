import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    //state
    const [isAuthenticated, setAuthenticated] = useState(true)

    const toggleAuth =()=>{
        setAuthenticated(!isAuthenticated)
    }

    //useEfferct
    useEffect(() => {
        alert(isAuthenticated ? "Đăng nhập thành công" : "Hãy đăng nhập để tiếp tục thao tác!")
    }, [isAuthenticated])
    

    const AuthContextData = {
        isAuthenticated,
        toggleAuth
    };
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider


