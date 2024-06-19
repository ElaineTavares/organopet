import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Animais from './components/Animais'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [animais, setAnimais] = useState([
    { id: uuidv4(),
      nome: "Dog",
      cor: "#57c278",
  

    },
    { 
      id: uuidv4(),
      nome: "Cat",
      cor: "#db6ebf",
    

    },
    {
      id: uuidv4(),
      nome: "Rabbit",
      cor: "#82cffa",
      

    },
    {
      id: uuidv4(),
      nome: "Duck",
      cor: "#e06869",
   

    },
    {
      id: uuidv4(),
      nome: "Pig",
      cor: "#ffba05",
    
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Toddy',
      raca: 'Shit Zu',
      imagem: 'https://i.pinimg.com/236x/01/df/1b/01df1bd93f91721addf71ed0aeb1103a.jpg',
      animal: animais[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Pequena',
      raca: 'Poodle',
      imagem: 'https://i.pinimg.com/236x/97/8d/bb/978dbbcb195116ac5f3eb93e5b82533d.jpg',
      animal: animais[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Floquinho',
      raca: 'Dalmata',
      imagem: 'https://i.pinimg.com/236x/69/86/ce/6986ce4d4223cfb42a58c1f8aed79466.jpg',
      animal: animais[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Heitor',
      raca: 'Buldog',
      imagem: 'https://i.pinimg.com/236x/d1/5d/03/d15d030fb8be37da72ed9b7b681d63d6.jpg',
      animal: animais[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Pipoca',
      raca: 'Persa',
      imagem: 'https://i.pinimg.com/236x/ff/02/35/ff0235d2b96e069556aa4a661283bb7a.jpg',
      animal: animais[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Rubi',
      raca: 'Ragdoll',
      imagem: 'https://i.pinimg.com/236x/e9/05/92/e90592a032120165910d6fe259fcf9ca.jpg',
      animal: animais[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Bob',
      raca: 'Siamês',
      imagem: 'https://i.pinimg.com/236x/63/53/e3/6353e3a18145b69a87a596914ecf28ee.jpg',
      animal: animais[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Ket',
      raca: 'Sphynx',
      imagem: 'https://i.pinimg.com/236x/36/f7/2f/36f72f42d3634b9e8af1433db6ea44de.jpg',
      animal: animais[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Algodão',
      raca: 'Angorá',
      imagem: 'https://i.pinimg.com/236x/b3/d7/a7/b3d7a7d6170190419d86043a926506e5.jpg',
      animal: animais[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Melado',
      raca: 'Polonês',
      imagem: 'https://i.pinimg.com/236x/2f/15/13/2f1513c72e0327f2bebe244f4fb882b4.jpg',
      animal: animais[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Algodão',
      raca: 'Angorá',
      imagem: 'https://i.pinimg.com/236x/b3/d7/a7/b3d7a7d6170190419d86043a926506e5.jpg',
      animal: animais[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Melado',
      raca: 'Polonês',
      imagem: 'https://i.pinimg.com/236x/2f/15/13/2f1513c72e0327f2bebe244f4fb882b4.jpg',
      animal: animais[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Pato',
      raca: 'Pato',
      imagem: 'https://i.pinimg.com/236x/72/97/d5/7297d54db198b8b2002b6069db9de765.jpg',
      animal: animais[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Pato',
      raca: 'Pato',
      imagem: 'https://i.pinimg.com/236x/72/97/d5/7297d54db198b8b2002b6069db9de765.jpg',
      animal: animais[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Pato',
      raca: 'Pato',
      imagem: 'https://i.pinimg.com/236x/72/97/d5/7297d54db198b8b2002b6069db9de765.jpg',
      animal: animais[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Pato',
      raca: 'Pato',
      imagem: 'https://i.pinimg.com/236x/72/97/d5/7297d54db198b8b2002b6069db9de765.jpg',
      animal: animais[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Porco',
      raca: 'Porco',
      imagem: 'https://i.pinimg.com/236x/98/2e/a4/982ea4e8ee115d88a22e76e6a92d9a6a.jpg',
      animal: animais[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Porco',
      raca: 'Porco',
      imagem: 'https://i.pinimg.com/236x/98/2e/a4/982ea4e8ee115d88a22e76e6a92d9a6a.jpg',
      animal: animais[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Porco',
      raca: 'Porco',
      imagem: 'https://i.pinimg.com/236x/98/2e/a4/982ea4e8ee115d88a22e76e6a92d9a6a.jpg',
      animal: animais[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Porco',
      raca: 'Porco',
      imagem: 'https://i.pinimg.com/236x/98/2e/a4/982ea4e8ee115d88a22e76e6a92d9a6a.jpg',
      animal: animais[4].nome
    }
  ]

  const [pets, setPets] = useState(inicial)

  const aoNovoPetAdicionado = (pet) => {
    setPets([...pets, pet])
    console.log(pets)
 }
 console.log(pets)


  function deletarPet(id){
    setPets(pets.filter(pet => pet.id !== id))
    
  }


  function mudarCorDosAnimais(cor, nome){
    setAnimais(animais.map((animal) => {
      if(animal.nome === nome){
        animal.cor = cor
      }
      return animal;
    }))
  }

  return (
    <>
     <Banner/>
     <Formulario animais={animais.map((animal) => animal.nome)} aoPetCadastrado={aoNovoPetAdicionado}/>
     {animais.map((animal) => {
      return <Animais 
        key={animal.nome} 
        nome={animal.nome} 
        cor={animal.cor}
        pets={pets.filter((pet) => pet.animal === animal.nome)}
        aoDeletar={deletarPet}
        mudarCor={mudarCorDosAnimais}
      />
     })}
    </>
  )
}

export default App
