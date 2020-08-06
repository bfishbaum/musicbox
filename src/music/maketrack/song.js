import { PENTATONIC, makeViolinSynth } from '../instruments/ViolinSynth'
import Tone, { PolySynth } from 'tone';
import { ToggleButton } from 'react-bootstrap';
import {makeSongV2} from './generator'

const randn = (n) => Math.floor(Math.random() * n);  
const randelem = (L) => L[Math.floor(Math.random() * L.length)];

const makeSong = (notes, time) => new Array(time).fill(null).map(() => randelem(notes)) 

export class Song {
	constructor(notes, time) {
		this.playing = false;
		this.notes = notes
		this.time = time
		this.renewSong()
		this.bpm = 200
		this.synth = makeViolinSynth()
		this.constructLoop()
		this.pause = this.pause.bind(this)
		this.play = this.play.bind(this)
		this.renewSong = this.renewSong.bind(this)
		this.constructLoop = this.constructLoop.bind(this)
		this.isPlaying = this.isPlaying.bind(this)
	}

	renewSong() {
		this.song = makeSong(this.notes, this.time)
		this.constructLoop()
	}

	constructLoop () {
		this.loop = new Tone.Loop(time => {
			this.notes.forEach((v,i) => {
				this.synth.triggerAttackRelease(v, "n", time + (i.toString()+"n"))
			})
		}, "16m")
	}
	
	play() {
		if(!this.playing) {
			console.log("play gate passed")
			this.playing = true
			console.log(this.playing)
		}
	}
	
	pause() {
		if (this.playing) {
			console.log("pause gate passed")
			this.playing = false
			console.log(this.playing)
		}
	}

	isPlaying() {
		return this.playing
	}
}

const song = new Song(PENTATONIC, 16)
Tone.Transport.bpm.value = 200

export const play = () => {
	song.play()
}

export const pause = () => {
	song.renewSong()
}

export const renewSong = () => {
	song.renewSong()
}