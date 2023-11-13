import {
  ImageBackgroundComponent,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import colors from "./../../../assets/Theme.js/colors";
import { useSelector } from "react-redux";
import TenderListing from "../../../components/TenderListing";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

const CompletedTenders = ({ navigation }) => {
  const customerData = useSelector((state) => state.customer);
  const [myTenders, setMyTenders] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchMyTenders();
  }, []);
  const fetchMyTenders = async () => {
    var formdata = new FormData();

    formdata.append("customerID", customerData.id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    // Fetch data from the API
    fetch(
      "https://www.pezabond.com/chance/fetchCompletedTenders.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setMyTenders(result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>
          Here are your closed Tenders
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 14 }}>
          {customerData.name}
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator
          size={34}
          style={{ marginVertical: 10 }}
          color={"tomato"}
        />
      ) : (
        <FlatList
          data={myTenders}
          keyExtractor={(item) => item.id}
          horizontal={false}
          renderItem={({ item }) => (
            <View
              style={{
                borderWidth: 0.4,
                marginVertical: 10,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <AntDesign name="calendar" size={16} color={colors.primary} />
                  <Text style={{ marginStart: 5, alignItems: "center" }}>
                    {item.created_date}
                  </Text>
                </View>
                {item.status == 1 ? (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginEnd: 4 }}>Completed</Text>
                    <Ionicons
                      name="checkmark-done-circle"
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                ) : (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginEnd: 4 }}>Live</Text>
                    <MaterialIcons
                      name="pending"
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                )}
              </View>
              <Text
                style={{
                  marginVertical: 10,
                  borderTopColor: colors.lightgray,
                  borderTopWidth: 0.5,
                  paddingTop: 10,
                }}
              >
                {item.description}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CompletedTenders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
});
