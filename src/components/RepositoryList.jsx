import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useState, useEffect} from "react"

const repository = {
  name: 'uniform',
  description: 'Forms in React',
  link: 'http://github.com/unform/unform'
}

export function RepositoryList() {
const [repositories, setRepositories] = useState([])

//useEffect serve para disparar uma função quando algo acontecer na minha aplicação
// recebe 2 parametros 1-> qual função eu quero eu executar e a 2-> quando eu quero executar useEffect(() => {}, []) 
useEffect(() => {
  fetch('https://api.github.com/orgs/rocketseat/repos')
  .then(response => response.json())
  .then(data => setRepositories(data))
}, [] )

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
       <RepositoryItem repository= {repository} />
       <RepositoryItem repository= {repository}/>
       <RepositoryItem repository= {repository}/>
       <RepositoryItem repository= {repository}/>
       <RepositoryItem repository= {repository}/>
       <RepositoryItem repository= {repository}/>
      </ul>

    </section>

  )
}