import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.theme.secondary_detail_color};
  border-radius: 10px;
  min-width: 80%;
`;

export const Content = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  border-color: ${props => props.theme.secondary_detail_color};
  border-width: 2px;
`;

export const DefaultText = styled.Text`
  color: ${props => props.theme.primary_color};
`;

export const Name = styled(DefaultText)`
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
`;

export const Login = styled(DefaultText)`
  font-size: 18px;
  color: ${props => props.theme.secondary_color};
`;

export const Location = styled(DefaultText)`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.secondary_color};
`;

export const Button = styled.View`
  margin-top: 20px;
  background-color: ${props => props.theme.primary_color};
  border-radius: 10px;
  padding: 20px;
`;

export const TextButton = styled(DefaultText)`
  font-weight: bold;
  font-size: 16px;
`;