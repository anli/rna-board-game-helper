import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {configureStore} from '@reduxjs/toolkit';
import {ThemeProvider} from '@shopify/restyle';
import {reducer, RootState} from '@store';
import {render as testingLibraryRender} from '@testing-library/react-native';
import {theme} from '@themes';
import React, {ComponentType} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as ReduxProvider} from 'react-redux';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

export const initialState: RootState = {games: {ids: [], entities: {}}};

export const render = ({
  component,
  options,
  preloadedState = initialState,
}: {
  component: ComponentType<any>;
  options: StackNavigationOptions;
  preloadedState?: RootState;
}) => {
  const store = configureStore({
    preloadedState,
    reducer,
  });

  return testingLibraryRender(
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <QueryClientProvider client={queryClient}>
          <ReduxProvider store={store}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Component"
                  component={component}
                  options={options}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ReduxProvider>
        </QueryClientProvider>
      </PaperProvider>
    </ThemeProvider>,
  );
};
