import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAll, TemplateState } from './templateSlice';
import styles from './Template.module.css';

export function Template() {
	const dispatch : Function = useDispatch();
	const templateState: TemplateState = useSelector(selectAll);
	return (
		<div>
		</div>
	);
}
