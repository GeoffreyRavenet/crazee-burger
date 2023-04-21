import React, { useContext, useState } from "react"
import styled from "styled-components"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import { isEmpty } from "lodash"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"
import SubmitMessage from "../../Menu/SubmitMessage.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"

const EMPTY_PRODUCT = {
  id: "100000000",
  imageSource: "",
  title: "",
  price: "",
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
}
export default function AddProduct() {
  //state
  const { handleAdd, product, setProduct } = useContext(OrderContext)
  const [isSubmited, setIsSubmited] = useState(false)
  const inputsConfig = getInputsConfig(product)

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    const newProductToAdd = {
      ...product,
      id: new Date().getTime(),
      imageSource: isEmpty(product.imageSource) ? "/images/coming-soon.png" : product.imageSource,
      price: isEmpty(product.price) ? "" : parseFloat(product.price),
    }
    handleAdd(newProductToAdd)
    setProduct(EMPTY_PRODUCT)

    displaySubmitMessage()
  }

  const displaySubmitMessage = () => {
    setIsSubmited(true)
    setTimeout(() => {
      setIsSubmited(false)
    }, 2000)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
  }

  //Affichage
  return (
    <AddProductStyled onSubmit={handleSubmit}>
      <ImagePreview imageSource={product.imageSource} />
      {inputsConfig.map((item, index) => (
        <TextInput
          name={item.name}
          key={index}
          Icon={item.Icon}
          value={item.value}
          onChange={handleChange}
          placeholder={item.placeholder}
          className={item.className}
          type={item.type}
          version="normalgray"
        />
      ))}
      <div className="footerForm">
        <button type="submit">Ajouter un nouveau produit au menu</button>
        {isSubmited && <SubmitMessage />}
      </div>
    </AddProductStyled>
  )
}
const AddProductStyled = styled.form`
  width: 680px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 35px);
  gap: 8px 20px;
  grid-template-areas:
    "image input1 "
    "image input2  "
    "image input3 "
    ". button";

  .input-title {
    grid-area: input1;
  }
  .input-imageSource {
    grid-area: input2;
  }
  .input-price {
    grid-area: input3;
  }

  .footerForm {
    grid-area: button;
    display: flex;
    align-items: center;
    button {
      cursor: pointer;
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
      :active {
        background: #fff;
        color: #60bd4f;
      }
    }
  }
`
