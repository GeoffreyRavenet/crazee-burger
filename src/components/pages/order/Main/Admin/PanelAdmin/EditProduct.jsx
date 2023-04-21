import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"
import Form from "./Form.jsx"

export default function EditProduct() {
  const { selectedProduct, setSelectedProduct, titleEditRef } = useContext(OrderContext)
  const inputsConfig = getInputsConfig(selectedProduct)

  const handleChange = (event) => {
    const { name, value } = event.target
    setSelectedProduct({ ...selectedProduct, [name]: value })
    console.log(selectedProduct.imageSource)
  }

  //<span>Cliquer sur un produit pour le modifier</span>
  return (
    <Form product={selectedProduct} inputRef={titleEditRef} inputsConfig={inputsConfig}>
      <EditProductStyled>
        Cliquer sur un produit du menu pour le modifier en temps réel
      </EditProductStyled>
    </Form>
  )
}

const EditProductStyled = styled.span`
  font-family: "Open Sans";
  font-size: 15px;
  color: #ffa01b;
`
