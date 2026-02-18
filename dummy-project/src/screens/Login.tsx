import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { PAGE_REGISTER_NAME } from "../route/PageNames";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.subtitle}>Login to your repsify app</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link screen={PAGE_REGISTER_NAME} params={{}}>Create Account</Link>

      </TouchableOpacity>
    </View>
  );
}

const PURPLE = "#7C3AED";
const DARK_BG = "#0F0F1A";
const CARD_BG = "#1A1A2E";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BG,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: CARD_BG,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#22223B",
    color: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: PURPLE,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: PURPLE,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgot: {
    color: PURPLE,
    textAlign: "center",
    marginTop: 10,
  },
});