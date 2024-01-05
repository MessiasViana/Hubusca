import React from 'react';
import {
	Container,
	ContainerData,
	InformationContainer,
	Label,
	RepositoriesContainer,
	TitleInformations,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { User } from '../../types/userTypes';
import CardUser from '../../components/cardUser';
import { ScrollView, View } from 'react-native';
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
        <ScrollView>
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
        </ScrollView>
			</>
		);
	}
};

export default HomeScreen;
