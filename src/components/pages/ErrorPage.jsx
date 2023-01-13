import React from 'react'
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const handleClick = () =>{
    alert("ok")
  }

  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <button onClick={handleClick}>retourner à la page d'accueil</button>
    </div>
    );
}
