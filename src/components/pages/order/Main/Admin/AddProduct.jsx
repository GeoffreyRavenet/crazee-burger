import React, { useState } from "react"
import { BsFillCameraFill } from "react-icons/bs"
import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import TextInput from "../../../../reusable-ui/TextInput.jsx"

export default function AddProduct() {
  const [product, setProduct] = useState({
    id: 100000000,
    imageSource: "/images/burger-vegan.png",
    title: "Burger 1",
    price: 5.297,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("handleSubmit")
  }

  const handleChange = (event) => {
    setProduct((product.title = event.target.value))
  }

  return (
    //<img src={product.imageSource} alt="newproduct" />
    <>
      <form action="">
        <TextInput
          Icon={<FaHamburger className="icon" />}
          value={product.title}
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
        />
        <TextInput
          Icon={<BsFillCameraFill className="icon" />}
          value={product.imageSource}
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <TextInput
          type="number"
          Icon={<MdOutlineEuro className="icon" />}
          value={product.price}
          onChange={handleChange}
          placeholder="Prix"
        />
        <button>Ajouter un nouveau produit au menu</button>
      </form>
    </>
  )
}
