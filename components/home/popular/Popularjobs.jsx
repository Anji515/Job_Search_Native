import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFecth";


const Popularjobs = () => {
  const router = useRouter();

  const { data, loading, error, refetch } = useFetch("search", {
    query: "React developer",
    page: "1",
    num_pages: "1",
  });

  useEffect(() => {
    refetch();
  }, []);

  console.log('Popular jobs',data.data);

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
