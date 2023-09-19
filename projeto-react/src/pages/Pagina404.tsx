const Pagina404 = () => {
  return (
    <main className="w-full h-screen flex flex-row">
      <div className=" w-full flex items-center justify-center h-full lg:w-3/6 bg-[#05478A]">
        <img src="/white-logo.svg" alt="Logo" className="w-5/6 lg:w-3/5" />
      </div>
      <div className="w-full flex flex-col items-center justify-center h-full lg:w-3/6">
        <img src="/404.png" alt="404" className="w-2/4" />
        <h1 className="mt-5 md:text-2xl font-bold text-[#05478A]">Página não encontrada</h1>
        <p className="mt-4 w-4/5 text-center text-base">A página que você procura não existe nesse servidor ou não está disponível.</p>
      </div>
    </main>
  )
}

export default Pagina404