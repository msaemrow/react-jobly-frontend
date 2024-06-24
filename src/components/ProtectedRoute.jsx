import React, { Children, useContext } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import UserContext from "./UserContext";

const ProtectedRoute = ({ children}) => {
    const { currentUser } = useContext(UserContext);

    if(!currentUser) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute;