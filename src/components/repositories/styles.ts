import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 70%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 25px;
  color: ${props => props.theme.primary_color};
  font-weight: bold;
`

export const RepositoryContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  border: 2px solid ${props => props.theme.detail_color};
  border-radius: 10px;
  padding: 20px;
  min-width: 100%;
`

export const Informations = styled.View`

`

export const TitleRepository = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  color: ${props => props.theme.primary_color};
`

export const Data = styled.Text`
  margin-top: 10px;
  color: ${props => props.theme.secondary_color};
`

export const ErrorText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 0 30px;
  text-align: center;
  color: ${props => props.theme.primary_color};
`;