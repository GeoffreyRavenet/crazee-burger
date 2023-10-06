import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"
import Form from "./Form.jsx"
import { theme } from "../../../../../../theme/index.js"
//import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths.js"

export default function EditProduct() {
  const { selectedProduct, setSelectedProduct, titleEditRef, handleEdit, handleEditBasket } =
    useContext(OrderContext)
  const inputsConfig = getInputsConfig(selectedProduct)

  const handleChange = (event) => {
    const { name, value } = event.target
    const productToEdit = {
      ...selectedProduct,
      [name]: value,
    }
    setSelectedProduct(productToEdit)
    handleEdit(event, selectedProduct)
    handleEditBasket(event, selectedProduct)
  }

  return (
    <EditProductStyled>
      <Form
        product={selectedProduct}
        inputRef={titleEditRef}
        inputsConfig={inputsConfig}
        handleChange={handleChange}
      >
        <div className="footer">
          Cliquer sur un produit du menu pour le modifier{" "}
          <span className="underline">en temps réel</span>
        </div>
      </Form>
    </EditProductStyled>
  )
}

const EditProductStyled = styled.span`
  font-family: "Open Sans";
  font-size: ${theme.fonts.size.SM};
  color: ${theme.colors.primary};
  .footer {
    line-height: 1;
    //height: 35px;
  }
  .underline {
    text-decoration: underline;
  }
`
