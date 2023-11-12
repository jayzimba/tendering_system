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
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const TenderListing = (props) => {
  const navigation = useNavigation();

  return (
    <View
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
            source={require("../assets/images/tender.jpg")}
            resizeMethod="resize"
            imageStyle={{ borderRadius: 5 }}
            style={{
              width: 100,
              height: 100,
              marginEnd: 20,
            }}
          />
          <View>
            <Text style={{ fontWeight: "500" }}>{props.tender_title}</Text>
            <Text style={{ color: "gray" }}>{props.owner_city}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="calendar" size={14} color="black" />
              <Text style={{ color: "gray", marginStart: 5 }}>
                {props.tender_created_date}
              </Text>
            </View>

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
    </View>
  );
};

export default TenderListing;

const styles = StyleSheet.create({});
