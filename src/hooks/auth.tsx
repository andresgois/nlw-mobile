import React, { createContext, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';

const CLIENT_ID = '09753bc4f761ed2fc1b6';
const SCOPE = 'read:user';

type User = {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
}

type AuthContextData = {
    user: User | null;
    isSinginIng: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: React.ReactNode;
}

type AuthResponse = {
    token: string;
    user: User;
}

type AuthorizationResponse = {
    params: {
        code?: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

async function AuthProvider({ children }: AuthProviderProps){
    const [isSinginIng, setIsSinginIng] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    
    async function signIn(){
        const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
        const { params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
        console.log(params)
    }

    async function signOut(){
        
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user,
            isSinginIng
        }}>
            { children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };