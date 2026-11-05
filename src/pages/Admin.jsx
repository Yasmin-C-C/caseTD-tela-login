function Admin({ sair }) {
  return (
    <section className="admin" aria-labelledby="titulo-admin">
      <h1 id="titulo-admin">Administração</h1>
      <p>Bem-vindo, admin!</p>
      <p>Você está na área de administração do sistema.</p>
      <button type="button" className="botao-sair" onClick={sair}>
        Sair
      </button>
    </section>
  );
}

export default Admin;
