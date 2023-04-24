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
    setIsCollapsed,
    setSelectedProduct,
    titleEditRef,
    setCurrentTabSelected,
    setBasket,
    basket,
    handleBasketDelete,
  } = useContext(OrderContext)
  //Comportements
  const handleAddToCart = (productId) => {
    const cpProduct = [...products]
    const cpBasket = [...basket]
    const ProductToAdd = cpProduct.filter((item) => item.id === productId)
    ProductToAdd[0].quantity = 1
    const newProductToBasket = cpBasket.concat(ProductToAdd)

    const completList = Object.values(
      newProductToBasket.reduce((acc, article) => {
        acc[article.id] ? (acc[article.id].quantity += 1) : (acc[article.id] = { ...article })
        return acc
      }, {})
    )

    setBasket(completList)
  }

  const handleSelectedCard = async (productIdSelected) => {
    /* // 1 . copie du tableau
    const productsCopy = [...products]
    // 2 . manip de la copie du tableau
    const selectedProductUpdated = productsCopy.filter((item) => item.id === productIdSelected)
    // 3 . update du state
    setSelectedProduct(...selectedProductUpdated)
    setCurrentTabSelected("edit")

    setIsSelected(productIdSelected)
    titleEditRef.current.focus()*/

    if (!isAdmin) return

    await setIsCollapsed(false)
    await setCurrentTabSelected("edit")
    const productClickedOn = products.find((product) => product.id === productIdSelected)
    await setSelectedProduct(productClickedOn)
    await setIsSelected(productIdSelected)
    titleEditRef.current.focus()
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
          onDelete={() => {
            handleDelete(id)
            handleBasketDelete(id)
          }}
          hasDeleteButton={isAdmin}
          handleSelectedCard={() => handleSelectedCard(id)}
          onAddToCart={() => handleAddToCart(id)}
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
