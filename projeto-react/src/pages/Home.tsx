import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { buscaUsuario } from "../services/busca.service"
import Mensagem from "../Components/Mensagem"
import Loading from "../Components/Loading"

const Home = () => {
  const navigate = useNavigate()
  const [ mensagem, setMensagem ] = useState<string>("")
  const fechaMensagem = () => {
    setMensagemTag(false)
  }
  const [ mensagemTag, setMensagemTag ] = useState<boolean>(false)
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ usuario, setUsuario ] = useState<string>("")


  const Enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    

    if (usuario.length < 1)  {
      setLoading(false)
      setMensagem("Por favor insira um usuário.")
      setMensagemTag(true)
      return
    }

    buscaUsuario(usuario).then((res) => {
        setLoading(false)
        if (res === "encontrado") {
          navigate(`/usuario/${usuario}`)
          return
        } else if (res === "inexistente") {
          setMensagem("Não conseguimos identificar sua conta.")
          setMensagemTag(true)
          return 
        } else {
          setMensagem("Um erro inesperado aconteceu. Tente novamente mais tarde.")
          setMensagemTag(true)
        }
      })
  }


  return (
    <main className="w-full h-screen flex flex-row">
      <div className="w-full flex items-center justify-center h-full lg:w-3/6 bg-[#05478A]">
        <img src="/white-logo.svg" alt="Logo" className="w-5/6 md:w-4/6 lg:w-3/6" />
      </div>

      <div className="w-full flex flex-col items-center justify-center h-full lg:w-3/6">
        {loading ? (<Loading />) : (
          <>
            <h1 className="font-bold text-3xl mb-16 lg:text-4xl pb-4">Entrar</h1>
            <form onSubmit={Enviar} action="" className="flex flex-col w-3/4 md:w-2/3 lg:w-3/5">
              {mensagemTag && 
                <Mensagem mensagem={mensagem} fechaMensagem={fechaMensagem}
                />
              }
              <div className="flex flex-col w-full">
                  <label  className="text-xl mb-3" htmlFor="usuario">Usuário</label>
                  <div className="flex border-2 mb-4 border-[#6A6F73] active:border-[#05478A] rounded-md justify-center items-center p-2">
                    <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" id="usuario" placeholder="Digite aqui seu usuário do Github" className="w-full outline-none"/>
                  </div>
              </div>

              <button type="submit" className=" text-slate-50 font-bold text-2xl rounded-md p-2 lg:text-lg hover:bg-blue-900 hover:scale-95 transition-all bg-[#05478A]">Entrar</button>
            </form></>
              )}
      </div>
    </main>
  )
}

export default Home