import React, { createContext, useContext, useState } from 'react';



const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const[user,setUser]=useState({name:'홍길동'})

    const login=(userInfo)=>{
        setUser(userInfo)
    }
    const logout=()=>{
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> {
    return useContext(AuthContext)
}



