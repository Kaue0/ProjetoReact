import { useContext } from "react"
import ModalRepositorioContext from "../context/ModalRepositorioContext"
import { RepositorioProps } from "../types/repositorio"

interface CardProps {
  propriedades: RepositorioProps
}
const Card = ({ propriedades }: CardProps) => {
  const { exibir } = useContext(ModalRepositorioContext)
  
  return (
    <div className="w-full shadow-cardshadow rounded-md md:w-[30.6%] xl:w-[31.5%]">
      <h3 className="p-6 text-base font-bold cursor-pointer transition-all overflow-hidden" onClick={() => exibir(propriedades.name)}>
        {propriedades.name}
      </h3>
      <hr className="w-full text-[#0070E0]"/>
      <div className="p-2 lg:p-12 text-sm overflow-hidden flex flex-col gap-2 lg:gap-4 xl:px-10">
        <div className="overflow-hidden p-3">
          <p className="font-bold">Link</p>
          <a href={propriedades.html_url ? propriedades.html_url : ""}>
            <p className="underline text-sm overflow-hidden text-ellipsis">
              {propriedades.html_url ? propriedades.html_url : "Link indisponível"}
            </p>
          </a>
        </div>

        <div className="overflow-hidden p-3">
          <p className="font-bold">Descrição</p>
          <p className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">{propriedades.description ? propriedades.description : "Esse repositório não possui descrição."}</p>
        </div>
      </div>
    </div>
  )
}

export default Card