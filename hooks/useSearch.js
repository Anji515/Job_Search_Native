import { useEffect, useState } from 'react';
import axios from 'axios';

const useSearch = (searchParams) => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([]);

        try {
            const options = {
                method: 'GET',
                url: 'https://jsearch.p.rapidapi.com/search',
                headers: {
                    'X-RapidAPI-Key': 'b3ccf321cbmsh2fbd2a82fc8da60p178c78jsn87ec501f4ce6',
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                },
                params: {
                    query: searchParams.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1);
            handleSearch();
        } else if (direction === 'right') {
            setPage(page + 1);
            handleSearch();
        }
    };

    useEffect(() => {
        handleSearch();
    }, [searchParams.id, page]);

    return {
        searchResult,
        searchLoader,
        searchError,
        page,
        handlePagination,
    };
};

export default useSearch;
