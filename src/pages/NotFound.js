import { Navigate } from "react-router-dom";

export function NotFound () {
    return <Navigate to= "/" />
};

// Navigate component is used to redirect to home page once an entered URL is not available 