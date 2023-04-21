import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"
import Form from "./Form.jsx"

export default function EditProduct() {
  const { selectedProduct, setSelectedProduct, titleEditRef, handleEdit } = useContext(OrderContext)
  const inputsConfig = getInputsConfig(selectedProduct)

  const handleChange = (event) => {
    const { name, value } = event.target
    setSelectedProduct({ ...selectedProduct, [name]: value })
    handleEdit(event, selectedProduct)
  }

  //<span>Cliquer sur un produit pour le modifier</span>
  return (
    <Form
      product={selectedProduct}
      inputRef={titleEditRef}
      inputsConfig={inputsConfig}
      handleChange={handleChange}
    >
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
