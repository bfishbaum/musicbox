import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { PlayNotes } from '../../music/instruments/ViolinSynth';

const defaultBPM = 200
const defaultNotes = 16
const defaultColumns = 12

export interface MusicNoteState {
  bpm: number;
  notes: Array<Array<boolean>>;
  playing: boolean;
	currentTime: number;
	playIntervalID?: any;
}

export interface TogglePayload {
	// index in the song of the note changed
	time: number;
	// which value was toggled
	value: number;
}

var notes = new Array(defaultNotes).fill(null).map(item =>(new Array(defaultColumns).fill(null))) 

const initialState: MusicNoteState = {
	bpm: defaultBPM,
	notes: notes,
	playing: false,
	currentTime: -1
};


export const musicnotesSlice = createSlice({
  name: 'musicnotes',
  initialState,
  reducers: {
       // Use the PayloadAction type to declare the contents of `action.payload`
    toggleNote: (state, action: PayloadAction<TogglePayload>) => {
			state.notes[action.payload.time][action.payload.value] = !state.notes[action.payload.time][action.payload.value]
		},
		beat: state => {
			state.currentTime += 1
			if(state.currentTime >= notes.length) {
				state.currentTime = 0;
			}
			PlayNotes(state.notes[state.currentTime], state.bpm)
		},
		setPlaying: (state, action: PayloadAction<any>) => {
			state.playing = true
			state.playIntervalID = action.payload
		},
		pause: state => {
			state.playing = false
			clearInterval(state.playIntervalID)
		},
		randomize: state => {
			state.notes = state.notes.map((x) => x.map(y => Math.random() < 0.2))
		},
		imFeelingLucky: state => {

		},
		restart: state => {
			state.currentTime = -1;
		},
		setBPM: (state, action: PayloadAction<number>) => {
			state.bpm = action.payload
		},
		clear: (state) => {
			state.notes = state.notes.map((x) => x.map(y => false))
		},
		share: state => {

		},
  },
});

export const { toggleNote, beat, clear, setPlaying, pause, randomize, share, restart, setBPM } = musicnotesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectAll = (state: RootState) =>  { return state.musicnotes }

export const play = (amount: number): AppThunk => dispatch => {
	dispatch(beat())
  var x = setInterval(() => {
    dispatch(beat());
	}, 60000/amount) as any;
	dispatch(setPlaying(x))
};


export default musicnotesSlice.reducer;
