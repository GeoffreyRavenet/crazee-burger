import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../../context/OrderContext.jsx"
import ImagePreview from "./ImagePreview.jsx"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import { getInputsConfig } from "./inputsConfig.jsx"

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
    <EditProductStyled>
      <ImagePreview imageSource={selectedProduct.imageSource} />

      {inputsConfig.map((item, index) => (
        <TextInput
          name={item.name}
          key={index}
          Icon={item.Icon}
          value={item.value}
          onChange={handleChange}
          placeholder={item.placeholder}
          className={item.className}
          version="normalgray"
          ref={item.name === "title" ? titleEditRef : null}
        />
      ))}
      <div className="footerForm">
        Cliquer sur un produit du menu pour le modifier en temps réel
      </div>
    </EditProductStyled>
  )
}

const EditProductStyled = styled.div`
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
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #ffa01b;
  }
`
