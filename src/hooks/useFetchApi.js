import { useEffect, useState } from "react";
import { getApi } from '../helpers/getApi';

export const useFetchApi = (leagueID) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getApi( leagueID );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();        
     }, []);
    
    



    return {
        images,
        isLoading
    }
}