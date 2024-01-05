import React, { useState } from "react";
import Form from "../../components/formSearchUser";
import { Container, ErrorArea, ErrorText } from "./styles";
import CardUser from "../../components/cardUser";
import { User } from "../../types/userTypes";

const HomeScreen = () => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<boolean>();

  return (
    <Container>
      <Form setUser={setUser} setError={setError}/>

      {user &&
        <CardUser user={user} />
      }

      {!user && 
        <ErrorArea>
          <ErrorText>Digite o nome do Github.</ErrorText>
        </ErrorArea>
      }

      {error && 
        <ErrorArea>
          <ErrorText>Usuário não encontrado.</ErrorText>
          <ErrorText>Verifique o nome e tente novamente!</ErrorText>
        </ErrorArea>
      }

    </Container>
  );
}

export default HomeScreen;