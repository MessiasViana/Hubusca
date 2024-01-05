import React, { useState } from "react";
import searchUserData from "../../api/axios";
import { View, Container, Input, TextButton } from "./styles";
import { Pressable } from "react-native";
import { User } from "../../types/userTypes";

interface FormProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Form: React.FC<FormProps> = ({ setUser, setError }) => { 
  const [name, setName] = useState('');


  const handleRequestUserData = async () => {
    if (!name) return setUser(undefined);

    try {
      const user = await searchUserData(name.trim());

      if (user) { 
        setError(undefined);
        setUser(user);
        return 
      }

      throw new Error('Usuário não encontrado');
    } catch (error) { 
      console.log("Erro ao tentar pegar usuário", error);
      setUser(undefined)
      setError('Usuário não encontrado. Verifique o nome e tente novamente.');
    }

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
        <View>
          <TextButton>Buscar</TextButton>
        </View>
      </Pressable>
    </Container>
  )
}

export default Form;