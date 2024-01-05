import React from "react";
import { View, Text, StyleSheet, Button, TextInput, Pressable } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/formSearchUser/Form";

const HomeScreen = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <Form />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'red'
  }
});

export default HomeScreen;