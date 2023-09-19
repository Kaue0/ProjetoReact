import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Pagina404 from "../pages/Pagina404.tsx";
import Usuario from "../pages/Usuario.tsx";
import Home from "../pages/Home.tsx";
import App from "../App.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', 
        element: <Home /> 
      },
      {
        path: '/usuario/:userName', 
        element: <Usuario /> 
      },
      {
        path: '/*', 
        element: <Pagina404 /> 
      }
    ]
  }
])

const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router
