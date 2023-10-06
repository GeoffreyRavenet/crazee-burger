import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import Card from "../../../../reusable-ui/Card.jsx"
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx"
import EmptyMenuClient from "./EmptyMenuClient.jsx"
import { checkIfProductIsClicked } from "./helper.js"
import { isEmpty } from "../../../../../utils/array.js"

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"

export default function Menu() {
  //State
  const {
    isAdmin,
    products,
    handleDelete,
    resetMenu,
    handleDeleteBasket,
    selectedProduct,
    handleSelectedCard,
    handleAddToBasket,
  } = useContext(OrderContext)
  //Comportements

  const handleAddToCart = (event, idProductToAdd) => {
    event.stopPropagation()
    handleAddToBasket(idProductToAdd)
  }
  const handleDeleteCart = (event, id) => {
    event.stopPropagation()
    handleDelete(id)
    handleDeleteBasket(id)
  }

  //Affichage
  if (isEmpty(products)) {
    if (!isAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  return (
    <MenuStyled>
      {products.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
          title={title}
          price={formatPrice(price)}
          onDelete={(event) => handleDeleteCart(event, id)}
          hasDeleteButton={isAdmin}
          onclick={isAdmin ? () => handleSelectedCard(id) : null}
          isHoverable={isAdmin}
          isSelected={checkIfProductIsClicked(id, selectedProduct.id)}
          onAddToCart={(event) => handleAddToCart(event, id)}
        />
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  display: grid;
  justify-items: center;
  //align-items: center;
  overflow-y: scroll;

  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  // box-shadow: inset 0px 8px 20px 8px rgba(0, 0, 0, 0.2);

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 10px;
  }
`
