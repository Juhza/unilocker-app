import { createContext, useState } from "react";

export const UserContext = createContext()


export function UserContextProvider({ children }) {
    const [user, setUser] = useState();

    function createNewUser(inputValue) {

        setUser(() => inputValue)
    }

    return (
        <UserContext.Provider value={{ createNewUser, user }}>
            {children}
        </UserContext.Provider>
    )
}