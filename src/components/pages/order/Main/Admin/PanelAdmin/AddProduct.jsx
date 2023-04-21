import React, { useContext, useState } from "react"
import { isEmpty } from "lodash"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import SubmitMessage from "../../Menu/SubmitMessage.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"
import Form from "./Form.jsx"
import Button from "../../../../../reusable-ui/Button.jsx"

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

  //Affichage
  return (
    <Form product={product} inputRef={titleEditRef} inputsConfig={inputsConfig}>
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
