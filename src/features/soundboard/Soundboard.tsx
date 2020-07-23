import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-input-slider';
import {
	playNote,
	setNoteTime,
	selectNotes,
	selectAll,
	SoundboardState
} from './soundboardSlice';
import {Row, Container, Button } from 'react-bootstrap';
import styles from './Soundboard.module.css';

const renderNote = (note: string, index: number, dispatch: Function) => {
	return (
		<div className={styles.offtoggle} onClick={() => dispatch(playNote(index))}>{note}</div>
	)
}

const controlPanel = (noteTime: number, dispatch: Function) => {
	return (
		<div>
		<p>Note Speed: {noteTime}</p>
		<Row>
				<Slider
					axis={"x"}
					x={noteTime}
					xmin={1}
					xmax={128}
					onChange={({x}) => dispatch(setNoteTime(x))}/>
		</Row>
		</div>	
	)
}

export function Soundboard() {
	const dispatch : Function = useDispatch();
	const soundboardState : SoundboardState = useSelector(selectAll)

  return (
    <Container>
			{controlPanel(soundboardState.noteTime, dispatch)}
			<Row>{soundboardState.notes.map((v,i) => renderNote(v, i, dispatch))}</Row>
    </Container>
  );
}
