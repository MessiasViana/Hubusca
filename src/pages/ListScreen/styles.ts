import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background-color: ${props => props.theme.background_color};
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 60px 0;
  background-color: ${props => props.theme.background_color};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.primary_color};
`;

export const RecentUsersConainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.background_color};
`;
