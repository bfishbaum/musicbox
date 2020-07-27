import { PolySynth, Synth, AMSynth } from 'tone';

const synth = new PolySynth(8, AMSynth, {
	oscillator : {
		type : 'triangle'
	},
	envelope: {
		attack: 0.1
	}
}).toMaster();
synth.set('detune', -1200);

const A_MINOR_SCALE = ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'A5', 'B5', 'C5', 'D5', 'E5']
const PENTATONIC = [
	'C4', 'D4', 'E4', 'G4',
	'A4', 'C5', 'D5', 'E5',
	'G5', 'A5', 'C6', 'D6',
]

export const PlayNotes = (noteArray, bpm) => {
	var notes = PENTATONIC.filter((v,i) => noteArray[i])
	var time = bpm > 140 ? '8n': '6n'
	synth.triggerAttackRelease(notes, time)
}

export const PlayMyNote = (note, time) => {
	synth.triggerAttackRelease(note, time.toString() + 'n')
}

export const TriggerAttackRelease = (note, time) => {
	synth.triggerAttackRelease(note, time)
}

export const TriggerAttack = (note, time) => {
	synth.triggerAttackRelease(note, time)
}
