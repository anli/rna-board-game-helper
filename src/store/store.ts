import {gamesSlice} from '@games';
import {configureStore} from '@reduxjs/toolkit';

export const reducer = {
  games: gamesSlice.reducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
