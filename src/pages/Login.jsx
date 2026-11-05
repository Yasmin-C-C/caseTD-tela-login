import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ entrar }) {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    // Dados fictícios, usados apenas para demonstrar o login no frontend.
    if (usuario.trim() === 'admin' && senha === '123456') {
      entrar()
      navigate('/admin', { replace: true })
    } else {
      setMensagem('Usuário ou senha incorretos.')
    }
  }

  function alterarUsuario(event) {
    setUsuario(event.target.value)
    setMensagem('')
  }

  function alterarSenha(event) {
    setSenha(event.target.value)
    setMensagem('')
  }

  return (
      <section className="login" aria-labelledby="titulo-login">
        <h1 id="titulo-login">Login</h1>

        <form onSubmit={handleSubmit}>
          <input
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

          <input
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

          <button type="submit">LOGIN</button>
        </form>
        <p
          className="mensagem erro"
          role="status"
        >
          {mensagem}
        </p>
      </section>
  )
}

export default Login
