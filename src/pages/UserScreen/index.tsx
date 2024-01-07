import React from 'react';
import {
	Container,
	ContainerData,
	InformationContainer,
	Label,
	RepositoriesContainer,
	Scroll,
	TitleInformations,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { User } from '../../types/userTypes';
import CardUser from '../../components/cardUser';
import { View } from 'react-native';
import Repositories from '../../components/repositories';

const HomeScreen = () => {
	const route = useRoute();
	let user: User | undefined;

	if (route.params && 'user' in route.params) {
		user = route.params.user as User;
	}

	if (user) {
		const { login, id, followers, public_repos } = user;

		return (
      <>
        <Scroll>
          <Container>
            <CardUser user={user} />
          </Container>
          
          <InformationContainer>
            <View>
              <TitleInformations>Informações adicionais</TitleInformations>
            </View>
            
            <ContainerData>
              <Label>ID: {id}</Label>
              <Label>Quantidade de seguidores: {followers}</Label>
              <Label>Quantidade de repositórios públicos: {public_repos}</Label>
            </ContainerData>
          </InformationContainer>
          
          <RepositoriesContainer>
            <Repositories login={login} />
          </RepositoriesContainer>
        </Scroll>
			</>
		);
	}
};

export default HomeScreen;
