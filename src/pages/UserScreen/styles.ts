import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  background-color: ${props => props.theme.background_color};
`;

export const Container = styled.SafeAreaView`
  align-items: center;
  margin-top: 20px;
`;

export const TitleInformations = styled.Text`
  margin-top: 30px;
  font-size: 25px;
  color: ${props => props.theme.primary_color};
`

export const InformationContainer = styled.View`
  margin-left: 10%;
`

export const ContainerData = styled.View`
  margin-top: 20px;
`

export const Label = styled.Text`
  color: ${props => props.theme.primary_color};
  margin-top: 4px;
  font-size: 16px;
`

export const RepositoriesContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`
