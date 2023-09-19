import { useEffect, useState } from "react"
import { ConstrutorListaRepositorios } from "../services/repositorios.service"
import ConstrutorCards from "./ConstrutorCards"
import BotaoPaginas from "./BotaoPaginas"
import { RepositorioProps } from "../types/repositorio"

interface RepositorioViewProps {
  usuario: string
  totalRepos: number
}

const RepositorioView = ({ usuario, totalRepos }: RepositorioViewProps) => {
  const [ pagina, setPagina ] = useState(0)
  const [ repositorios, setRepositorios ] = useState<RepositorioProps[]>([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    ConstrutorListaRepositorios(usuario, 1)
    .then((repos) => {setRepositorios(repos[1]), setLoading(false), setPagina(1)})
  }, [ usuario ])

  const proximaPagina = () => {
    setLoading(true)
    if (repositorios!.length > pagina * 3) {
      setPagina((prevPagina) => prevPagina + 1)
      setLoading(false)
      return
    }
    ConstrutorListaRepositorios(usuario, pagina + 1).then((propriedades) => {
      setRepositorios((prevPagina) => [ ...prevPagina!, ...propriedades[1] ])
      setPagina((prevPagina) => prevPagina + 1)
      setLoading(false)
    })
  }

  return (
    <section className="p-8">
      <h2 className="font-bold mb-4 text-xl md:text-2xl xl:text-3xl">Repositórios</h2>
      <div className="w-full flex flex-col">
        <BotaoPaginas pagina={pagina} setPaginas={setPagina} totalRepos={totalRepos} ProximaPagina={proximaPagina} />
        <ConstrutorCards arrayRepos={repositorios} loading={loading} pagina={pagina} totalRepos={totalRepos}/>
      </div>
    </section>
  )
}

export default RepositorioView