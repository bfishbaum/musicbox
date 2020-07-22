import { PolySynth, Synth } from 'tone';

const synth = new PolySynth(4, Synth, {
	oscillator : {
		type : 'triangle'
	}
}).toMaster();
synth.set('detune', -1200);

const A_MINOR_SCALE = ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'A5', 'B5', 'C5', 'D5', 'E5']
const PENTATONIC = [
	'C4', 'D4', 'E4', 'G4',
	'A4', 'C5', 'D5', 'E5',
	'G5', 'A5', 'C6', 'D6',
]

export const PlayNotes = (noteArray) => {
	var notes = PENTATONIC.filter((v,i) => noteArray[i])
	synth.triggerAttackRelease(notes, '8n')
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
