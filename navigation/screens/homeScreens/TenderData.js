import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import colors from "../../../assets/Theme.js/colors";
import { AntDesign } from "@expo/vector-icons";
const TenderData = ({ navigation }) => {
  // Get the route object using useRoute hook
  const route = useRoute();

  // Access the parameters passed through navigation
  const item = route.params;
  console.log(item);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 22,
          borderBottomColor: colors.primary,
          borderBottomWidth: 0.5,
          paddingBottom: 5,
        }}
      >
        {item.tender_title}
      </Text>

      <Text style={{ marginTop: 10, color: "tomato", fontWeight: "bold" }}>
        Description
      </Text>

      <Text style={{ color: colors.primary, fontSize: 16, marginVertical: 20 }}>
        {item.tender_description}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 0.5,
          padding: 5,
          borderColor: "tomato",
        }}
      >
        <AntDesign name="calendar" size={18} color="black" />
        <Text style={{ marginStart: 5 }}>{item.tender_created_date}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Tender Owner: </Text>
        <Text> {item.owner_name} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Proffesion: </Text>
        <Text> {item.owner_profession} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Owner Email: </Text>
        <Text> {item.owner_email} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Owner Contact: </Text>
        <Text> {item.owner_contact} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Owner Address: </Text>
        <Text>
          {" "}
          {item.owner_address}, {item.owner_city}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 5,
          borderWidth: 3,

          padding: 10,
          borderRadius: 7,
          backgroundColor: "tomato",
          borderColor: "tomato",
          elevation: 7,
          justifyContent: "center",
        }}
        onPress={() =>
          Alert.alert(
            "WATCHING TENDER",
            "the tender has been added to your order pending list."
          )
        }
      >
        <Text style={{ fontSize: 22, fontWeight: "500", color: colors.white }}>
          Take Tender
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TenderData;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
});
