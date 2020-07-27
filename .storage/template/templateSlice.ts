import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface TemplateState {
  value: number;
}

const initialState: TemplateState = {
  value: 0,
};

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
  },
});

export const { } = templateSlice.actions;

export const incrementAsync = (amount: number): AppThunk => dispatch => {
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAll = (state: RootState) => state.template;

export default templateSlice.reducer;
