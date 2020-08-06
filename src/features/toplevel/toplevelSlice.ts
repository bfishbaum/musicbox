import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface ToplevelState {
	page: string;
}

const initialState: ToplevelState = {
	page: "background"
};


export const toplevelSlice = createSlice({
  name: 'toplevel',
  initialState,
  reducers: {
			 // Use the PayloadAction type to declare the contents of `action.payload`
		switchPage: (state, action: PayloadAction<string>) => {
			state.page = action.payload
		}
  },
});

export const { switchPage } = toplevelSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectPage = (state: RootState) =>  { return state.toplevel.page }

export default toplevelSlice.reducer;
