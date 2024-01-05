import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';

import themes from './assets/styles/theme';

export default function App() {
  const deviceTheme = useColorScheme();
  let theme = themes.dark;

  if (deviceTheme) theme = themes[deviceTheme];

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}
