import { useEffect, useState } from "react";
import { requestOptions } from "../helpers/services/requestOptions";

const localCache = {};

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();        
     }, [url]);
    

     const setLoadingState = () => {
        setState({
            data: [],
            isLoading: true,
            hasError: false,
            error: null
        })
     }
    
     const getFetch = async() => {
        if (localCache[url]){
            console.log('Usando cache');
            setState({
                data: localCache[url].response,
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState();
        const resp = await fetch(url, requestOptions);

        //SLEEP
        // await new Promise(resolve => setTimeout(resolve, 500));

        if (!resp.ok) {
            setState({
                data: [],
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return; 
        }

        const data = await resp.json();

        setState({
            data: data.response,
            isLoading: false,
            hasError: false,
            error: null
        });

        localCache[url] = data;
    }

    return {
        fetch: getFetch,
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}