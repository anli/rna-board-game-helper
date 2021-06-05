import {mockNavigate, render} from '@test';
import {fireEvent} from '@testing-library/react-native';
import {HomeScreen} from './home';

describe('Home', () => {
  it('See UI', async () => {
    const {getByText} = render({
      component: HomeScreen.Component,
      options: HomeScreen.options,
    });

    expect(getByText('Add Game')).toBeDefined();
  });

  it('Add game', async () => {
    const {getByText} = render({
      component: HomeScreen.Component,
      options: HomeScreen.options,
    });

    const button = await getByText('Add Game');
    await fireEvent.press(button);
    await expect(mockNavigate).toHaveBeenCalledTimes(1);
    await expect(mockNavigate).toHaveBeenCalledWith('BoardGameSearch');
  });
});
