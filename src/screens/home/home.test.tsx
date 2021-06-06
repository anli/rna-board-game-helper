import {mockNavigate, render} from '@test';
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
});
