import { APIUsuario } from "./api"

type Resposta = "encontrado" | "inexistente" | "erro"

export const buscaUsuario = async (usuario: string): Promise<Resposta> => {
  try {
    const res = await APIUsuario.get(`/${usuario}`, { 
      validateStatus: (status) => status === 200 || status === 404, 
    })
  
    if (res.status === 200) {
      return "encontrado"
    } else if (res.status === 404) {
      return "inexistente"
    } else {
      return "erro"
    }

  } catch (err) {
    return "erro"
  }
}