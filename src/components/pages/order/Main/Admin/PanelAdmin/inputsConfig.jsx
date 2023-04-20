import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import { BsFillCameraFill } from "react-icons/bs"

export const inputsConfig = [
  {
    name: "title",
    key: "1",
    Icon: <FaHamburger />,
    placeholder: "Nom du produit (ex: Super Burger)",
    className: "input-title",
    type: "text",
  },
  {
    name: "imageSource",
    key: "2",
    Icon: <BsFillCameraFill />,
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    className: "input-imageSource",
    type: "url",
  },
  {
    name: "price",
    key: "3",
    Icon: <MdOutlineEuro />,
    placeholder: "Prix",
    className: "input-price",
    type: "text",
  },
]
