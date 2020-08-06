import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, BackgroundState } from './backgroundSlice';
import {Row, Container, Button } from 'react-bootstrap';
import styles from './Background.module.css';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import {
	play, pause, randomize, SongPart, sync
} from './backgroundSlice';
import { PENTATONIC } from '../../music/instruments/ViolinSynth'
import { NOTES } from '../../music/maketrack/main'

const notesSheet = NOTES
var rowPixels = 60
var totalTime = 64 
var timePixels = 8
var numNotes = notesSheet.length
var noteFontSize = 20
var canvasWidth = 600
var canvasHeight = 300
var trackerHeight = (numNotes) * rowPixels

const noteToColor = (note: string, notes: Array<string>) => {

}

const noteToHeight = (note: string, notes: Array<string>) => {
	return (notes.indexOf(note) + 1) * rowPixels
}

const drawSongPart = (songPart: SongPart) => {
	var l = songPart.normLength
	var t = songPart.startTime
	var h = noteToHeight(songPart.note, notesSheet)
	return (
		<Rect x={rowPixels+timePixels*t+1} y={h-(rowPixels/8)} width={l*timePixels-2} height={rowPixels/4} fill="red"/>
	)
}

const drawTracker = (time: number) => {
	return (
		<Line x={rowPixels + totalTime * timePixels * time} y={(canvasHeight-trackerHeight)/2} points={[0,0,0, trackerHeight]} stroke="blue"/>
	)
}

const drawNoteLines = () => {
	return (
			<Layer>
				{notesSheet.map((v,i) => {
						return (<Text text={v} fontSize={noteFontSize} x={0} y={(i+1) * rowPixels - (noteFontSize/2)}/>)
				})}
				{notesSheet.map((v,i) => {
						return (<Line x={rowPixels} y={(i+1)* rowPixels} points={[0, 0, canvasWidth, 0]} stroke="black"/>)
				})}
			</Layer>
	)
}

const makeSongCanvas = (song: Array<SongPart>, time: number) => {
	return (
		<Stage width={canvasWidth} height={canvasHeight}>
			{drawNoteLines()}
			{/* <Layer>
			<Text text="C4" fontSize={20} x={0} y={30}/>
			<Line x={40} y={40} points={[0,0,400,0]} stroke="black"/>
			<Text text="E4" fontSize={20} x={0} y={70}/>
			<Line x={40} y={80} points={[0,0,400,0]} stroke="black"/>
			<Text text="G4" fontSize={20} x={0} y={110}/>
			<Line x={40} y={120} points={[0,0,400,0]} stroke="black"/>
			<Text text="A4" fontSize={20} x={0} y={150}/>
			<Line x={40} y={160} points={[0,0,400,0]} stroke="black"/>
			</Layer> */}
			<Layer>
				{song.map((v) => drawSongPart(v))}
			</Layer>
			<Layer>
				{drawTracker(time)}
			</Layer>
		</Stage>)
}


const makeToggle = (dispatch: Function, isPlaying: boolean) => {
	var buttonText = isPlaying ? "Pause" : "Play"
	var buttonFunction = isPlaying ? (()=>dispatch(pause())) : (()=>dispatch(play()))
	return (
		<Row>
			<Button className={styles.playButton} onClick={buttonFunction}>{buttonText}</Button>
			<Button className={styles.playButton} onClick={() => dispatch(randomize())}>New Song</Button> 
		</Row>
	)
}


export function Background() {
	const dispatch : Function = useDispatch();
	const backgroundState: BackgroundState = useSelector(selectAll);
	var playing = backgroundState.playing
	var song = backgroundState.song
	var time = backgroundState.time
	var syncing = backgroundState.syncing
	if(!syncing) {
		dispatch(sync())
	}
	
	return (
		<div>
			<Container>
				{makeToggle(dispatch, playing)}
				{makeSongCanvas(song, time)}
			</Container>
		</div>
	);
}
