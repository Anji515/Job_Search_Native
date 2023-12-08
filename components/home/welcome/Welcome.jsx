import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles from "./welcome.style";
import { SIZES , icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["Full-time", "Part-time", "Contract"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobTypes, setActiveJobTypes] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            // value=""
            onChange={() => {}}
            placeholder="What are you looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMethod="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobTypes, item)}
              onPress={() => {
                setActiveJobTypes(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobTypes, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;

{
  /* <FlatList
data={jobTypes}
renderItem={(item)=>(
  <TouchableOpacity
  style={styles.tab(activeJobTypes,item)}
  onPress={()=>{
    setActiveJobTypes(item);
    router.push(`/search/${item}`);
  }}
  >
  <Text>{item}</Text>
  </TouchableOpacity>
  )}
/> */
}
