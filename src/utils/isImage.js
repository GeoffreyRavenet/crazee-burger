export const checkImageExistsPromise = (url) => {
  const img = new Image()
  img.src = url
  return new Promise((resolve) => {
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
  })
}
