import { PolySynth, Synth, AMSynth } from 'tone';
import { play } from '../../features/musicnotes/musicnotesSlice';

const PENTATONIC = [
	'C4', 'D4', 'E4', 'G4',
	'A4', 'C5', 'D5', 'E5',
	'G5', 'A5', 'C6', 'D6',
]

const synth = new PolySynth(8, AMSynth, {
	oscillator : {
		type : 'triangle'
	},
	envelope: {
		attack: 0.1
	}
}).toMaster();
synth.set('detune', -1200);

export const PlayNotes = (noteArray, bpm) => {
	var notes = PENTATONIC.filter((v,i) => noteArray[i])
	var time = bpm > 140 ? '8n': '6n'
	synth.triggerAttackRelease(notes, time)
}