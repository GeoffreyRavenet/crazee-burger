import { createContext } from "react"

export default createContext({
  isToggle: false,
  setisToggle: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},
  isTabMenu: "add",
  setIsTabMenu: () => {},
})
