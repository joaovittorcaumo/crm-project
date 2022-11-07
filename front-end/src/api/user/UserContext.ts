import React from "react";
import { createContext } from "react";


export type User = {
    name: string;
    email: string;
    role: string;
    password: string;
    sector: string;
}

type UserContextType = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

const iUserContextState = {
   user: null,
   setUser: () => {}
}

export const UserContext = createContext<UserContextType>(iUserContextState);

export default UserContext;