import { Linking, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/themed";


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitButtonPress = () => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    navigation.navigate("Books");
   };

  return (
    <View style={styles.containerStyle}>
      <Ionicons name="ios-book-outline" size={100} style={styles.icon} />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        inputContainerStyle={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry={false}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        inputContainerStyle={styles.input}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <Text style={styles.text} onPress={()=>{
        console.log("Forgot Password")
      }}> Forgot my password </Text>

      <Button
        type="solid"
        radius={999}
        buttonStyle={styles.submitButton}
        onPress={() => onSubmitButtonPress()}
      >
        Sign In
      </Button>

      <Text style={styles.registerText} onPress={()=>{
        navigation.navigate("Register")
      }}> Don't have an account? </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#94b1c9",
  },
  input: {
    marginHorizontal: 16,
  },
  icon: {
    color: "#fff",
    marginBottom: 64,
  },
  submitButton: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: "#183b58",
    paddingHorizontal: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    color:"#fff",
    marginTop:-16,
    marginBottom:16,
  },
  registerText:{
    color:"#fff",
    bottom:32,
    position:"absolute",
  },
});
