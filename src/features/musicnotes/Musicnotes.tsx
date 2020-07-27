import React, { useState } from 'react';
import { push } from 'connected-react-router';
import { useSelector, useDispatch, connect } from 'react-redux';
import Slider from 'react-input-slider';
import {
	play,
	pause,
	setBPM,
	randomize,
	restart,
	toggleNote,
	selectAll,
	TogglePayload,
	MusicNoteState,
	clear,
} from './musicnotesSlice';
import {Row, Container, Button } from 'react-bootstrap';
import styles from './Musicnotes.module.css';



const toggle = (i:number,j:number, dispatch: Function  ) => () => {
	var x : TogglePayload = {time: i, value: j}
	dispatch(toggleNote(x))
}

const renderNote = (note: Array<Boolean>, index: number, dispatch: Function, time: number) => {
	return (
		<Row>
			{note.map((v,i) => {
				return (
					<div className={v ? styles.ontoggle : styles.offtoggle} onClick={toggle(index, i, dispatch)}></div>
				)
			})}
			{time === index && 
				<div className={styles.redcirclebox}>
					<div className={styles.redcircle}></div>
				</div>}
		</Row>
	)
}

const renderNoteSheet = (state: MusicNoteState, dispatch: Function) => {
	var notes: Array<Array<Boolean>> = state.notes
	return (
			notes.map((note,time) => renderNote(note, time, dispatch, state.currentTime))
	)
}

const valueToNumber = (value : number | Range) => {
	if(typeof value === "number") {
		return value
	}
	return 200;
}

const renderControls = (state: MusicNoteState, dispatch: Function) => {
	const playButtonFunction = state.playing ? (() => dispatch(pause())) : (() => dispatch(play(state.bpm)))
	const buttonText = state.playing ? "Pause" : "Play"
	return (
		<div>
			<Row>
				<Button className={styles.playButton} onClick={playButtonFunction}>{buttonText}</Button>
				<Button className={styles.playButton} onClick={() => dispatch(randomize())}>Randomize</Button>
				<Button className={styles.playButton} onClick={() => dispatch(restart())}>Restart</Button>
				<Button className={styles.playButton} onClick={() => dispatch(clear())}>Clear</Button>
			</Row>
			<Row>
				<p>{state.bpm}</p>
				<Slider
					axis={"x"}
					x={state.bpm}
					xmin={100}
					xmax={600}
					onChange={({x}) => dispatch(setBPM(x))}/>
			</Row>
		</div>
	)
}

export function MusicNotes() {
	const dispatch : Function = useDispatch();
	const musicnotes = useSelector(selectAll)
  return (
    <Container>
			{renderControls(musicnotes, dispatch)}
			{renderNoteSheet(musicnotes, dispatch)}
    </Container>
  );
}
