import { Stack, useRouter } from "expo-router";
import { SafeAreaView} from "react-native";

import { COLORS, icons, images} from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const CustomHeaderLeft = () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
  const CustomHeaderRight = () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />;
  const [search,setSearch] =useState('')


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, padding:'15px' }}>
      <Stack.Screen
        options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
              padding:'10px'
            },
            headerLeft: CustomHeaderLeft,
            headerRight: CustomHeaderRight,
            headerTitle: "",
            // headerShown: false,
        }}
      />

     <Welcome 
     search={search}
     setSearch={setSearch}
     handleClick={()=>{
      if(search){
        router.push(`/search/${search}`)
      }
     }}
     />
     <Popularjobs/>
     <Nearbyjobs/>
    </SafeAreaView>
  );
};

export default Home;
