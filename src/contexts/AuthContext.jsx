import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

// This context will be used to manage the authentication state of the user
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            // Here you would typically fetch the user data using the token
            // For example:
            // fetchUserData(storedToken).then(userData => setUser(userData));
        }
    }
    , []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("token", userData.token);
        setToken(userData.token);
        navigate('/')
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
        setToken(null);
    };
    const isAuthenticated = () => {
        return !!token;
    };
    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}