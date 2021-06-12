import {initialState, mockNavigate, render} from '@test';
import {fireEvent} from '@testing-library/react-native';
import {HomeScreen} from './home';

describe('Home', () => {
  it('See UI', async () => {
    const {getByA11yLabel} = render({
      component: HomeScreen.Component,
      options: HomeScreen.options,
    });

    expect(getByA11yLabel('Add Game Button')).toBeDefined();
  });

  it('Add game', async () => {
    const {getByA11yLabel} = render({
      component: HomeScreen.Component,
      options: HomeScreen.options,
    });

    const button = await getByA11yLabel('Add Game Button');
    await fireEvent.press(button);
    await expect(mockNavigate).toHaveBeenCalledTimes(1);
    await expect(mockNavigate).toHaveBeenCalledWith('BoardGameSearch');
  });

  it('Multiple games in collection', async () => {
    const preloadedState = {
      ...initialState,
      games: {
        ids: ['A', 'B'],
        entities: {
          A: {
            id: 'A',
            name: 'Board Game A',
          },
          B: {
            id: 'B',
            name: 'Board Game B',
          },
        },
      },
    };
    const {getByText} = render({
      component: HomeScreen.Component,
      options: HomeScreen.options,
      preloadedState,
    });

    expect(getByText('Board Game A')).toBeDefined();
    expect(getByText('Board Game B')).toBeDefined();
  });
});
