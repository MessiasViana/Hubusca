import React, { useContext, useState } from "react";
import { View, Container, Input, TextButton, Button } from "./styles";
import { User } from "../../types/userTypes";
import { searchUser } from "../../api/userAPI";
import { RecentUsersContext } from "../../contexts/recentUsers";

interface FormProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setError: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const Form: React.FC<FormProps> = ({ setUser, setError }) => { 
  const recentUsers = useContext(RecentUsersContext);
  const [name, setName] = useState('');
  
  const handleRequestUserData = async () => {
    if (!name) return setUser(undefined);

    try {
      const user = await searchUser(name.trim());

      if (user) { 
        setError(false);
        setUser(user);

        let isUserPresent = recentUsers?.recentUsers.some((existingUser) => existingUser.id === user.id);

        if (!isUserPresent) {
          recentUsers?.setRecentUsers((prevUsers) => [...prevUsers, user]);
        }

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

      <Button onPress={handleRequestUserData}>
        <View>
          <TextButton>Buscar</TextButton>
        </View>
      </Button>
    </Container>
  )
}

export default Form;