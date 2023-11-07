import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const TenderListing = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          id: props.id,
          title: props.tile,
          description: props.description,
          charge_per_hour: props.charge_per_hour,
          status: props.status,
          created_date: props.created_date,
          owner_name: props.name,
          owner_contact: props.contact,
          owner_email: props.email,
          owner_address: props.address,
          owner_citys: props.city,
          proffession: props.prof_name,
        })
      }
      style={{ borderWidth: 0.5, borderColor: "#ededed", marginBottom: 30 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={require("../assets/carpenter.jpg")}
            resizeMethod="resize"
            imageStyle={{ borderRadius: 5 }}
            style={{
              width: 100,
              height: 100,
              marginEnd: 20,
            }}
          />
          <View>
            <Text style={{ fontWeight: "500" }}>{props.title}</Text>
            <Text style={{ color: "gray" }}>22, Kalewa Rd</Text>
            <Text style={{ color: "gray" }}>Northrise</Text>
            <Text style={{ color: "gray" }}>Ndola, CopperBelt</Text>
            <Text style={{ color: "gray" }}>
              per hour ZMW {props.charge_per_hour}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#ededed",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            height: 30,
            width: 30,
          }}
        >
          <MaterialIcons name="keyboard-arrow-right" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "tomato", padding: 2 }}>
        <Text style={{ color: "white", fontSize: 12 }}>
          Carpetry and enterior designing
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TenderListing;

const styles = StyleSheet.create({});
