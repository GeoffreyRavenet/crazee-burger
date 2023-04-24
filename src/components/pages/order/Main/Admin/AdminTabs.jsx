import React, { useContext } from "react"
import styled from "styled-components"
import Tab from "../../../../reusable-ui/Tab"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { theme } from "../../../../../theme/index.js"
import OrderContext from "../../../../../context/OrderContext"
import { getTabsConfig } from "./tabsConfig"

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } =
    useContext(OrderContext)

  const tabs = getTabsConfig()
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
        className={isCollapsed ? "is-active-Chevron" : ""}
      />
      {tabs.map((item) => (
        <Tab
          key={item.label}
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
  padding: 0 71px;

  .is-active,
  .is-active-chevron {
    background: ${theme.colors.background_dark};
    border: 2px solid ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
  :has(.is-active-Chevron) button:not(.is-active) {
    border: 2px solid ${theme.colors.white};
  }
  button {
    margin-left: 1px;
  }
`
