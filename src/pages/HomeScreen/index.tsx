import React, { useState } from "react";
import Form from "../../components/formSearchUser/Form";
import { Container } from "./styles";
import CardUser from "../../components/cardUser";
import { User } from "../../types/userTypes";
import { Text } from "react-native";

const HomeScreen = () => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>();

  return (
    <Container>
      <Form setUser={setUser} setError={setError}/>

      {user &&
        <CardUser user={user} />
      }

      {error && 
        <Text>{error}</Text>
      }

    </Container>
  );
}

export default HomeScreen;