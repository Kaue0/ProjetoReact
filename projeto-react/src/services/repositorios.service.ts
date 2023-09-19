import { RepositorioProps } from "../types/repositorio";
import { UsuarioProps } from "../types/usuario";
import { APIRepositorios, APIUsuario } from "./api"

type Resposta = "encontrado" | "inexistente" | "erro"

interface RepositorioDaAPI {
  id: number;
  name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  language: string | null;
}

export const ConstrutorRepositorio = async (usuario: string, repositorio: string): Promise<[Resposta, RepositorioProps]> => {
  try {
    const res = await APIRepositorios.get(`/${usuario}/${repositorio}`, {validateStatus: (status) => status === 200 || status === 404,})

    const propriedades = { id: res.data.id, name: res.data.name, description: res.data.description, html_url: res.data.html_url, language: res.data.language, private: res.data.private,} as RepositorioProps

    if (res.status === 200) {
      return [ "encontrado", propriedades ]
    }else if (res.status === 404) {
      return [ "inexistente", propriedades ]
    } else {
      return [ "erro", propriedades ]
    }
  } catch (err) {
    return [ 
      "erro", {} as RepositorioProps 
    ]
  }
}

export const ConstrutorListaRepositorios = async (usuario: string, pagina: number): Promise<[Resposta, RepositorioProps[]]> => {
  try {
    const res = await APIUsuario.get(`/${usuario}/repos?per_page=3&&page=${pagina}`, {
      validateStatus: (status) => status === 200 || status === 404,
    })

    const repositorioAPI = res.data.map((repositorio: RepositorioDaAPI) => {
      return {
        id: repositorio.id,
        name: repositorio.name,
        description: repositorio.description,
        html_url: repositorio.html_url,
        language: repositorio.language,
        private: repositorio.private,} as unknown as RepositorioProps[]
    })

    if (res.status === 200) {
      return [ "encontrado", repositorioAPI ]
    }else if (res.status === 404) {
      return [ "inexistente", repositorioAPI ]
    }else {
      return [ "erro", repositorioAPI ]
    }
  } catch (err) {
    return [ 
      "erro", [] as RepositorioProps[] 
    ]
  }
}

export const RepositoriosDoPerfil = async (usuario: string): Promise<[Resposta, UsuarioProps]> => {
  try {
    const res = await APIUsuario.get(`/${usuario}`, {
      validateStatus: (status) => status === 200 || status === 404,
    })

    const propriedades = {
      avatar_url: res.data.avatar_url,
      name: res.data.name,
      bio: res.data.bio,
      repos: res.data.public_repos,
    } as UsuarioProps

    if (res.status === 200) {
      return [ "encontrado", propriedades ]
    } else if (res.status === 404) {
      return [ "inexistente", propriedades ]
    } else {
      return [ "erro", propriedades ]
    }
  } catch (err) {
    return [
       "erro", {} as UsuarioProps 
    ]
  }
}