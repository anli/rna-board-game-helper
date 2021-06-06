import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {ThemeProvider} from '@shopify/restyle';
import {render as testingLibraryRender} from '@testing-library/react-native';
import {theme} from '@themes';
import React, {ComponentType} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const Stack = createStackNavigator();

export const render = ({
  component,
  options,
}: {
  component: ComponentType<any>;
  options: StackNavigationOptions;
}) => {
  return testingLibraryRender(
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Component"
                component={component}
                options={options}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </PaperProvider>
    </ThemeProvider>,
  );
};
