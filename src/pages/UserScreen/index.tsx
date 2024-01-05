import React, { useState } from "react";
import { Container } from "./styles";
import { useRoute } from "@react-navigation/native";
import { User } from "../../types/userTypes";

const HomeScreen = () => {
  const route = useRoute();

  if (route.params && 'user' in route.params) { 
    const user = route.params.user as User | undefined;
  }

  return (
    <Container>

    </Container>
  );
}

export default HomeScreen;