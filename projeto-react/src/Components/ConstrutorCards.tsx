import { RepositorioProps } from "../types/repositorio"
import Loading from "./Loading"
import Card from "./Card"

interface ConstrutorCardsProps {
  arrayRepos: RepositorioProps[]
  loading: boolean
  pagina: number
  totalRepos: number
}

const ConstrutorCards = ({ arrayRepos, loading, pagina, totalRepos }: ConstrutorCardsProps) => {
  return (
    <div className={`w-full flex flex-row flex-wrap gap-4 mb-4 mt-6 xl:gap-6`}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {arrayRepos.length === 0 ? (
            <p className="text-center font-bold py-6 mx-auto">Este usuário não possui repositórios ainda.</p>
          ) : (
            <>
            {arrayRepos.slice((pagina - 1) * 3, ((pagina - 1) * 3 + 3) <= totalRepos 
            ? ((pagina - 1) * 3 + 3)
            : totalRepos)
            .map((repo) => (
                <Card key={repo.id} propriedades={repo} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default ConstrutorCards