export const mockNavigate = jest.fn();
export const mockCanGoBack = jest.fn().mockReturnValue(true);
export const mockGoBack = jest.fn();

jest.mock('@react-navigation/core', () => {
  return {
    ...(jest.requireActual('@react-navigation/core') as any),
    useNavigation: () => ({
      navigate: mockNavigate,
      canGoBack: mockCanGoBack,
      goBack: mockGoBack,
    }),
  };
});
