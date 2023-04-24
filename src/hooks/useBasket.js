import { useState } from "react"
import { fakeMenu1 } from "../fakeData/fakeMenu.js"

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeMenu1)

  return { basket, setBasket }
}
