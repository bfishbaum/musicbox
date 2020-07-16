import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import musicnotesReducer from '../features/musicnotes/musicnotesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    musicnotes: musicnotesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
