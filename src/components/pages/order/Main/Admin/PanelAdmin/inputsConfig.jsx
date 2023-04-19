import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import { BsFillCameraFill } from "react-icons/bs"

export const inputsConfig = [
  {
    name: "title",
    key: "1",
    Icon: <FaHamburger className="icon" />,
    placeholder: "Nom du produit (ex: Super Burger)",
    className: "input-title",
  },
  {
    name: "imageSource",
    key: "2",
    Icon: <BsFillCameraFill className="icon" />,
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    className: "input-imageSource",
  },
  {
    name: "price",
    key: "3",
    Icon: <MdOutlineEuro className="icon" />,
    placeholder: "Prix",
    className: "input-price",
  },
]
