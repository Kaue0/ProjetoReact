import { UsuarioProps } from "../types/usuario"

interface PerfilProps {
  perfil: UsuarioProps
}

const Perfil = ({ perfil }: PerfilProps) => {
  return (
    <section className="p-[3%]">
      <h2 className="font-bold text-xl mb-6 md:text-2xl md:mb-8">Informações do Perfil</h2>
      <div className="grid grid-cols-3 xl:grid-cols-5 lg:gap-y-2 gap-4 xl:gap-x-6 w-full border border-[#e5e7eb] border-solid rounded-[12px] p-2 sm:p-4 md:p-3 lg:p-8 lg:w-3/5 md:w-3/4 drop-shadow-md shadow-md">
        <img src={perfil.avatar_url} alt={perfil.name} className=" sm:row-span-2 w-full my-auto rounded-xl"/>
        <div className="col-span-2 sm:row-span-1 flex flex-col justify-center items-baseline">
          <p className="text-[#6A6F73] text-sm mb-0.5">Nome</p>
          <p className="font-bold mb-2 text-base">{perfil.name}</p>
        </div>

        <div className="col-span-3 sm:col-span-2 xl:col-span-4">
          <p className="text-[#6A6F73] text-sm mb-0.5">Bio</p>
          <p className="font-bold mb-2 text-base text-sm text-justify pr-2">{perfil.bio ? perfil.bio : "Este usuário não possui bio."}</p>
        </div>
      </div>
    </section>
  )
}

export default Perfil