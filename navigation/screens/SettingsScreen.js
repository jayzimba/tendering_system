import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  Entypo,
  Octicons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function SettingsScreen({ navigation }) {
  const customerData = useSelector((state) => state.customer);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#ededed",
              width: "100%",
              marginHorizontal: 50,
              borderRadius: 10,
              elevation: 7,
              paddingHorizontal: 10,
              paddingVertical: 30,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 50,
                borderWidth: 0.4,
                padding: 10,
              }}
            >
              <Ionicons name="person" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}> Name: </Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                {customerData.name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 50,
                borderWidth: 0.4,
                padding: 10,
              }}
            >
              <MaterialIcons name="email" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}> Email: </Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                {customerData.email}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 50,
                borderWidth: 0.4,
                padding: 10,
              }}
            >
              <Entypo name="phone" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}> Phone: </Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                {customerData.contact}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 50,
                borderWidth: 0.4,
                padding: 10,
              }}
            >
              <AntDesign name="home" size={24} color="black" />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Address:</Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                {customerData.address} {customerData.city}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    // justifyContent: "center",
    padding: 20,
  },
  container1: {
    // justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
