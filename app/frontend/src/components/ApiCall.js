import { useEffect, useState } from "react";

const ApiCall = (requestUrl, method, body = null)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const result =await fetch(requestUrl ,{
                    method: method}
                    ).then((res) => res.json());
                setData(result);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }

        };
        
        fetchData();
    }, [requestUrl,method, body]);
    return{data, loading, error};
}

export default ApiCall;