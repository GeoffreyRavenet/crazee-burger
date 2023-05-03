import React, { useContext } from "react"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import SubmitMessage from "../../Menu/SubmitMessage.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"
import Form from "./Form.jsx"
import Button from "../../../../../reusable-ui/Button.jsx"
import { useSuccessMessage } from "../../../../../../hooks/useDisplaySubmitMessage.js"
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js"

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
      imageSource: product.imageSource,
      price: product.price,
    }
    handleAdd(newProductToAdd)
    setProduct(EMPTY_PRODUCT)

    displaySubmitMessage()
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
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
