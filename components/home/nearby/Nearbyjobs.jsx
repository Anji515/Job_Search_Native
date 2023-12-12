// Nearbyjobs.js
import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS } from "../../../constants";
import useFetch from '../../../hooks/useFecth'

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, loading, error, refetch } = useFetch("search", {
    query: "React developer",
    page: "1",
    num_pages: "1",
  });

  useEffect(() => {
    refetch();
  }, []);

  // console.log("Nearbyjobs", data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {loading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard 
            key={`nearby-job-${job?.job_id}`} 
            job={job} 
            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;