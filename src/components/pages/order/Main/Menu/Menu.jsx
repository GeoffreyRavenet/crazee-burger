import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext.jsx"
import { formatPrice } from "../../../../../utils/maths.js"
import Card from "../../../../reusable-ui/Card.jsx"
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx"
import EmptyMenuClient from "./EmptyMenuClient.jsx"
import { useState } from "react"

export default function Menu() {
  //State
  const [isSelected, setIsSelected] = useState()
  const {
    isAdmin,
    products,
    handleDelete,
    resetMenu,
    setSelectedProduct,
    titleEditRef,
    setCurrentTabSelected,
  } = useContext(OrderContext)
  //Comportements
  const handleSelectedCard = (productIdSelected) => {
    // 1 . copie du tableau
    const productsCopy = [...products]
    // 2 . manip de la copie du tableau
    const selectedProductUpdated = productsCopy.filter((item) => item.id === productIdSelected)
    // 3 . update du state
    setSelectedProduct(...selectedProductUpdated)
    setCurrentTabSelected("edit")
    titleEditRef.current.focus()
    setIsSelected(productIdSelected)
  }

  //Affichage
  if (products.length === 0) {
    if (!isAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={resetMenu} />
  }

  return (
    <MenuStyled>
      {products.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          imageSource={imageSource}
          title={title}
          price={formatPrice(price)}
          onDelete={() => handleDelete(id)}
          hasDeleteButton={isAdmin}
          handleSelectedCard={() => handleSelectedCard(id)}
          version={isSelected === id && isAdmin ? "SelectedCard" : "normal"}
        />
      ))}
    </MenuStyled>
  )
}
const MenuStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  overflow-y: scroll;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;

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
