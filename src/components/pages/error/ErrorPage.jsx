import React from 'react'
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ErrorPage</h1>
      <Link to={`/`}>
        <button>retourner à la page d'accueil</button>
      </Link>
    </div>
    );
}
