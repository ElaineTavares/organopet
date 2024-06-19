import React from 'react'
import './Animais.css'
import Card from './Card'
import hexToRgba from 'hex-to-rgba';

export default function Animais(props) {

 
  return (
    (props.pets.length > 0) &&
      <section className='animais' style={{backgroundColor: hexToRgba(props.cor, '0.6')}} >
          <div className='input_color'>
            <p>Mude a cor</p>
            <input value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.nome)} type="color"/>
          </div>
      
          <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
          <div className='container_card'>
            {props.pets.map((pet, indice) => {
              
              return <Card 
                key={indice} 
                nome={pet.nome} 
                raca={pet.raca} 
                imagem={pet.imagem} 
                pet={pet}
                cor={props.cor}
                aoDeletar={props.aoDeletar} 
              />
            })}
          </div> 
      </section>
  )
}
