import { useEffect, useState } from "react";
export default function useIsOnline() {
    const [online, setonline] = useState(true);
    useEffect(() => {
        const handleOnline = () => setonline(true);
        const handleOffline = () => setonline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, [])
    return {
        isOnline: online,

    }
}

export const hedging = () => {

}