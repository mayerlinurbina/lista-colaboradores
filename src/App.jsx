
import './App.css'
import { useRef, useState } from 'react'
import data from './data/data.js'
import Header from './components/Header.jsx'
import Agregar from './components/Agregar.jsx'
import Listado from './components/Listado.jsx'

function App() {
  const buscador = useRef(null)
  const [colaboradores, setColaboradores] = useState(data)
  const [mostrarColaboradores, setMostrarColaboradores] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!e.target[0].value || !e.target[1].value) return

    const nuevoColaborador = {
      id: colaboradores.length + 1,
      nombre: e.target[0].value,
      correo: e.target[1].value
    }
    e.target[0].value = ""
    e.target[1].value = ""

    const colaboradoresActualizados = [...colaboradores, nuevoColaborador]
    setColaboradores(colaboradoresActualizados)
    setMostrarColaboradores(colaboradoresActualizados)
  }

  const handleKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    const valor = buscador.current.value.toLowerCase();

    const filtrado = colaboradores.filter((colaborador) => {
      return colaborador.nombre.toLowerCase().includes(valor) 
      || colaborador.correo.toLowerCase().includes(valor)
    });

    setMostrarColaboradores(filtrado);
  }

  const reset = () => {
    setMostrarColaboradores(colaboradores)
  }
  
  return (
    <div className="App">
      <Header referencia={buscador}
      buscar={handleKeyDown}
      reset={reset}
      ></Header>

      <main>
        <Agregar submit={handleSubmit}></Agregar>

        <div className='listado-colaboradores'>
          <h3>Listado colaboradores</h3>
          <Listado listado={mostrarColaboradores}></Listado>

        </div>
      </main>
    </div>
  )
}
export default App
