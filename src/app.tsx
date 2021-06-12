import {RootNavigator} from '@navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {store} from '@store';
import {theme} from '@themes';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as ReduxProvider} from 'react-redux';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </ReduxProvider>
        </QueryClientProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};
