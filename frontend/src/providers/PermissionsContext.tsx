
import React, { useContext, createContext, useState } from "react";

import { Spinner } from "react-bootstrap";

import useFetch from "../hooks/useFetch";
import { GetItem } from "../hooks/useLocalStorage";

const CurrentPermissionsContext = createContext<number>( 0 )

const PermissionsContextProvider = ({children }: {children: React.ReactNode}): React.ReactElement => {
    const refid = GetItem('user-ref-id') || "empty-refid";
    const [level, setLevel] = useState<number>(0);
    const [response, _, isLoading] = useFetch<{
        code: number, message: string, content?: { permissionLevel: number }
    }>(`http://localhost:3000/api/users/get-user-info/${refid}`, {
        method: "GET",
        mode: "cors",
        referrer: "no-referrer",
    })
    if (isLoading) return (
    <div className="page-loading d-grid justify-content-center align-content-center vh-100">
        <div className="d-flex justify-content-center" style={{width:"100%"}}>
            <Spinner />
        </div>
        <p> Hang on! We are doing some stuff in the background. </p>
    </div>
    );
    if (response && response.code === 0 && response.content && (response.content !== null || response.content !== undefined)) setLevel(response.content.permissionLevel);
    return (
    <CurrentPermissionsContext.Provider value={level}>
        { children }
    </CurrentPermissionsContext.Provider>
    )
}
export default PermissionsContextProvider;

export const usePermissionsContext = () => {
    const context = useContext(CurrentPermissionsContext);
    // if (!context) throw new Error('PermissionsContext can only be used under a PermissionsContextProvider'); // we kinda expect it to be null or smth
    return context;
};