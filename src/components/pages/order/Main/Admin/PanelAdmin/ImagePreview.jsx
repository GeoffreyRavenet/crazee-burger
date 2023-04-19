import styled from "styled-components"

export default function ImagePreview({ imageSource }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt="newproduct" />
      ) : (
        <span className="no-image">Aucune image</span>
      )}
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
  grid-area: image;
  justify-content: center;
  align-items: center;
  img {
    max-width: 200px;
    max-height: 145px;
  }

  :has(.no-image) {
    border: 1px solid #e4e5e9;
    border-radius: 5px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #93a2b1;
    text-align: center;
    display: flex;
    align-items: center;
  }
`
