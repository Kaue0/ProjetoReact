import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="py-7 pl-[5vh] h-[10vh] bg-slate-50 w-full flex items-center">
      <Link to="/">
        <img src="/blue-logo.svg" alt="Logo"/>
      </Link>
    </header>
  )
}

export default Header