import { useState } from "react";

function LoginForm() {
  //state {etat, données}
  const [name, setName] = useState("")
  //comportements
  const handleClick = () => {
    return name? alert("Bonjour "+name) : null
  }
  const handleChange = (event) => {
    setName(event.target.value)
  }
  //affichage (render)
  return ( 
    <div>
      <h1>Bienvenue chez nous!</h1>
      <br/>
      <h2>Connectez-vous</h2>
      <form>
        <input type="text" id="name" value={name} onChange={handleChange} placeholder="Entre votre prénom..." required/>
        <button onClick={handleClick}>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default LoginForm;
