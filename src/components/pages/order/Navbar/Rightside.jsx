import { useContext } from "react"
import { toast } from "react-toastify"
import styled from "styled-components"
import Profile from "./Profile"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import Toast from "../../../reusable-ui/Toast"
import isToggledContext from "../../../../context/IsToggledContext"

export default function Rightside() {
  const { isToggled, setIsToggled } = useContext(isToggledContext)

  const onToggle = (event) => {
    if (!isToggled) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsToggled(!isToggled)
  }

  return (
    <RightsideStyled>
      <ToggleButton
        isChecked={isToggled}
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        onToggle={onToggle}
        className="toggle-button"
      />
      <Profile />

      <Toast />
    </RightsideStyled>
  )
}

const RightsideStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;

  .toggle-button {
    margin-right: 40px;
  }
`
