import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  //state (etat, données)
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    setName("")
    navigate(`/order/${name}`)
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
