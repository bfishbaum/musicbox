import React from 'react';
import { MusicNotes } from './features/musicnotes/Musicnotes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<MusicNotes></MusicNotes>
      </header>
    </div>
  );
}

export default App;
