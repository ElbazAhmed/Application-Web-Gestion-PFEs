import React ,{useState,createContext} from "react";

export const Usercontext=createContext({});

export function UserContextProvide({children}){
    const [userInfo,setUserInfo]=useState({})
    return (
        <Usercontext.Provider value={{userInfo,setUserInfo}}>
            {children}
        </Usercontext.Provider>
    );
}