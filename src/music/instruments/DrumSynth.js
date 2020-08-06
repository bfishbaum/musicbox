import Tone, { PolySynth, Synth, FMSynth, MetalSynth,  MembraneSynth} from 'tone';
import { play } from '../../features/musicnotes/musicnotesSlice';

const PENTATONIC = [
	'C4', 'D4', 'E4', 'G4',
	'A4', 'C5', 'D5', 'E5',
	'G5', 'A5', 'C6', 'D6',
]

const synth = new Tone.MembraneSynth({
	oscillator : {
		type : 'triangle'
	},
	envelope: {
		attack: 0.1
	}
}).toMaster();

export const PlayDrumNote = (note, time) => {
	synth.triggerAttackRelease(note, time)
}