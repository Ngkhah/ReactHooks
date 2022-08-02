import React, { createContext, useEffect, useReducer, useState } from 'react'
import { AuthReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    //state
    //const [isAuthenticated, setAuthenticated] = useState(true)

    // const toggleAuth =()=>{
    //     setAuthenticated(!isAuthenticated)
    // }
    const [isAuthenticated, dispatch] = useReducer(AuthReducer,false)
    //useEfferct
    useEffect(() => {
        alert(isAuthenticated ? "Đăng nhập thành công" : "Hãy đăng nhập để tiếp tục thao tác!")
    }, [isAuthenticated])
    

    const AuthContextData = {
        isAuthenticated,
        //toggleAuth
        dispatch
    };
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider


