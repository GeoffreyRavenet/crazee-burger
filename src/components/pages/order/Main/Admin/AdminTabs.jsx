import React, { useContext } from "react"
import styled from "styled-components"
import Tab from "../../../../reusable-ui/Tab"
import { MdModeEditOutline } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { theme } from "../../../../../theme/index.js"
import OrderContext from "../../../../../context/OrderContext"
import { tabsButtons } from "./tabsConfig .jsx"

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext)

  const handleClick = (index) => {
    setCurrentTabSelected(index)
    setIsCollapsed(false)
  }
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabsButtons.map((item) => (
        <Tab
          label={item.label}
          Icon={item.icon}
          onClick={() => handleClick(item.index)}
          className={currentTabSelected.includes(item.index) ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 22px;

  .is-active {
    background: ${theme.colors.background_dark};
    border: 2px solid ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`
