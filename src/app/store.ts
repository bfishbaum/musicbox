import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import musicnotesReducer from '../features/musicnotes/musicnotesSlice';
import soundboardReducer from '../features/soundboard/soundboardSlice';
import toplevelReducer from '../features/toplevel/toplevelSlice';
import ukuleleReducer from '../features/ukulele/ukuleleSlice';
import backgroundReducer from '../features/background/backgroundSlice';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: {
		toplevel: toplevelReducer,
    counter: counterReducer,
    musicnotes: musicnotesReducer,
		soundboard: soundboardReducer,
		ukulele: ukuleleReducer,
		background: backgroundReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
