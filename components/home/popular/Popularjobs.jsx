import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useFetch } from "../../../hooks/useFecth";

const Popularjobs = () => {
  const router = useRouter();

  const {data, isLoading, error}= useFetch('search',{
    query:'Developer',
    num_pages:1
  });
  
  // const isLoading = false;
  // const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator 
          size={'large'} 
          colors={COLORS.primary} 
          />
        ) : error ? (
          <Text>Something went wrong !</Text>
        ) : (
          <FlatList
          data={[1,2,3,4,5]}
          renderItem={({item})=>(
            <PopularJobCard 
            item={item}
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
