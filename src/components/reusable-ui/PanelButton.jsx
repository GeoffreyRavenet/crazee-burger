import React from "react"
import styled from "styled-components"

export default function PanelButton({ Icon, onClick, active = false, label = "" }) {
  return (
    <PanelButtonStyle onClick={onClick} className={active}>
      {Icon}
      {label && label}
    </PanelButtonStyle>
  )
}

const PanelButtonStyle = styled.button`
  min-width: 59px;
  height: 42px;
  background: #fff;
  color: #93a2b1;
  border: 1px solid #e4e5e9;
  border-radius: 5px 5px 0px 0px;
  margin-right: 1px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  line-height: 1;
  padding-left: 18px;
  padding-right: 18px;

  // text style
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-right: 10px;
    padding-top: 2px;
  }
  :first-child .icon {
    margin-right: 0px;
  }
`
