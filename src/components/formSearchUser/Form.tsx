import React, { useState } from "react";
import { Pressable, TextInput, View, StyleSheet, Text } from "react-native";
import searchUserData from "../../api/axios";
import { primary_color, secondary_color, tertiary_color } from "../../../assets/styles/styles";
import { Button, Container, Input, TextButton } from "./styles";

const Form = () => { 
  const [name, setName] = useState('');

  const handleRequestUserData = async () => {
    const user = await searchUserData(name);
    console.log(user);
  }

  return (
    <Container>
      <Input
        onChangeText={(text) => setName(text)}
        onSubmitEditing={handleRequestUserData}
        value={name}
        placeholder="Pesquisar"
      />

      <Pressable onPress={handleRequestUserData}>
        <Button>
          <TextButton>Buscar</TextButton>
        </Button>
      </Pressable>
    </Container>
  )
}

export default Form;