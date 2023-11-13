import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { useDispatch } from "react-redux";
import { setCustomer } from "../../../Redux/customerSlice";
import { connect } from "react-redux";
import colors from "../../../assets/Theme.js/colors";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      customer: [],
    };
  }

  // Inside your class component
  setCustomerData = (customerData) => {
    const { dispatch } = this.props;
    // Dispatch the action to set 'customer' data in Redux
    dispatch(setCustomer(customerData));
  };

  HandleLogin = () => {
    this.setState({ loading: true });
    var username = this.state.username;
    var password = this.state.password;

    if (username.length == 0 || password.length == 0) {
      alert("Required Field Is Missing!");
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });

      var formdata = new FormData();
      formdata.append("username", username);
      formdata.append("password", password);

      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("https://www.pezabond.com/chance/login.php", requestOptions)
        .then((Response) => Response.json())
        .then((Response) => {
          if (Response.success) {
            this.props.navigation.navigate("MainContainer");
            this.setState({ customer: Response.customerDetails });
            this.setCustomerData(Response.customerDetails);
          } else if (!Response.success) {
            alert("Login Failed - Try Again");
          }
          console.log(this.state.customer);
        })
        .catch((error) => {
          console.error("ERROR:" + error);
        })
        .finally(() =>
          this.setState({
            username: "",
            password: "",
            loading: false,
          })
        );
    }
  };

  render() {
    const { navigation } = this.props;
    const { username, password, loading } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.bigText}>Chance Tendering App</Text>
          <Text style={styles.smallText}>Find Tenders Easily Today</Text>
        </View>

        <View style={{ marginTop: 130, alignItems: "center" }}>
          <Text
            style={[
              styles.bigText,
              { fontSize: 25, marginBottom: 40, color: colors.gray },
            ]}
          >
            Login
          </Text>

          <View
            style={{
              width: "90%",
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              marginBottom: 40,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="person" size={24} color="black" />
            <TextInput
              placeholder="Enter your username"
              selectionColor={colors.primary}
              autoCapitalize="none"
              style={{ marginStart: 10 }}
              onChangeText={(username) => this.setState({ username })}
            />
          </View>

          <View
            style={{
              width: "90%",
              borderWidth: 0.5,
              padding: 10,
              borderRadius: 5,
              marginBottom: 40,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Password"
              selectionColor={colors.primary}
              style={{ marginStart: 10 }}
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 10,
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              marginBottom: 30,
            }}
            onPress={this.HandleLogin}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
              }}
            >
              Login in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={{ marginBottom: 30 }}
          >
            <Text>Register Here</Text>
          </TouchableOpacity>

          {this.state.loading ? (
            <ActivityIndicator color={colors.primary} size="large" />
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

export default connect()(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  bigText: {
    fontWeight: "bold",
    fontSize: 33,
    color: colors.primary,
  },
  smallText: {
    color: colors.gray,
  },
});
