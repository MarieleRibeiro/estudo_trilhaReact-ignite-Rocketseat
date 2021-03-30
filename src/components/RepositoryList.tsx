import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const repository = {
  name: "uniform",
  description: "Forms in React",
  link: "http://github.com/unform/unform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  //useEffect serve para disparar uma função quando algo acontecer na minha aplicação
  // recebe 2 parametros 1-> qual função eu quero eu executar e a 2-> quando eu quero executar useEffect(() => {}, [])
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
