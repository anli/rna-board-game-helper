import {server} from '@test';

beforeAll(() => {
  jest.useFakeTimers();
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
});
