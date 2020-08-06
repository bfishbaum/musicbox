import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import { mainPlay, mainPause, mainRemakeSong, getTime } from '../../music/maketrack/main.js'

export interface SongPart {
		note: string
		length: string
		time: string
		normLength: number
		startTime: number
}

export interface BackgroundState {
		song : Array<SongPart>
		playing: boolean
		time: number 
		syncing: boolean
}

const initialState: BackgroundState = {
	song: [],
	playing: false,
	time: 0,
	syncing: false 
};

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: { 
		pause: state => {
			mainPause()
			state.playing = false
		},
		play: state => {
			mainPlay()
			state.playing = true
		},
		randomize: state => {
			state.song = mainRemakeSong()
		},
		share: state => {

		},
		syncTime: (state, action:PayloadAction<number>) => {
			state.time = action.payload
		},
		setSync: state => {
			state.syncing = true
		}
  },
});

export const { pause, play, randomize, share, syncTime, setSync } = backgroundSlice.actions;

export const sync = (): AppThunk => dispatch => {
	dispatch(setSync())
	setInterval(()=> {
		var x = getTime()
		dispatch(syncTime(x))
	}, 50)
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAll = (state: RootState) => state.background;

export default backgroundSlice.reducer;
