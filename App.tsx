import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'react-native';

import themes from './assets/styles/theme';
import { RecentUsersContext } from './src/contexts/recentUsers';
import { useState } from 'react';
import { User } from './src/types/userTypes';

export default function App() {
  const deviceTheme = useColorScheme();
  const [recentUsers, setRecentUsers] = useState<User[]>([]);
  let theme = themes.dark;

  if (deviceTheme) theme = themes[deviceTheme];

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.primary_color} />
      <ThemeProvider theme={theme}>
        <RecentUsersContext.Provider value={{ recentUsers, setRecentUsers }}>
          <MainStack />
        </RecentUsersContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
