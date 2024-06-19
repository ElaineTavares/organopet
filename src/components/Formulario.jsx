import React, { useState } from 'react'
import './Formulario.css'
import CampoTexto from './CampoTexto'
import DropDown from './DropDown'
import Button from './Button'


export default function Formulario(props) {

    let [nome, setNome] = useState('')
    let [raca, setRaca] = useState('')
    let [imagem, setImagem] = useState('')
    let [animal, setAnimal] = useState('')

    function criarCard(evento){
        evento.preventDefault()  
        console.log(`Forumlario submetido ${nome}, ${raca}, ${imagem}, ${animal}`)
        props.aoPetCadastrado({
            nome: nome,
            raca: raca,
            imagem: imagem,
            animal: animal
        }) 
        setNome("")
        setRaca("")
        setImagem("")
        setNome("")
    }

  return (
    <form className='form' onSubmit={criarCard}>
        <h2>Preencha com os dados do seu pet para criar um card:</h2>
        <CampoTexto 
            obrigatorio={true} 
            label="Nome:" 
            placeholder="Digite o nome do seu Pet"
            valor={nome}
            aoAlterado={nome => setNome(nome)}
        />
        <CampoTexto 
            obrigatorio={true} 
            label="Raça:" 
            placeholder="Digite a raça do seu Pet"
            valor={raca}
            aoAlterado={raca => setRaca(raca)}
        />
        <CampoTexto 
            label="Imagem:" 
            placeholder="Informe o endereço da imagem"
            valor={imagem}
            aoAlterado={imagem => setImagem(imagem)}
        />

        <DropDown 
        obrigatorio={true} 
        label="Animais:" 
        animais={props.animais}
        valor={animal}
        aoAlterado={animal => setAnimal(animal)}
        />
        <Button>Criar Card</Button>
    </form>
  )
}
