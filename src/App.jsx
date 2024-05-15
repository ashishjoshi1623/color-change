import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function changeBackground(e){
      const color = e.target.value;
      document.body.style.backgroundColor = color;
  }


  return(
    <>
      <footer className='fixed-color-buttons'>
        <button className="btnClass red" value="red" onClick={changeBackground}>Red</button>
        <button className="btnClass green" value="green" onClick={changeBackground}>Green</button>
        <button className="btnClass blue" value="blue" onClick={changeBackground}>Blue</button>
        <button className="btnClass olive" value="olive" onClick={changeBackground}>Olive</button>
        <button className="btnClass gray" value="gray" onClick={changeBackground}>Gray</button>
        <button className="btnClass yellow" value="yellow" onClick={changeBackground}>Yellow</button>
        <button className="btnClass pink" value="pink" onClick={changeBackground}>Pink</button>
        <button className="btnClass purple" value="purple" onClick={changeBackground}>Purple</button>
        <button className="btnClass lavender" value="lavender" onClick={changeBackground}>Lavender</button>
        <button className="btnClass white" value="white" onClick={changeBackground}>White</button>
        <button className="btnClass black" value="black" onClick={changeBackground}>Black</button>
      </footer>
    </> 
  )
}

export default App
