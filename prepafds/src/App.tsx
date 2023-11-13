import { useState } from 'react'
import './styles/global.css';
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar logo='/assets/logo.png' links='[{"label": "Jogadores", "href": "/", "id": "jogadores"},{"label": "Atividades", "href": "/", "id": "atividades"},{"label": "Relatório", "href": "/", "id": "relatorio"}]' />
    </>
  )
}

export default App
