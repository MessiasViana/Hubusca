import React, { useEffect, useState } from 'react';
import { searchRepositories } from '../../api/repositoryApi';
import { Container, Data, ErrorText, Informations, RepositoryContainer, Title, TitleRepository } from './styles';
import { TouchableOpacity } from 'react-native';
import { Repository } from '../../types/repositoriesTypes';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import formatDate from '../../utils/formatDate';
import handlePressGoToGithub from '../../utils/goToGithub';

interface Props {
	login: string;
}

const Repositories = ({ login }: Props) => {
	const [repositories, setRepositories] = useState<Repository[]>();

	const handleRequestRepositories = async () => {

		try {
			const repositoriesResponse = await searchRepositories(login.trim());

			if (repositoriesResponse) return setRepositories(repositoriesResponse);

			throw new Error('Repositórios não encontrados');
		} catch (error) {
			console.log('Erro ao tentar encontrar repositório', error);
		}
	};
	

	useEffect(() => {
		handleRequestRepositories();
	}, [login]);

	return (
    <Container>
      <Title>Repositórios</Title>

			{repositories && repositories?.length > 0 &&
				repositories.map((item) => (
					<TouchableOpacity onPress={() => handlePressGoToGithub(item.html_url)} key={item.id}>
						<RepositoryContainer>
							<MaterialCommunityIcons
								name="source-repository"
								size={50}
								color="black"
							/>

							<Informations>
								<TitleRepository>{item.name}</TitleRepository>
								<Data>Linguagem utilizada: {item.language}</Data>
								<Data>Data de criação: {formatDate(item.created_at)}</Data>
								<Data>Data do último push: {formatDate(item.pushed_at)}</Data>
								{item.description && <Data>Descrição: {item.description}</Data>}
								
							</Informations>
						</RepositoryContainer>
					</TouchableOpacity>
				))}
			
			{repositories && repositories?.length < 1 &&
				<ErrorText>Nenhum repositório encontrado.</ErrorText>
			}
		</Container>
	);
};

export default Repositories;
