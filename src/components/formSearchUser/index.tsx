import React, { useState } from "react";
import { View, Container, Input, TextButton } from "./styles";
import { Pressable } from "react-native";
import { User } from "../../types/userTypes";
import { searchUser } from "../../api/userAPI";

interface FormProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setError: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Form: React.FC<FormProps> = ({ setUser, setError }) => { 
  const [name, setName] = useState('');


  const handleRequestUserData = async () => {
    if (!name) return setUser(undefined);

    try {
      const user = await searchUser(name.trim());

      if (user) { 
        setError(false);
        setUser(user);
        return;
      }

      throw new Error('Usuário não encontrado');
    } catch (error) { 
      console.log("Erro ao tentar encontrar usuário", error);
      setUser(undefined)
      setError(true);
    }

  }

  return (
    <Container>
      <Input
        onChangeText={(text) => setName(text)}
        onSubmitEditing={handleRequestUserData}
        value={name}
        placeholder="Pesquisar GitHub"
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