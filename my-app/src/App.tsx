import './App.css';
import { EstoqueContainer } from './components/estoqueContainer';
import { EstoqueEntrada } from './components/estoqueEntrada';
import { Providers } from './providers/providers';

function App() {
  return (
    <div className="App">
      <Providers>
        <EstoqueEntrada/>
        <EstoqueContainer/>
      </Providers>
    </div>
  )
}

export default App;
