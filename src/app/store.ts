import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import musicnotesReducer from '../features/musicnotes/musicnotesSlice';
import soundboardReducer from '../features/soundboard/soundboardSlice';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: combineReducers({
		router: connectRouter(history),
    counter: counterReducer,
    musicnotes: musicnotesReducer,
    soundboard: soundboardReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
