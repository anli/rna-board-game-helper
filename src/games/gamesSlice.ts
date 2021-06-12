import {
  createDraftSafeSelector,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {RootState} from '@store';

type Game = {
  id: string;
  name: string;
};

const gamesAdapter = createEntityAdapter<Game>({});

export const gamesSlice = createSlice({
  name: 'games',
  initialState: gamesAdapter.getInitialState(),
  reducers: {
    addOne: gamesAdapter.addOne,
  },
});

const selectSelf = (state: RootState) => state.games;

const gamesSelectors = gamesAdapter.getSelectors();

export const allGames = createDraftSafeSelector(
  selectSelf,
  gamesSelectors.selectAll,
);
