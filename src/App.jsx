import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Board from './components/Board';
import { GameContext } from './context/GameContext';
import GamePage from './pages/GamePage';
import JoinGamePage from './pages/JoinGamePage';

function App() {
  const [currPlayer, setCurrPlayer] = useState('X');
  // const [board, set]

  return (
    <>
      <GameContext.Provider value={{ currPlayer, setCurrPlayer }}>
        {/* <GamePage /> */}
        <JoinGamePage />
      </GameContext.Provider>
    </>
  );
}

export default App;
