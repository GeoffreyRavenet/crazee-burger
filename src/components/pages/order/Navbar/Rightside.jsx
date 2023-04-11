import { useContext } from "react"
import { toast } from "react-toastify"
import styled from "styled-components"
import Profile from "./Profile"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import Toast from "../../../reusable-ui/Toast"
import OrderContext from "../../../../context/OrderContext"

export default function Rightside() {
  const { isAdmin, setIsAdmin } = useContext(OrderContext)

  const onToggle = (event) => {
    if (!isAdmin) {
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
    setIsAdmin(!isAdmin)
  }

  return (
    <RightsideStyled>
      <ToggleButton
        isChecked={isAdmin}
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
