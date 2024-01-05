import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 70%;
  justify-content: center;
  align-items: center;
`;

// Input styled component
export const Input = styled.TextInput`
  background-color: ${props => props.theme.secondary_color};
  min-width: 200px;
  width: 100%;
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 10px;
  border-color: ${props => props.theme.secondary_color};
  color: white;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.secondary_color};
  padding: 15px;
  max-width: 100px;
  align-items: center;
  border-radius: 15px;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.primary_color};
  font-size: 15px;
  font-weight: bold;
`;