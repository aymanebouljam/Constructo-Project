import { useState, createContext } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [user, setUser] = useState(userInfo)

    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        localStorage.removeItem('userInfo')
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}