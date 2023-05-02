import { useState } from "react"

export const useSuccessMessage = () => {
  const [isSubmited, setIsSubmited] = useState(false)

  const displaySubmitMessage = () => {
    setIsSubmited(true)
    setTimeout(() => {
      setIsSubmited(false)
    }, 2000)
  }

  return { isSubmited, displaySubmitMessage }
}
