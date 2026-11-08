import { useState } from 'react'
import type { ChangeEvent, SubmitEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

type LoginProps = {
  entrar: () => void
}

function Login({ entrar }: LoginProps) {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    // Dados fictícios, usados apenas para demonstrar o login no frontend.
    if (usuario.trim() === 'admin' && senha === '123456') {
      entrar()
      navigate('/admin', { replace: true })
    } else {
      setMensagem('Usuário ou senha incorretos.')
    }
  }

  function alterarUsuario(event: ChangeEvent<HTMLInputElement>) {
    setUsuario(event.target.value)
    setMensagem('')
  }

  function alterarSenha(event: ChangeEvent<HTMLInputElement>) {
    setSenha(event.target.value)
    setMensagem('')
  }

  return (
      <section className="min-h-[400px] w-full max-w-[400px] rounded-[10px] bg-card px-6 pt-9 pb-[66px]" aria-labelledby="titulo-login">
        <h1 id="titulo-login" className="mb-[53px] text-center text-[44px] leading-[53px] font-bold text-primary dark:text-white">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
          <Input
            type="text"
            id="usuario"
            name="usuario"
            aria-label="Usuário"
            placeholder="Username"
            autoComplete="username"
            value={usuario}
            onChange={alterarUsuario}
            required
          />

          <Input
            type="password"
            id="senha"
            name="senha"
            aria-label="Senha"
            placeholder="Password"
            autoComplete="current-password"
            value={senha}
            onChange={alterarSenha}
            required
          />

          <Button type="submit" className="mt-[38px] h-[38px] w-[153px] self-center rounded-[20px] text-[15px] font-medium shadow-none">LOGIN</Button>
        </form>
        <p
          className="mt-4 text-center text-sm text-[#b42318] empty:hidden dark:text-[#ffb4ab]"
          role="status"
        >
          {mensagem}
        </p>
      </section>
  )
}

export default Login
