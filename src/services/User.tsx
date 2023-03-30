import React, {
    useState,
    useEffect,
    createContext,
    PropsWithChildren,
    FC,
    Dispatch
} from "react";

import { WelcomePage } from "../pages";

interface CurrentUser {
    isAuth: boolean;
    role: "student" | "teacher";
}

//@ts-ignore
const UserContext = createContext<[CurrentUser, Dispatch<CurrentUser>]>();

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUser>({
        isAuth: false,
        role: "student"
    });

    return (
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </UserContext.Provider>
    );
};

export default {
    Context: UserContext,
    Provider: UserProvider
};
