import React from "react"
import { usePermissionsContext } from "../providers/PermissionsContext"
import { Navigate } from "react-router-dom";

export interface ProtectedContentProps {
    children: React.ReactNode,
    criteria: number | {min: number, max: number},
    hideOnly?: boolean,
}

const ProtectedContent = ({ children, criteria, hideOnly }: ProtectedContentProps) => {
    const getWrapper = () => {
        return hideOnly === true ? <></> : <Navigate to="/error" state={{error: "Access Denied. Insufficient credentials.", action: "illegal-entry"}} />;
    }
    const level = usePermissionsContext();
    if (((typeof criteria === "object" && criteria.constructor === Object) && (level < criteria.min || level > criteria.max)) || (typeof criteria === "number" && level !== criteria)) return getWrapper();
    return (
        <>
        { children }
        </>
    )
}

export default ProtectedContent;