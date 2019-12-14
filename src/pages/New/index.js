/* eslint-disable*/

import React, { useState, useMemo } from 'react';
import api from '../../services/api'

import camera from '../../assets/camera.svg'
import './styles.css'

export default function New({ history }){
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrices] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  const preview = useMemo( () => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  },[thumbnail])
    
  async function handleSubmit(event){
    event.preventDefault()

    const data = new FormData()
    const user_id = localStorage.getItem('user')

    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)

    const response = await api.post('/spots', data, {
        headers: { user_id }
    })

    history.push('/dashboard')
  }
    
  return (
    <div className="container-form">  
      <div className="content"> 
        <form onSubmit={ handleSubmit }>
          <label 
              id="thumbnail" 
              style={ { backgroundImage: `url(${preview})` } }
              className={ thumbnail ? 'has-thumbnail' : '' }>
              <input type="file" onChange={ event => setThumbnail(event.target.files[0]) }/>
              <img src={ camera } alt="select img"/>
          </label>
            
          <label htmlFor="buteco">EMPRESA *</label>
          <input 
              id="buteco" 
              placeholder="Seu buteco top"
              value={ company }
              onChange = { event => setCompany(event.target.value) }
          />

          <label htmlFor="goros">Gorós *<span>(separados por virgulas)</span></label>
          <input 
              id="goros" 
              placeholder="O que tem pra beber aí?"
              value={ techs }
              onChange = { event => setTechs(event.target.value) }
          />

          <label htmlFor="preco">Valor do goró *<span>(em branco é de GRAÇA)</span></label>
          <input 
              id="preco" 
              placeholder="Quanto é o goró aí?"
              value={ price }
              onChange = { event => setPrices(event.target.value) }
          />

          <button type="submit" className="btn">Cadastrar seu buteco</button>
        </form>
      </div>
    </div>    
  )
}