import styled from "styled-components"
import { theme } from "../../../../../../theme/index.js"
import { useEffect, useState } from "react"
import { checkImageExistsPromise } from "../../../../../../utils/isImage.js"

export default function ImagePreview({ imageSource }) {
  /*const isURL = (value) => {
    try {
      new URL(value)
      return true
    } catch (error) {
      return false
    }
  }*/
  const [imageExists, setImageExists] = useState(false)
  useEffect(() => {
    checkImageExistsPromise(imageSource).then((result) => {
      setImageExists(result)
    })
  }, [imageSource])
  return (
    <ImagePreviewStyled>
      {imageExists && imageSource ? (
        <img src={imageSource} alt="newproduct" />
      ) : (
        <span className="no-image">Aucune image</span>
      )}
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100px;
    max-height: 100px;
  }

  :has(.no-image) {
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};

    font-family: "Open Sans";
    font-style: normal;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P0};
    line-height: 24px;

    color: ${theme.colors.greySemiDark};
    text-align: center;
    display: flex;
    align-items: center;
  }
`
