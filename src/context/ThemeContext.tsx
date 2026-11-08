import { createContext } from 'react'

type ThemeContextType = {
  modoEscuro: boolean
  alternarTema: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
