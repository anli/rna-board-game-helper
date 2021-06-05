import {mockGoBack, render} from '@test';
import {fireEvent} from '@testing-library/react-native';
import {BoardGameSearchScreen} from './board-game-search';

describe('Board Game Search', () => {
  it('See UI', async () => {
    const {getByTestId} = render({
      component: BoardGameSearchScreen.Component,
      options: BoardGameSearchScreen.options,
    });

    expect(getByTestId('Searchbar')).toBeDefined();
  });

  it('Press back button', async () => {
    const {getByTestId} = render({
      component: BoardGameSearchScreen.Component,
      options: BoardGameSearchScreen.options,
    });

    fireEvent(getByTestId('Searchbar'), 'iconPress');
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it('Enter valid search text', async () => {
    const {getByTestId, getByText, findByText} = render({
      component: BoardGameSearchScreen.Component,
      options: BoardGameSearchScreen.options,
    });

    fireEvent(getByTestId('Searchbar'), 'changeText', 'board');

    await findByText('Board Game A');
    expect(getByText('Board Game B')).toBeDefined();
    expect(getByText('Board Game C')).toBeDefined();
  });
});
