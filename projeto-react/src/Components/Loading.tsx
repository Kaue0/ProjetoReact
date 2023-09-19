const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="relative w-3/6 lg:w-[50%]">
        <div className="w-32 h-32 m-auto ">  
          <img src="/loading-circle.svg" alt="Loading" className="w-full h-full animate-spin" />
        </div>
      </div>
      <h2 className="mt-12 font-bold  text-2xl lg:text-3xl text-blue-600">Carregando...</h2>
    </div>
  )
}

export default Loading