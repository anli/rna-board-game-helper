import {mockGoBack, render} from '@test';
import {fireEvent, waitFor} from '@testing-library/react-native';
import * as reactRedux from 'react-redux';
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

  it('Select game', async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);

    const {getByTestId, getByText, findByText} = render({
      component: BoardGameSearchScreen.Component,
      options: BoardGameSearchScreen.options,
    });

    fireEvent(getByTestId('Searchbar'), 'changeText', 'board');

    await findByText('Board Game A');

    fireEvent.press(getByText('Board Game A'));

    await waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1));
    expect(mockDispatch).toHaveBeenCalledWith({
      payload: {id: 'A', name: 'Board Game A'},
      type: 'games/addOne',
    });
  });
});
