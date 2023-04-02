import { useEffect,useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {

    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(false);



    useEffect(() => {
                const apiBuild = () => {
            setLoading(true)
        makeRequest.get(url).then(
            (response) => {
                setData(response.data.data)
                }
        )
        setLoading(false)
    }
    apiBuild()
        }, [url]);  
 
    return{data,loading}
}

export default useFetch