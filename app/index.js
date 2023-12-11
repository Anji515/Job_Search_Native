import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const CustomHeaderLeft = () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
  const CustomHeaderRight = () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />;


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

     <Welcome />
     <Popularjobs/>
     <Nearbyjobs/>
    </SafeAreaView>
  );
};

export default Home;
