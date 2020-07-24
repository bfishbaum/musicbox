import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-input-slider';
import {
	switchPage,
	selectPage,
} from './toplevelSlice';

import {
	pause,
	restart,
} from '../../features/musicnotes/musicnotesSlice'

import { MusicNotes } from '../../features/musicnotes/Musicnotes';
import { Soundboard } from '../../features/soundboard/Soundboard';
import {Row, Container, Button, Nav } from 'react-bootstrap';
import styles from './Toplevel.module.css';

export function Toplevel() {
	const dispatch : Function = useDispatch();
	const currentPage : string = useSelector(selectPage)

  return (
		<div>
			<Container>
			<Nav variant="pills" defaultActiveKey="musicbox" onSelect={(key:string) => {
				dispatch(switchPage(key))
				if(key === "soundboard") {
						dispatch(pause())
						dispatch(restart())
				}
			}}>
				<Nav.Item>
					<Nav.Link eventKey={"musicbox"}>Musicbox</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey={"soundboard"}>Soundboard</Nav.Link>
				</Nav.Item>
			</Nav>
    <Container>
		<h1>{currentPage}</h1>
			{currentPage === "musicbox" && <MusicNotes/>}
			{currentPage === "soundboard" && <Soundboard/>}
    </Container>
		</Container>
		</div>
  );
}
