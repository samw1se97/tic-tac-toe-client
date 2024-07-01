import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Board from './components/Board';
import { GameContext } from './context/GameContext';

function App() {
  const [currPlayer, setCurrPlayer] = useState('X');
  // const [board, set]

  return (
    <>
      <GameContext.Provider value={{ currPlayer, setCurrPlayer }}>
        <Board />
      </GameContext.Provider>
    </>
  );
}

export default App;
