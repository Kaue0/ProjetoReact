import { useEffect, useState, useContext } from "react"
import { ConstrutorRepositorio } from "../services/repositorios.service"
import Loading from "./Loading"
import ModalRepositorioContext from "../context/ModalRepositorioContext"
import ParagrafosModal from "./ParagrafosModal"
import { RepositorioProps } from "../types/repositorio"

interface Props {
  usuario: string
  nomeRepositorio: string
}

const RepoModal = ({ usuario, nomeRepositorio }: Props) => {
  const { exibir } = useContext(ModalRepositorioContext)
  const [ propriedades, setPropriedades ] = useState<RepositorioProps>()

  useEffect(() => {
    ConstrutorRepositorio(usuario, nomeRepositorio)
    .then((propriedades) => {setPropriedades(propriedades[1])})
  }, [ usuario, nomeRepositorio ])

  return (
    <section className="w-full h-full flex flex-col items-center p-5 mb-6">
      {propriedades ? (
        <>
          <h3 className="w-full font-bold text-2xl ml-6 mt-6 mb-16">Especificações</h3>

          <div className="w-full p-8 sm:w-4/5 md:w-[60%] xl:w-[40%] rounded-gl shadow-cardshadow ">
            <header className="flex justify-between gap-2 px-2 py-6">
              <h2 className="text-[#202E49] text-base text-black font-bold xl-text-xl text-lg">{propriedades.name ? propriedades.name : "Sem título"}</h2>
              <button onClick={() => exibir(nomeRepositorio)} type="button" className="flex items-center justify-center">
                <img src="/x.svg" className="invert w-3 h-4"/>
              </button>
            </header>
            <hr className="text-[#BDBDBD]" />
            <section className="pt-4 text-sm flex px-6 flex-col gap-4 sm:text-base">
              <ParagrafosModal name="Link" value={propriedades.html_url ? propriedades.html_url : "Link indisponível"} html_url/>
              <ParagrafosModal name="Privacidade" value={propriedades.private ? "Privado" : "Publico"} />
              <ParagrafosModal name="Linguagem" value={propriedades.language ? propriedades.language : "Linguagens indisponíveis"} />
              <ParagrafosModal name="Descrição" value={propriedades.description ? propriedades.description : "Este repositório não possui descrição"} />
            </section>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default RepoModal