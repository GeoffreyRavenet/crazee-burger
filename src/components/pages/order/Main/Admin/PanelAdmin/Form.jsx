import React from "react"
import TextInput from "../../../../../reusable-ui/TextInput.jsx"
import styled from "styled-components"
import ImagePreview from "./ImagePreview.jsx"

export default function Form({ product, inputRef, inputsConfig, handleChange, children }) {
  return (
    <FormStyled>
      <ImagePreview imageSource={product.imageSource} />

      {inputsConfig.map((item, index) => (
        <TextInput
          name={item.name}
          key={index}
          Icon={item.Icon}
          value={item.value}
          placeholder={item.placeholder}
          className={item.className}
          version="normalgray"
          onChange={handleChange}
          ref={item.name === "title" ? inputRef : null}
        />
      ))}
      <div className="footerForm">{children}</div>
    </FormStyled>
  )
}

const FormStyled = styled.div`
  width: 680px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 35px);
  gap: 8px 20px;
  grid-template-areas:
    "image input1 "
    "image input2  "
    "image input3 "
    ". footer";

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
    grid-area: footer;
    display: flex;
    align-items: center;
  }
`
