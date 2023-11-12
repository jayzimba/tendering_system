import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenInner from "./homeScreens/HomeScreenInner";
import MyTenders from "./homeScreens/MyTenders";
import PendingTenders from "./homeScreens/PendingTenders";
import CompletedTenders from "./homeScreens/CompletedTenders";
import TenderData from "./homeScreens/TenderData";

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeScreenInner}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="My Tenders"
        component={MyTenders}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Pending Tenders"
        component={PendingTenders}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Completed Tenders"
        component={CompletedTenders}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Tender Data"
        component={TenderData}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
