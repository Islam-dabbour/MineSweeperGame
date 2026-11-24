import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Board from './Components/Board'

function App() {
  

  return (
    <>
      <div className="Game">
        <h1>MineSweeper Game</h1>
        <h2>Find All The Mines Without Exploading!</h2>

        <Board></Board>
      </div>
    </>
  )
}

export default App
