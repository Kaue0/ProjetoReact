import axios from "axios"

export const APIUsuario = axios.create({
  baseURL: "https://api.github.com/users",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})



export const APIRepositorios = axios.create({
  baseURL: "https://api.github.com/repos",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})