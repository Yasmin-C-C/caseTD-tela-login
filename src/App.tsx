import { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import Login from './pages/Login'
import Admin from './pages/Admin'
import { useTheme } from './hooks/useTheme'
import { Button } from './components/ui/button'

function App() {
  const { modoEscuro, alternarTema } = useTheme()
  const [logado, setLogado] = useState(false)
  const navigate = useNavigate()

  function entrar() {
    setLogado(true)
  }

  function sair() {
    setLogado(false)
    navigate('/', { replace: true })
  }

  return (
    <main className={`${modoEscuro ? 'dark scheme-dark' : ''} flex min-h-svh flex-col items-center justify-center gap-5 bg-[#e0e3ff] p-6 text-[#222] max-[480px]:p-4 dark:bg-[#202024]`}>
      <Button
        type="button"
        variant="outline"
        className="h-auto rounded-[20px] border-2 border-[#6066ff] bg-white px-[18px] py-2.5 text-base font-normal text-primary shadow-none hover:bg-white hover:text-primary dark:border-primary dark:bg-primary dark:text-primary-foreground dark:hover:bg-[#c99dfd] dark:hover:text-primary-foreground"
        onClick={alternarTema}
        aria-pressed={modoEscuro}
      >
        {modoEscuro ? 'Modo claro' : 'Modo escuro'}
      </Button>

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
