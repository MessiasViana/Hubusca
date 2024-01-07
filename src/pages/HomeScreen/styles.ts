import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 20px;
  background-color: ${props => props.theme.background_color};
`;

export const ErrorArea = styled.View`
  flex:1 ;
  align-items: center;
  margin-top: 50px;
`;

export const ErrorText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 0 30px;
  text-align: center;
  color: ${props => props.theme.primary_color}
`;


