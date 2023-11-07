import * as React from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import TenderListing from "./../../components/TenderListing";
import { ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import colors from "./../../assets/Theme.js/colors";
import { ActivityIndicator } from "react-native";

export default function DetailsScreen({ navigation }) {
  const [selectedCity, setSelectedCity] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [tenderTtitle, setTenderTtitle] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [upload, setUpload] = React.useState(false);
  const [tenderDescription, setTenderDescription] = React.useState("");

  const cities = [
    { label: "Ndola", value: "ndola" },
    { label: "Kitwe", value: "kitwe" },
    { label: "Chingola", value: "chingola" },
  ];
  const placeholder = {
    label: "* Select your city...",
    value: null,
    color: "gray",
  };

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 20,
          paddingTop: 5,
        }}
      >
        Post your Tenders
      </Text>
      {/* name */}
      <TextInput
        placeholder="name"
        onChangeText={(text) => setName(text)}
        style={{
          borderBottomWidth: 0.6,
          borderColor: "black",
          borderRadius: 8,
          marginBottom: 10,
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          color: "black",
          paddingRight: 30,
        }}
      />

      {/* contact */}
      <TextInput
        placeholder="contact"
        onChangeText={(text) => setContact(text)}
        style={{
          borderBottomWidth: 0.6,
          borderColor: "black",
          borderRadius: 8,
          marginBottom: 10,
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          color: "black",
          paddingRight: 30,
        }}
      />
      {/* email */}
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        style={{
          borderBottomWidth: 0.6,
          borderColor: "black",
          borderRadius: 8,
          marginBottom: 10,
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          color: "black",
          paddingRight: 30,
        }}
      />
      {/* street */}
      <TextInput
        placeholder="address"
        onChangeText={(text) => setStreet(text)}
        style={{
          borderBottomWidth: 0.6,
          borderColor: "black",
          borderRadius: 8,
          marginBottom: 10,
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          color: "black",
          paddingRight: 30,
        }}
      />
      {/* city */}
      <View
        style={{
          borderBottomWidth: 0.6,
          borderColor: "black",
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <RNPickerSelect
          placeholder={placeholder}
          items={cities}
          onValueChange={(value) => setSelectedCity(value)}
          style={{
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,

            color: "black",
            paddingRight: 30,
          }}
          value={selectedCity}
        />
      </View>

      {/* tender Title */}
      <TextInput
        placeholder="Tender Title"
        onChangeText={(text) => setTenderTtitle(text)}
        style={{
          borderBottomWidth: 0.6,
          borderColor: "black",
          borderRadius: 8,
          marginBottom: 10,
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          color: "black",
          paddingRight: 30,
        }}
      />
      {/* TenderDiscription */}
      <TextInput
        placeholder="Description"
        multiline={true}
        onChangeText={(text) => setTenderDescription(text)}
        style={{
          borderWidth: 0.6,
          borderColor: "black",
          borderRadius: 2,
          paddingBottom: 50,
          marginVertical: 10,
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          color: "black",
          paddingRight: 30,
        }}
      />

      <TouchableOpacity
        style={{
          borderRadius: 5,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "tomato",
          flexDirection: "row",
          marginVertical: 10,
        }}
        onPress={() => setUpload(true)}
      >
        <MaterialIcons name="post-add" size={24} color="white" />
        <Text style={{ color: "white", fontWeight: "500", fontSize: 22 }}>
          Post
        </Text>
      </TouchableOpacity>

      {upload && (
        <ActivityIndicator
          size={34}
          style={{ marginVertical: 10 }}
          color={"tomato"}
        />
      )}
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    paddingVertical: 50,
  },
};
