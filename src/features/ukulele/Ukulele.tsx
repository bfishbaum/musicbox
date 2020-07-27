import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { strum, hit, selectAll, UkuleleState } from './ukuleleSlice';
import {Row, Container, Button, Nav } from 'react-bootstrap';
import styles from './Ukulele.module.css';

export function Ukulele() {
	const dispatch : Function = useDispatch();
	const ukuleleState: UkuleleState = useSelector(selectAll);
	return (
		<div>
			<Container>
				<Button variant="warning" onClick={() => dispatch(strum())}>Strum</Button>
				<Button variant="warning" onClick={() => dispatch(hit())}>Hit</Button>
			</Container>
		</div>
	);
}
