import React from 'react'

export default function ErrorPage() {
  const handleclick = () =>{
    alert("ok")
  }
  
  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <button onClick={handleclick}>retourner à la page d'accueil</button>
    </div>
    );
}
