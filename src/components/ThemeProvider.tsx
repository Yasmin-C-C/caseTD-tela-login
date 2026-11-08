import { useState } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext } from '../context/ThemeContext'

type ThemeProviderProps = {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [modoEscuro, setModoEscuro] = useState(false)

  function alternarTema() {
    setModoEscuro((temaAtual) => !temaAtual)
  }

  return (
    <ThemeContext.Provider value={{ modoEscuro, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
