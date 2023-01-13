import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
  const {loginName} = useParams();

  return (
    <div>
      <h1>Bonjour {loginName}</h1>
      <Link to={`/`}>
        <button>Déconnection</button>
      </Link>
    </div>
  )
}
