import { io } from "socket.io-client";
import { useEffect, useRef } from "react";

export const useSocket = () => {
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = io(import.meta.env.VITE_BACKEND_URL);
        return () => socketRef.current.disconnect();
    }, []);

    return socketRef.current;
};