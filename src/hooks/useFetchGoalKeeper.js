import { useEffect, useState } from "react";

const localCache = {};

export const useFetchGoalKeeper = (url) => {

    const [state, setState] = useState({
        data: [{paging: {current: 0, total: 5}}],
        response: [],
        isLoading: true,
        hasError: false,
        error: null
    });

    let newUrl = url;
    const actualPage = state.data.paging.current;
    const totalPages = state.data.paging.total;

    useEffect(() => {
        for (let x = actualPage + 1; x <= totalPages; x++) {
            newUrl = newUrl.split('page')[0] + `page=${x}`;
            getFetch();
        }
     }, [newUrl]);
    

     const setLoadingState = () => {
        setState({
            data: [],
            response: [],
            isLoading: true,
            hasError: false,
            error: null
        })
     }

     const requestOptions = {
        method: 'GET',
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": import.meta.env.VITE_FOOTBALL_API_KEY
        },
        redirect: 'follow'
    };
    
     const getFetch = async() => {
        if (localCache[newUrl]){
            console.log('Usando cache');
            setState({
                data: localCache[newUrl],
                response:  [...state.response, localCache[newUrl].response],
                isLoading: false,
                hasError: false,
                error: null
            })
            return;
        }

        setLoadingState();
        const resp = await fetch(newUrl, requestOptions);

        console.log('resp: ', resp)
        //SLEEP
        // await new Promise(resolve => setTimeout(resolve, 500));

        if (!resp.ok) {
            setState({
                data: [],
                response: [],
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            console.log('ERROR data: ', resp.status)
            return; 
        }

        let data = await resp.json();

        setState({
            data: data,
            response:  [...state.response, data.response],
            isLoading: false,
            hasError: false,
            error: null
        });

        localCache[newUrl] = data;

        console.log('data: ', data);
    }

    return {
        data: state.data,
        response: state.response,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}