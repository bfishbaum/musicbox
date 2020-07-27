import Tone, { AutoFilter, PluckSynth, PolySynth, Synth, Oscillator, AmplitudeEnvelope, PanVol, Master} from 'tone';

var octave = 4
var frets = ['G','C','E','A']
var synths = frets.map((i,v) => new PluckSynth({
	attackNoise: 0.2,
	dampening: 4000,
	resonance: 0.97,
}).toMaster())
var noteTime = 8

const delay = (i) => {
	var t = i * 0.1
	return "+" + t.toString()
}

export function strumUke () {
	// var notes = frets.map((v,i) => v + octave.toString())
	// console.log(notes[0], noteTime.toString() + "n")
	// notes.map((v,i) => synths[i].triggerAttackRelease(v, "16n", delay(i)))
}

export function hitAmpEnv() {
}