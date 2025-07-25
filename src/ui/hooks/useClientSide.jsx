import React, { useState, useEffect } from "react";

/**
 * Use this hook to render components only on the client side.
 * This is useful for components that rely on browser-specific APIs or
 * need to avoid server-side rendering.
 * 
 * @returns {boolean} - Returns true when the application is hydrated on the client side.
 */
const useClientSide = () => {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    return isClient;
}

export default useClientSide;
