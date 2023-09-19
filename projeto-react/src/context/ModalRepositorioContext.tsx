import { createContext } from "react"

type ModalRepositorioContextType = {
  exibir: (name: string) => void
}
const ModalRepositorioContext = createContext<ModalRepositorioContextType>({exibir: () => {}})
export default ModalRepositorioContext