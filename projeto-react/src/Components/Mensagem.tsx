interface MensagemProps {
  mensagem: string
  fechaMensagem: () => void
}

const Mensagem = ({ mensagem, fechaMensagem }: MensagemProps) => {

  return (
    <div className="relative rounded-[20px] w-[100%] bg-[#FC8621] text-slate-100 flex mb-16 pl-6 py-3">
      <img src="/message-icon.svg" alt="message-icon" className=" absolute left-4 -top-4 sm:w-1/6 sm:w-[13%] md:left-2 md:-top-3 md:w-1/6 lg:left-1 lg:-top-5 xl:w-16" />
      <button type="button" onClick={fechaMensagem} className="absolute top-4 right-2 flex items-center justify-center w-6">
        <img src="/x.svg" className=""></img>
      </button>
      <div className="ml-16 mr-3">
        <h3 className="font-semibold text-xl">Ops!</h3>
        <p className="pt-1 text-sm lg:text-md ">{mensagem}</p>
      </div>
    </div>
  )
}

export default Mensagem
