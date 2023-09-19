import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { RepositoriosDoPerfil } from "../services/repositorios.service"
import Loading from "../Components/Loading"
import Header from "../Components/Header"
import RepositorioView from "../Components/RepositorioView"
import ModalRepositorioContext from "../context/ModalRepositorioContext"
import RepoModal from "../Components/RepoModal"
import Perfil from "../Components/Perfil"
import { UsuarioProps } from "../types/usuario"

const Usuario = () => {
  const [ usuario, setUsuario ] = useState<UsuarioProps | null>(null)
  const { userName } = useParams<{ userName: string }>()
  const [ modal, setModal ] = useState(false)
  const [ modalTitulo, setModalTitulo ] = useState("")
  const navigate = useNavigate()

  const exibir = (nome: string) => {
    setModalTitulo(nome) 
    setModal((prev) => !prev)
  }

  useEffect(() => {
    if (userName) {
      RepositoriosDoPerfil(userName).then((propriedades) => {
        if (propriedades[0] === "inexistente" || propriedades[0] === "erro") {
          navigate("/404")
        }
        setUsuario(propriedades[1])
      })
      return
    }
    navigate("/404")
  }, [ navigate, userName ])

  return (
    <ModalRepositorioContext.Provider value={{ exibir }}>
      <main className={`w-full min-h-screen bg-[#a4c8e180]/[.3] flex flex-col items-center ${modal && "max-md:h-screen"} ${!usuario && "h-screen"}`}>
        {usuario ? (
          <>
            <Header />
            <div className="w-[90%] h-full bg-white box-border shadow-cardshadow rounded-xl my-8 md:my-16">
              <div className={`${modal ? "hidden" : "flex"} flex-col`}>
                <Perfil perfil={usuario} />
                <RepositorioView usuario={userName!} totalRepos={usuario.repos} />
              </div>
              {modal && <RepoModal usuario={userName!} nomeRepositorio={modalTitulo} />}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </main>
    </ModalRepositorioContext.Provider>
  )
}

export default Usuario