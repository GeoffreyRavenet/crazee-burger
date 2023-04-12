import { useContext } from "react"
import styled from "styled-components"
import MainContext from "../../../../context/MainContext.jsx"
import OrderContext from "../../../../context/OrderContext.jsx"
import { formatPrice } from "../../../../utils/maths.js"
import Card from "../../../reusable-ui/Card"

export default function Menu() {
  const { products, setProducts } = useContext(MainContext)
  const { isAdmin } = useContext(OrderContext)

  const handleDeleteItem = (id) => {
    const filteredState = products.filter((item) => item.id !== id)
    setProducts(filteredState)
  }
  return (
    <MenuStyled>
      {products.map(({ id, imageSource, title, price }) => (
        <Card
          key={id}
          imageSource={imageSource}
          title={title}
          price={formatPrice(price)}
          handleDeleteItem={() => handleDeleteItem(id)}
          isAdmin={isAdmin}
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
