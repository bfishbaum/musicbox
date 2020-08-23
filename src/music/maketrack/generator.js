
const BLANK_CHANCE = 0.1
const SPLIT_CHANCE = 0.3
const SHORT_NOTE_CHANCE = 0.5



const randelem = (L) => L[Math.floor(Math.random() * L.length)];

function timeToBBS(t) {
	var x = Math.floor(t/16)
	t -= x * 16
	var y = Math.floor(t/4)
	var z = t%4
	return x.toString() + ":" + y.toString() + ":" + z.toString()
}

function makeNote(note, length, startTime){
	return {note: note, normLength: length, startTime: startTime}
}

function shouldBlank() {
	return Math.random() < BLANK_CHANCE
}

function shouldSplit() {
	return Math.random() < SPLIT_CHANCE
}

function shouldShortNote() {
	return Math.random() < SHORT_NOTE_CHANCE 
}

function fillLength(notes, length, startTime) {
	if (shouldBlank()) {
		return []
	}
	if(length <= 2) {
		const note = randelem(notes)
		return [makeNote(note, length, startTime)]
	} 	
	if (shouldSplit()) {
		const pt1 = fillLength(notes, length/2, startTime)
		const pt2 = fillLength(notes, length/2, startTime + length/2)
		return pt1.concat(pt2)
	}
	else {
		const note = randelem(notes)
		return [makeNote(note, length, startTime)]
	}
}

function noteTime(x) {
	if(x === 2) {
		return "0:0:1"
	} else {
		return "0:0:2"
	}
}

function sanitizeTimes(songPart) {
	return {
		note: songPart.note,
		length: noteTime(songPart.normLength),
		time: timeToBBS(songPart.startTime),
		normLength: songPart.normLength,
		startTime: songPart.startTime
	}
}

export function makeSongV2(notes, bars) {
	var song = []
	for (var i = 0; i < bars * 4; i += 4) {
		const beat = fillLength(notes, 4, i)
		song = song.concat(beat)	
	}
	var ssong = song.map((v) => sanitizeTimes(v))
	console.log(ssong)
	return ssong
}
