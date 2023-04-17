import { createContext } from "react"

export default createContext({
  isToggle: false,
  setisToggle: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  // partie avec mes produits
  products: [],
  setProducts: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
})
