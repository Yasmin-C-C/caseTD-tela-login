import { Button } from '../components/ui/button'

type AdminProps = {
  sair: () => void
}

function Admin({ sair }: AdminProps) {
  return (
    <section className="w-full max-w-[600px] rounded-[10px] bg-card p-8 dark:text-white/87 max-[480px]:p-6" aria-labelledby="titulo-admin">
      <h1 id="titulo-admin" className="mb-6 text-[28px] font-bold text-primary dark:text-white max-[480px]:text-2xl max-[480px]:[overflow-wrap:anywhere]">Administração</h1>
      <p className="my-4 leading-normal">Bem-vindo, admin!</p>
      <p className="my-4 leading-normal">Você está na área de administração do sistema.</p>
      <Button type="button" className="mt-4 h-auto rounded-[20px] px-6 py-2.5 text-base font-normal shadow-none" onClick={sair}>
        Sair
      </Button>
    </section>
  );
}

export default Admin;
