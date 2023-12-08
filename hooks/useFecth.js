import { useEffect, useState } from "react";

export const useFetch=async(endpoint,query)=>{

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState('');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'f668e73eaemshdb4cd572d115890p1b2e4ajsn330da264f34b',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params : { ...query }
      };

      const fetchData= async()=>{
        setLoading(true);
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError(error);
            alert('There is an error')
        } finally{
            setLoading(false);
        }
      }

      useEffect(()=>{
        fetchData();
      },[])

      const refetch=()=>{
        setLoading(true)
        fetchData()
      }      
    
      return {data,loading,error,refetch}
}