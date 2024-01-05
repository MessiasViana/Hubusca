import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { Avatar, Container, Content, Location, Login, Name } from './styles';
import { useNavigation } from '@react-navigation/native';
import { User } from '../../types/userTypes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface CardUserProps {
  user: User;
}

const CardUser: React.FC<CardUserProps> = ({ user }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleImageClick = () => {
    navigation.navigate('UserScreen', { user });
  };

  const { avatar_url, name, login, location } = user;

  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={handleImageClick}>
          <Avatar
            accessibilityLabel="Imagem do Github do usuário"
            source={{uri: avatar_url}}
          />
        </TouchableOpacity>

        <Name
          accessibilityLabel="Nome">
          {name}
        </Name>

        <Login 
          accessibilityLabel="Login">
          {login}
        </Login>

        <Location
          accessibilityLabel="Localização">
          {location}
        </Location>
      </Content>
    </Container>
  );
};

export default CardUser;