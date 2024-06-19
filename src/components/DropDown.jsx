import React from 'react'
import './DropDown.css'

export default function DropDown(props) {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  return (
    <div className='drop_down'>
        <label>{props.label}</label>
        <select required={props.obrigatorio} value={props.valor} onChange={aoDigitado}>
            <option value={""}></option>
            {props.animais.map((animal) => {
                return <option key={animal}>{animal}</option>
            })}
        </select>
    </div>
  )
}
