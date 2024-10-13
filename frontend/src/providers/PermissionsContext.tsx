
import React, { useContext, createContext, useState } from "react";
import { Navigate } from "react-router-dom"

import { Spinner } from "react-bootstrap";

import useFetch from "../hooks/useFetch";
import { GetItem } from "../hooks/useLocalStorage";

const CurrentPermissionsContext = createContext<number>( -1 )

const PermissionsContextProvider = ({children }: {children: React.ReactNode}): React.ReactNode => {
    const [level, setLevel] = useState<number>(-1);
    const [response, error, isLoading] = useFetch<{
        code: number, message: string, content?: { permissionLevel: number }
    }>(`${process.env.REACT_APP_API_URL }/users/${GetItem('user-ref-id')}`, {
        method: "GET",
        mode: "cors",
        referrer: "no-referrer",
    })
    if (isLoading) return (
    <div className="page-loading">
        <Spinner />
        
    </div>
    );
    if (error) return <Navigate to="/error" state={{ error: error, action: "unresolved-server-error" }} />;
    if (response.code === 0 && response.content !== undefined) setLevel(response.content.permissionLevel);
    return (
    <CurrentPermissionsContext.Provider value={level}>
        { children }
    </CurrentPermissionsContext.Provider>
    )
}
export default PermissionsContextProvider;

export const usePermissionsContext = () => {
    const context = useContext(CurrentPermissionsContext);
    if (context === undefined) throw new Error('PermissionsContext can only be used under a PermissionsContextProvider');
    return context;
};