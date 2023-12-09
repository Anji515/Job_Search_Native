import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import axios from "axios";
// import useFetch from "../../../hooks/useFecth";


const Popularjobs = () => {
  const router = useRouter();

  const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        params: {
          query: 'React developer',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'f668e73eaemshdb4cd572d115890p1b2e4ajsn330da264f34b',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const fetchData= async()=>{
        setLoading(true);
        try {
            const response = await axios.request(options);
            console.log('Final hook',response.data);
            setData(response.data.data);
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

  console.log('Final data',data.data);

  const [selectedJob, setSelectedJob] = useState('');

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {loading ? (
          <ActivityIndicator 
          size={'large'} 
          colors={COLORS.primary} 
          />
        ) : error ? (
          <Text>Something went wrong !</Text>
        ) : (
          <FlatList
          data={data}
          renderItem={({item})=>(
            <PopularJobCard 
            item={item}
            selectedJob={selectedJob}
            handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
