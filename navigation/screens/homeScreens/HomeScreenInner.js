import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import TenderListing from "../../../components/TenderListing.js";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreenInner({ navigation }) {
  const customerData = useSelector((state) => state.customer);

  const [searchText, setSearchText] = useState("");
  const [Tenders, setTenders] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchTenders();
  }, []);

  const fetchTenders = async () => {
    var formdata = new FormData();

    formdata.append("customerID", customerData.id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://www.pezabond.com/chance/fetchAllTenders.php",
        requestOptions
      );
      const data = await response.json();
      setTenders(data);
      setFilteredData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleFilterData = (text) => {
    setSearchText(text);
    const filtered = Tenders.filter(
      (item) =>
        item.owner_name.toLowerCase().includes(text.toLowerCase()) ||
        item.tender_title.toLowerCase().includes(text.toLowerCase()) ||
        item.tender_description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchTenders();
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Find Tenders</Text>
        <Text style={{ fontWeight: "400", fontSize: 14 }}>
          Welcome {customerData.name}
        </Text>
        {/* Search Area */}
        <View
          style={{
            backgroundColor: "#ededed",
            justifyContent: "center",
            marginTop: 20,
            borderRadius: 20,
            paddingVertical: 5,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="search-outline"
              size={16}
              color="gray"
              style={{ marginEnd: 10 }}
            />
            <TextInput
              placeholder="Search for tenders"
              clearButtonMode="always"
              autoCapitalize="none"
              fontSize={13}
              style={{ width: "90%" }}
              selectionColor={"tomato"}
              value={searchText}
              onChangeText={handleFilterData}
            />
          </View>
        </View>
        {/* Navigation Area */}
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            elevation: 7,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              marginVertical: 5,
              paddingVertical: 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              borderBottomWidth: 0.6,
              borderBottomColor: "#ededed",
              paddingBottom: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="list-outline" size={24} color="gray" />
              <Text style={{ color: "gray", marginStart: 20 }}>
                All My Tenders
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#ededed",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                height: 20,
                width: 20,
              }}
              onPress={() => navigation.navigate("My Tenders")}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 5,
              paddingVertical: 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="airballoon-outline"
                size={20}
                color="gray"
              />

              <Text style={{ color: "gray", marginStart: 20 }}>
                Pending Tenders
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: "#ededed",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                height: 20,
                width: 20,
              }}
              onPress={() => navigation.navigate("Pending Tenders")}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 5,
              paddingVertical: 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              borderTopWidth: 0.6,
              borderTopColor: "#ededed",
              paddingTop: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="shopping-outline"
                size={20}
                color="gray"
              />

              <Text style={{ color: "gray", marginStart: 20 }}>
                Closed Tenders
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#ededed",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                height: 20,
                width: 20,
              }}
              onPress={() => navigation.navigate("Completed Tenders")}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* List Section */}
      <View style={{ marginBottom: 275 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 20,
            paddingTop: 5,
          }}
        >
          Listed Tenders
        </Text>

        {loading ? (
          <ActivityIndicator
            size={34}
            style={{ marginVertical: 10 }}
            color={"tomato"}
          />
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.tender_id.toString()}
            horizontal={false}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Tender Data", item)}
                >
                  <TenderListing
                    id={item.id}
                    tender_title={item.tender_title}
                    charge_per_hour={item.charge_per_hour}
                    title={item.tile}
                    description={item.description}
                    charge_per_hour={item.tender_charge_per_hour}
                    status={item.status}
                    tender_created_date={item.tender_created_date}
                    owner_name={item.name}
                    owner_contact={item.contact}
                    owner_email={item.email}
                    owner_address={item.address}
                    owner_city={item.owner_city}
                    proffession={item.prof_name}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
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
