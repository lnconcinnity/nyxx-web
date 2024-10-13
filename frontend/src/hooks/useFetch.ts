
import { useState, useEffect, useMemo } from "react";

const useFetch = <T>(url: string, options?: RequestInit, interval: number=10000) => {
    const [data, setData] = useState<T>(null as T);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        let isMounted = true;
        const tryFetch = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(`Unresolved connection; status: ${response.status}`);
                const result = await response.json();
                if (isMounted) setData(result);
            } catch (err) {
                if (isMounted) setError(err as Error);
            } finally {
                if (isMounted) setLoading(false);
            }
        };
        tryFetch();
        const intervalId = setInterval(tryFetch, interval);
        return () => {
            clearInterval(intervalId);
            isMounted = false;
        };
    }, []); 
    return [data, error, loading] as const;
}

export default useFetch;