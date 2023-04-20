import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import { inputsConfig } from "./inputsConfig.jsx"

export default function EditProduct() {
  const { selectedProduct, setSelectedProduct, isAdmin } = useContext(OrderContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    setSelectedProduct({ ...selectedProduct, [name]: value })
  }
  //<span>Cliquer sur un produit pour le modifier</span>
  return (
    <EditProductStyled>
      <ImagePreview imageSource={selectedProduct.imageSource} />
      {inputsConfig.map((item, index) => (
        <TextInput
          name={item.name}
          key={index}
          Icon={item.Icon}
          value={selectedProduct[item.name]}
          onChange={handleChange}
          placeholder={item.placeholder}
          className={item.className}
          version="normalgray"
        />
      ))}
      <div className="footerForm">
        <button type="submit">Ajouter un nouveau produit au menu</button>
      </div>
    </EditProductStyled>
  )
}

const EditProductStyled = styled.div`
  span {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;

    color: #747b91;
  }
`
