import React, { createContext, useContext, useState } from 'react';


const AuthContext=createContext()
const AuthContextPro = ({children}) => {
    
    const[currentUser, setCurrentUser]=useState(
        JSON.parse(localStorage.getItem('currentUser')) || null,
    )

    const logout=()=>{
        setCurrentUser(null)
        localStorage.removeItem('currentUser')
    }

    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser,logout}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth=()=>useContext(AuthContext)

export default AuthContextPro;
