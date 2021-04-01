import {useState} from 'react'
import './App.css';
import {ReactSpinner} from 'react-spinning-wheel'
import 'react-spinning-wheel/dist/style.css'

function App() {

  const [spin, setSpin] = useState('circle')

  const startRotation = () => {
    setSpin('circle start-rotate')
    setTimeout(() => {
      setSpin('circle start-rotate stop-rotate')
    }, Math.floor(Math.random() * 5000) + 1)
  }

  return (
    <div>
      <div className="arrow"></div>
      <ul className={spin}>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">1</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">2</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">3</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">4</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">5</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">6</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">7</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">8</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">9</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">10</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">11</div>
        </li>
        <li>
          <div className="text" contenteditable="true"
          spellCheck="false">12</div>
        </li>
      </ul>
      <button className="spin-button" onClick={startRotation}>Spin</button>
    </div>
  );
}

export default App;
