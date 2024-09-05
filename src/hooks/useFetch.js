import { useEffect, useState } from "react";

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

     const requestOptions = {
        method: 'GET',
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": '34082beab83494bf37f0e7658605122b'
        },
        redirect: 'follow'
    };
    
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

        console.log('data: ', data);

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}