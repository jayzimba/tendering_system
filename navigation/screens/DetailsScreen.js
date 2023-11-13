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
import { useSelector } from "react-redux";
import { Alert } from "react-native";

export default function DetailsScreen({ navigation }) {
  const customerData = useSelector((state) => state.customer);
  const [customerID, setCustomerID] = React.useState(customerData.id);
  const [selectedCity, setSelectedCity] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [charge_per_hour, setCharge_per_hour] = React.useState(0);
  const [tenderTitle, setTenderTitle] = React.useState("");
  const [address, setStreet] = React.useState(
    customerData.address + ", " + customerData.city
  );
  const [name, setName] = React.useState(customerData.name);
  const [contact, setContact] = React.useState(customerData.contact);
  const [email, setEmail] = React.useState(customerData.email);
  const [loading, setLoading] = React.useState(false);
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

  const uploadTender = async () => {
    setLoading(true);

    var customerIDPassed = customerID;
    var title = tenderTitle;
    var description = tenderDescription;
    var chargePerHour = charge_per_hour;

    if (title.length == 0 || description.length == 0) {
      Alert.alert("Required Field Is Missing!");
      this.setState({ loading: false });
    } else {
      var formdata = new FormData();
      formdata.append("customerIDPassed", customerIDPassed);
      formdata.append("title", title);
      formdata.append("description", description);
      formdata.append("chargePerHour", chargePerHour);

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("https://www.pezabond.com/chance/uploadTender.php", requestOptions)
        .then((Response) => Response.json())
        .then((Response) => {
          if (Response.success == true) {
            Alert.alert(
              "TENDER UPLOAD",
              "your tender has been listed successfully"
            );
          } else {
            Alert.alert(
              "TENDER UPLOAD FAILED",
              "We failed to upload your tender please try again"
            );
          }
        })
        .catch((error) => {
          console.error("ERROR:" + error);
        })
        .finally(() => {
          setTenderTitle("");
          setTenderDescription("");
          setCharge_per_hour("");
          setLoading(false);
        });
    }
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
        value={name}
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
        value={contact}
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
        value={email}
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
        value={address}
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

      {/* tender Title */}
      <TextInput
        placeholder="Tender Title"
        value={tenderTitle}
        onChangeText={(text) => setTenderTitle(text)}
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
        value={tenderDescription}
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

      {/* charge per hour */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>ZMW</Text>
        <TextInput
          placeholder="charge per hours"
          value={charge_per_hour}
          keyboardType="number-pad"
          onChangeText={(text) => setCharge_per_hour(text)}
          style={{
            borderBottomWidth: 0.6,
            borderColor: "black",
            borderRadius: 8,
            marginBottom: 10,
            fontSize: 18,
            paddingHorizontal: 10,
            paddingVertical: 8,
            color: "black",
            paddingRight: 30,
          }}
        />
      </View>

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
        onPress={() => uploadTender()}
      >
        <MaterialIcons name="post-add" size={24} color="white" />
        <Text style={{ color: "white", fontWeight: "500", fontSize: 22 }}>
          Post
        </Text>
      </TouchableOpacity>

      {loading && (
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
