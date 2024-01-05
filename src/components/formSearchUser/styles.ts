import styled from 'styled-components/native';

export const Container = styled.View`
  max-width: 70%;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  min-width: 200px;
  width: 100%;
  margin: 12px;
  color: ${props => props.theme.primary_color};

  border: 1px solid ${props => props.theme.secondary_color};
  border-radius: 10px;
  font-size: 15px;
  padding: 10px;
`;

export const View = styled.View`
  border: 1px solid ${props => props.theme.secondary_color};
  padding: 15px;
  max-width: 100px;
  align-items: center;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.primary_color};
  font-size: 15px;
  font-weight: bold;
`;