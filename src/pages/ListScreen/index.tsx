import React, { useContext, useState } from 'react';
import { User } from '../../types/userTypes';
import { Container, Title } from './styles';
import CardUser from '../../components/cardUser';
import { RecentUsersContext } from '../../contexts/recentUsers';
import { ScrollView } from 'react-native';

const ListScreen = () => {
	const recentUsers = useContext(RecentUsersContext);

	return (
		<ScrollView>
			<Container>
				<Title>Últimas buscas</Title>

				{recentUsers?.recentUsers &&
					recentUsers?.recentUsers?.length > 0 &&
					recentUsers?.recentUsers.map((item) => (
						<CardUser user={item} key={item.id} />
					))}
			</Container>
		</ScrollView>
	);
};

export default ListScreen;
