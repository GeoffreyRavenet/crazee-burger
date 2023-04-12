import React, { useState } from "react"
import { BsFillCameraFill } from "react-icons/bs"
import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import styled from "styled-components"
import TextInput from "../../../../reusable-ui/TextInput.jsx"

export default function AddProduct() {
  const [product, setProduct] = useState({
    id: 100000000,
    imageSource: "/images/burger-vegan.png",
    title: "",
    price: "",
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
    //
    <>
      <AddProductStyled action={handleSubmit}>
        <div className="img-add-product">
          <img src={product.imageSource} alt="newproduct" />
        </div>
        <TextInput
          Icon={<FaHamburger className="icon" />}
          value={product.title}
          onChange={handleChange}
          placeholder="Nom du produit (ex: Super Burger)"
          className="input-title"
        />
        <TextInput
          Icon={<BsFillCameraFill className="icon" />}
          value={product.imageSource}
          onChange={handleChange}
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          className="input-imageSource"
        />
        <TextInput
          type="number"
          Icon={<MdOutlineEuro className="icon" />}
          value={product.price}
          onChange={handleChange}
          placeholder="Prix"
          className="input-price"
        />
        <button>Ajouter un nouveau produit au menu</button>
      </AddProductStyled>
    </>
  )
}
const AddProductStyled = styled.form`
  margin-top: 31px;
  margin-left: 71px;
  width: 680px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 35px 35px 35px 35px;
  gap: 8px 20px;
  grid-auto-flow: row;
  justify-content: space-around;
  grid-template-areas:
    "image input1 input1 "
    "image input2 input2 "
    "image input3 input3 "
    ". button .";

  button {
    grid-area: button;
    width: 275px;
    height: 34px;
    background: #60bd4f;
    border: 1px solid #60bd4f;
    border-radius: 5px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;

    color: #ffffff;
  }
  .img-add-product {
    grid-area: image;
    justify-content: center;
    align-items: center;
    img {
      max-width: 200px;
      max-height: 145px;
    }
  }
  .input-title {
    grid-area: input1;
  }
  .input-imageSource {
    grid-area: input2;
  }
  .input-price {
    grid-area: input3;
  }
  div:has(input) {
    margin: 0;
    background-color: #f5f5f7;
    input {
      border-radius: 5px;
      background-color: #f5f5f7;
      ::placeholder {
        background-color: #f5f5f7;
      }
    }
  }
`
