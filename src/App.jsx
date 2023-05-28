import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Nombre del integrante</h2>
        <h4>Jaisson René Caballero Maza</h4>
        <h6>Estudiante de Tecnología En Producción De Audio</h6>
       
        <p>
        <a href="inicio.html">Click para ampliar proyecto</a>
        </p>
      </div>
      <p className="read-the-docs">
        
        
      </p>
    </>
  )
}

export default App
