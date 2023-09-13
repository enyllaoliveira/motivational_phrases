import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Sucesso em todas as áreas da vida, essa é a sacada',
        'Nunca desista de algo que você não fica um dia sem pensar'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Acorde com um sorriso no rosto',
        'Tenha sempre um motivo para começar bem o dia',
        'Todo dia é o melhor dia do ano'
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }


  function gerarFrase() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
  
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
      <div className='container'>
        <img
        alt='Logo frases'
        src={logoImg}
        className='logo'
        />

        <h2 className='title'> Categorias</h2>
        <section className='category-area'>
          {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className='category-button'
          style={ {
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 :0,
            borderColor: "#1fa4db"
          }}

          onClick={ () => handleSwitchCategory(index) }
          >
          {item.nome}
          </button>
          ))}
        </section>

        <button className='button-frase' onClick={gerarFrase}> Gerar frase</button>
        {textoFrase !== '' && <h2 className='textoFrase'> {textoFrase}</h2>}
      </div>
  )
}

export default App

{/* <button className='category-button'> Bem-estar </button> */}
