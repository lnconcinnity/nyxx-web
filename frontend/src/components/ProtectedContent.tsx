import React from "react"
import { usePermissionsContext } from "../providers/PermissionsContext"
import { Navigate } from "react-router-dom";

export interface ProtectedContentProps {
    children: React.ReactNode,
    minimumPermissionLevel: number,
}

const ProtectedContent = ({ children, minimumPermissionLevel }: ProtectedContentProps) => {
    const level = usePermissionsContext();
    if (level < minimumPermissionLevel) return <Navigate to="/error" state={{error: "Access Denied. Insufficient credentials.", action: "illegal-entry"}} />; // action: "illegal-entry" would file a log in the server in regards of this uninvited access to a secured content
    return (
        <>
        { children }
        </>
    )
}

export default ProtectedContent;