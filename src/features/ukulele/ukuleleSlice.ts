import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { strumUke, hitAmpEnv } from "../../music/instruments/UkuleleSynth"

export interface UkuleleState {
}

const initialState: UkuleleState = {
};



export const ukuleleSlice = createSlice({
  name: 'ukulele',
  initialState,
  reducers: {
		strum: state => {
			strumUke()
		},
		hit: state => {
			hitAmpEnv()
		}
  },
});

export const { strum, hit } = ukuleleSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAll = (state: RootState) => state.ukulele;

export default ukuleleSlice.reducer;
