import React from 'react';
import { MusicNotes } from './features/musicnotes/Musicnotes';
import { Soundboard } from './features/soundboard/Soundboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<div>
				<MusicNotes></MusicNotes>
				<Soundboard></Soundboard>
				</div>
      </header>
    </div>
  );
}

export default App;
