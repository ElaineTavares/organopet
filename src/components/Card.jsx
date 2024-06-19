import React from 'react'
import './Card.css'
import { IoIosCloseCircle } from "react-icons/io";

export default function Card(props) {

  return (
    <div className='card'>
        <div className="deletar" onClick={evento => props.aoDeletar(props.pet.id)}> <IoIosCloseCircle /></div>
        <div className="imagem" style={{backgroundColor: props.cor}}>
            <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className="texto">
            <h4>{props.nome}</h4>
            <h5>{props.raca}</h5>
        </div>
    </div>
  )
}
