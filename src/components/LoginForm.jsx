import { useState } from "react";

function LoginForm() {
  //state (etat, données)
  const [name, setName] = useState("")

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Bonjour ${name}`)
    setName("")
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }
  
  //affichage (render)
  return ( 
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br/>
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} placeholder="Entrer votre prénom..." required/>
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default LoginForm;
