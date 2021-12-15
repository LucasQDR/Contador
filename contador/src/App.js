import { useState } from "react";
import './style.css'

const Contador = () => {
    const [numero, setNumero] = useState(0)
    return (
      <div id="display">
        <div id="numeroDisplay">{numero}</div>
        <button id="btnSubtrair" onClick={() => setNumero(numero - 1)}>-</button>
        <button id="btnSomar" onClick={() => setNumero(numero + 1)}>+</button>
        <button id="btnReset" onClick={() => setNumero(0)}>Reset</button>
      </div>
    )
  }

  export default function App() {
    const [contar, setContar] = useState([])
  
    return (
      <div>
        <button id="btnAdd" onClick={() => setContar([...contar, <Contador />])}>Add Contador</button>      
        <div>{contar}</div>
      </div>
    )
  }



