import { StyleSheet, Text, View } from "react-native";
import React, {useState, useEffect} from "react";
import TextInput from "../components/TextInput";
import { Button } from "@rneui/themed";

const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword]=useState("");
    
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        inputContainerStyle={styles.input}
        autoCorrect={false}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Last Name"
        inputContainerStyle={styles.input}
        autoCorrect={false}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Email"
        inputContainerStyle={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Username"
        inputContainerStyle={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Password"
        inputContainerStyle={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        inputContainerStyle={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry
      />
      <Button type="solid" radius={999} buttonStyle={styles.submitButton}>
       Register
      </Button>

      <Text
        style={styles.loginText}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        {" "}
        Already have an account?{" "}
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#94b1c9",
  },
  submitButton: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: "#183b58",
    paddingHorizontal: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginHorizontal: 16,
  },

  loginText: {
    color: "#fff",
    bottom: 32,
    position: "absolute",
  },
});
