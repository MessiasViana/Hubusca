import React, { useContext, useState } from 'react';
import { User } from '../../types/userTypes';
import { Container, RecentUsersConainer, Scroll, Title } from './styles';
import CardUser from '../../components/cardUser';
import { RecentUsersContext } from '../../contexts/recentUsers';

const ListScreen = () => {
	const recentUsers = useContext(RecentUsersContext);

	return (
		<Scroll>
			<Container>
				<Title>Últimas buscas</Title>

				<RecentUsersConainer>
					{recentUsers?.recentUsers &&
						recentUsers?.recentUsers?.length > 0 &&
						recentUsers?.recentUsers.map((item) => (
							<CardUser user={item} key={item.id} />
						))
					}
				</RecentUsersConainer>
			</Container>
		</Scroll>
	);
};

export default ListScreen;
