import { render} from 'react-dom'
import {App } from './App'


// função render utiliza dois paramentros [1]->o que eu quero rendenrizar(exibir em tela) [2]->dentro de qual elemento eu quero renderizar essa informação
render(<App />, document.getElementById('root'))