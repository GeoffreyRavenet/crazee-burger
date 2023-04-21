import React, { useContext } from "react"
import { isEmpty } from "lodash"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import SubmitMessage from "../../Menu/SubmitMessage.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"
import Form from "./Form.jsx"
import Button from "../../../../../reusable-ui/Button.jsx"
import { useSuccessMessage } from "../../../../../../hooks/useDisplaySubmitMessage.js"

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
  const { handleAdd, product, setProduct, titleEditRef } = useContext(OrderContext)
  const inputsConfig = getInputsConfig(product)
  const { isSubmited, displaySubmitMessage } = useSuccessMessage()
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

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...setProduct, [name]: value })
    console.log(setProduct.imageSource)
  }

  //Affichage
  return (
    <Form
      product={product}
      inputRef={titleEditRef}
      inputsConfig={inputsConfig}
      handleChange={handleChange}
    >
      <Button
        type="submit"
        label="Ajouter un nouveau produit au menu"
        onClick={handleSubmit}
        version="form"
      />
      {isSubmited && <SubmitMessage />}
    </Form>
  )
}
