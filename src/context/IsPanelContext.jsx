import { createContext } from "react"

export default createContext({
  isOpen: false,
  setIsOpen: () => {},
  isTabMenu: "add",
  setIsTabMenu: () => {},
})
