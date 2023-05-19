import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound () {
    const navigate = useNavigate()

    useEffect(() => {
        
        setTimeout(() =>{
            navigate ("/")
        }, 1000)

    }, []);
  
    return (
        <>
        <h1>NotFound</h1>
        
        </>
    )
};

// Navigate component is used to redirect to home page once an entered URL is not available 
// Navigate properties are only 3.... to, replace , state