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

  /*if (selectedProduct.title === "") {
    return <EditProductStyled className="toto"></EditProductStyled>
  }*/
  return (
    <EditProductStyled>
      <Form
        product={selectedProduct}
        inputRef={titleEditRef}
        inputsConfig={inputsConfig}
        handleChange={handleChange}
      >
        Cliquer sur un produit du menu pour le modifier{" "}
        <span className="underline">en temps réel</span>
      </Form>
    </EditProductStyled>
  )
}

const EditProductStyled = styled.span`
  font-family: "Open Sans";
  font-size: 15px;
  color: #ffa01b;
  .underline {
    text-decoration: underline;
  }
`
