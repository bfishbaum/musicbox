import { PENTATONIC, makeViolinSynth } from '../instruments/ViolinSynth'
import Tone, { PolySynth } from 'tone';
import { ToggleButton } from 'react-bootstrap';
import {makeSongV2} from './generator'

const synth = makeViolinSynth()
synth.toMaster()
var playing = false;
var part = new Tone.Part((time, value) => {}, [])
const TT = Tone.Transport
TT.bpm.value = 120
export const NOTES = ["C4", "E4", "G4", "A4"]
export var playing = false

export const mainRemakeSong = () => {
	part.dispose()
	var song = makeSongV2(NOTES, 16)
	console.log(song)
	part = new Tone.Part((time, value) => {
		synth.triggerAttackRelease(value.note, value.length, time)
	}, song).start(0)
	part.loop = true
	part.loopStart = 0
	part.loopEnd = "4:0:0"
	return song
}

export const Toggle = () => {
		Tone.Transport.pause()
		Tone.Transport.start()
}

export const mainPlay = () => {
	TT.start()
	playing = true
}
export const mainPause = () => {
	TT.pause()
	playing = false
}

export function getTime() {
	var x = part.progress
	console.log(x)
	return x
}