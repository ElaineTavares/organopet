import React, { useState } from 'react'
import './CampoTexto.css'

export default function CampoTexto(props) {
  // let valor = "Elaine"

  const aoDigitado = (evento) =>{
    props.aoAlterado(evento.target.value)
 }

  return (
    <div className='campo_texto'>
        <label>{props.label}</label>
        <input required={props.obrigatorio} value={props.valor} onChange={aoDigitado} type="text" placeholder={props.placeholder} />
    </div>
  )
}
