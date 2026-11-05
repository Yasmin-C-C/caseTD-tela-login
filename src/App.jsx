import { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import Login from './pages/Login'
import Admin from './pages/Admin'
import './App.css'

function App() {
  const [modoEscuro, setModoEscuro] = useState(false)
  const [logado, setLogado] = useState(false)
  const navigate = useNavigate()

  function alternarTema() {
    setModoEscuro(!modoEscuro)
  }

  function entrar() {
    setLogado(true)
  }

  function sair() {
    setLogado(false)
    navigate('/', { replace: true })
  }

  return (
    <main className={modoEscuro ? 'pagina-login escuro' : 'pagina-login'}>
      <button
        type="button"
        className="botao-tema"
        onClick={alternarTema}
        aria-pressed={modoEscuro}
      >
        {modoEscuro ? 'Modo claro' : 'Modo escuro'}
      </button>

      <Routes>
        <Route
          path="/"
          element={logado ? <Navigate to="/admin" replace /> : <Login entrar={entrar} />}
        />
        <Route
          path="/admin"
          element={logado ? <Admin sair={sair} /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}

export default App
