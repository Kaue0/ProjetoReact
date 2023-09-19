import { BsArrowLeft, BsArrowRight} from "react-icons/bs"
import { Dispatch, SetStateAction } from "react"

interface BotaoPaginasProps {
  pagina: number
  setPaginas: Dispatch<SetStateAction<number>>
  totalRepos: number
  ProximaPagina: () => void
}

const BotaoPaginas = ({ pagina, setPaginas, totalRepos, ProximaPagina}: BotaoPaginasProps) => {
  return (
    <div className="w-full flex justify-end gap-4 pr-12">
      <p className="flex justify-end">{pagina * 3 > totalRepos ? totalRepos : pagina * 3} de {totalRepos}</p>
      <div className="flex gap-3 justify-start">
        <button onClick={() => setPaginas((prevPage) => prevPage - 1)} className="flex outline outline-[2px] justify-center items-center p-1 outline-[#6A6F73] rounded-[5px]">
          <BsArrowLeft />
        </button>
        <button disabled={pagina * 3 >= totalRepos} onClick={ProximaPagina} className="flex outline outline-[2px] justify-center items-center p-1 outline-[#6A6F73]  rounded-[5px]">
          <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default BotaoPaginas