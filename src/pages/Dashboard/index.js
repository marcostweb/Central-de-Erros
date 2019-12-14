import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import api from '../../services/api'

import './styles.css';

export default function Dashboard(){
  const [spots, setSpots] = useState([])

  useEffect(() => {
    async function loadSpots(){
      const user_id = localStorage.getItem('user')
      const response = await api.get('./dashboard', {
        headers: { user_id }
      })
      console.log(response.data)
      setSpots(response.data)
    }

    loadSpots()
  }, []) // array de dependencias, uma variavel que quando mudar irá rodar a função

  return (
    <>
      <div className="container-form">  
        <div className="content"> 
          <ul className="spot-list">
            {spots.map(spot => (
                <li key={ spot._id }>
                  <header style={{ backgroundImage: `url(${spot.thumbnail_url})`}}/>
                  <strong>{ spot.company }</strong>
                  <span>{ spot.price ? `R$ ${spot.price}/dia` : 'GRATUITO'}</span>
                </li>
            ))}
          </ul>

          <Link to="/new" tilte="Cadastrar Novo Spot">
            <button className="btn">Cadastrar Novo Spot</button>
          </Link>
        </div>
      </div>
    </>
  )
}