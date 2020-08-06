import { PolySynth, Synth, FMSynth } from 'tone';
import { play } from '../../features/musicnotes/musicnotesSlice';

export const PENTATONIC = [
	'C4', 'D4', 'E4', 'G4',
	'A4', 'C5', 'D5', 'E5',
	'G5', 'A5', 'C6', 'D6',
]


export const makeViolinSynth = () => {
	const synth = new PolySynth(8, FMSynth, {
		oscillator : {
			type : 'triangle'
		},
		envelope: {
			attack: 0.01
		}
	}).toMaster();
	synth.set('detune', -1200);
	return synth
}

const synth = makeViolinSynth()


export const PlayNotes = (noteArray, bpm) => {
	var notes = PENTATONIC.filter((v,i) => noteArray[i])
	var time = bpm > 140 ? '8n': '6n'
 synth.triggerAttackRelease(notes, time)
}

export const SetDetune = (newVal) => {
	synth.set('detune', newVal)
}