import React, { useContext, useState } from "react"
import { BsFillCameraFill } from "react-icons/bs"
import { FaHamburger } from "react-icons/fa"
import { MdOutlineEuro } from "react-icons/md"
import { FiCheck } from "react-icons/fi"
import styled from "styled-components"
import MainContext from "../../../../../context/MainContext.jsx"
import TextInput from "../../../../reusable-ui/TextInput.jsx"
import { isEmpty } from "lodash"

export default function AddProduct() {
  const { products, setProducts } = useContext(MainContext)

  const initstate = {
    id: 100000000,
    imageSource: "",
    title: "",
    price: "",
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  }
  const [product, setProduct] = useState(initstate)

  const handleSubmit = (event) => {
    event.preventDefault()
    const cpProduct = {
      ...product,
      id: parseInt(new Date().getTime()),
      imageSource: isEmpty(product.imageSource) ? "/images/coming-soon.png" : product.imageSource,
      price: isEmpty(product.price) ? "NaN" : parseFloat(product.price),
    }
    setProducts([cpProduct, ...products])
    setProduct(initstate)
  }

  return (
    //
    <AddProductStyled onSubmit={handleSubmit}>
      <div className="img-add-product">
        {product.imageSource ? (
          <img src={product.imageSource} alt="newproduct" />
        ) : (
          <span className="no-image">Aucune image</span>
        )}
      </div>
      <TextInput
        Icon={<FaHamburger className="icon" />}
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        placeholder="Nom du produit (ex: Super Burger)"
        className="input-title"
      />
      <TextInput
        Icon={<BsFillCameraFill className="icon" />}
        value={product.imageSource}
        onChange={(e) => setProduct({ ...product, imageSource: e.target.value })}
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        className="input-imageSource"
      />
      <TextInput
        Icon={<MdOutlineEuro className="icon" />}
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        placeholder="Prix"
        className="input-price"
      />
      <button type="submit">Ajouter un nouveau produit au menu</button>
      <div>
        <FiCheck />
        Ajouté avec succès !
      </div>
    </AddProductStyled>
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
  .img-add-product:has(.no-image) {
    border: 1px solid #e4e5e9;
    border-radius: 5px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #93a2b1;
    text-align: center;
    display: flex;
    align-items: center;
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
