import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // const options = {
    //     method: 'GET',
    //     url: `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a7ac729a&app_key=44e05e4ddf95a02067bc3cfb1279f934%09&results_per_page=10`,
    //     withCredentials: false,
    //     headers: {

    //     },
    //     params: { ...query },
    // };

    const apiUrl = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=a7ac729a&app_key=44e05e4ddf95a02067bc3cfb1279f934%09&results_per_page=5&what=software';

    const fetchData = async () => {
        setIsLoading(true)

        axios.get(apiUrl)
            .then(response => {
                // La respuesta de la API está en response.data
                console.log('fecheado', response.data.results);
                setData(response.data.results)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default useFetch


