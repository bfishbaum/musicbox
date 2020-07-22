import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { TriggerAttackRelease, PlayNotes, PlayMyNote } from '../../music/synth.js';

export interface SoundboardState {
	notes: Array<string>;
	noteTime: number;
}

const initialState: SoundboardState = {
	notes: [
		'F0', 'Fb0', 'G0',	
		'A1', 'Ab1', 'B1', 'Bb1', 'C1','D1','Db1', 'E1', 'Eb1', 'F1','Fb1','G1',
		'C4', 'D4', 'E4', 'G4',
		'A4', 'C5', 'D5', 'E5',
		'G5', 'A5', 'C6', 'D6',
	],
	noteTime: 16,
};


export const soundboardSlice = createSlice({
  name: 'soundboard',
  initialState,
  reducers: {
       // Use the PayloadAction type to declare the contents of `action.payload`
		playNote: (state, action: PayloadAction<number>) => {
			PlayMyNote(state.notes[action.payload], state.noteTime)
		},
		setNoteTime: (state, action: PayloadAction<number>) => {
			state.noteTime = action.payload
		}
  },
});

export const { playNote, setNoteTime } = soundboardSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectNotes = (state: RootState) =>  { return state.soundboard.notes }
export const selectAll = (state: RootState) =>  { return state.soundboard }

export default soundboardSlice.reducer;
