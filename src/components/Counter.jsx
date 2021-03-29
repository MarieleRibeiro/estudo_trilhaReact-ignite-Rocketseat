import {useState} from 'react'

export function Counter() {
  const [counter,  setCounter] = useState(0)

  function increment() {
   setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button"onClick={increment}>
        Increment
        </button>
    </div>
  )
}

// IMUTABILIDADE
 
// usuarios = ['Mariele', 'Miguel', 'Millena'] 
// usuarios.push('Misael')

// novoUsuario = [...usuarios, 'Misael'] não muda o [] só acrescenta um novo usuario