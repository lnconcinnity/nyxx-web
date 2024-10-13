
import { useState, useEffect } from "react";

const useFetch = <T>(url: string, options?: RequestInit) => {
    const [data, setData] = useState<T>(null as T);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const tryFetch = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) throw new Error(`Unresolved connection; status: ${response.status}`);
                setData(await response.json());
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            };
        };
        tryFetch();
    }, [url, options]); 
    return [data, error, loading] as const;
}

export default useFetch;