import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { TriggerAttackRelease, PlayNotes, PlayMyNote } from '../../music/synth.js';

export interface SoundboardState {
	notes: Array<string>;
	noteTime: number;
}

const initialState: SoundboardState = {
	notes: [
		'A0', 'A#0', 'B0',	
		'C1', 'C#1', 'D1', 'D#1', 'E1','F1','F#1', 'G1', 'G#1', 'A1','A#1','B1',
		'C2', 'C#2', 'D2', 'D#2', 'E2','F2','F#2', 'G2', 'G#2', 'A2','A#2','B2',
		'C3', 'C#3', 'D3', 'D#3', 'E3','F3','F#3', 'G3', 'G#3', 'A3','A#3','B3',
		'C4', 'C#4', 'D4', 'D#4', 'E4','F4','F#4', 'G4', 'G#4', 'A4','A#4','B4',
		'C5', 'C#5', 'D5', 'D#5', 'E5','F5','F#5', 'G5', 'G#5', 'A5','A#5','B5',
		'C6', 'C#6', 'D6', 'D#6', 'E6','F6','F#6', 'G6', 'G#6', 'A6','A#6','B6',
		'C7', 'C#7', 'D7', 'D#7', 'E7','F7','F#7', 'G7', 'G#7', 'A7','A#7','B7',
		'C8'
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
