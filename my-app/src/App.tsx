import './App.css';
import { EstoqueEntrada } from './components/estoqueEntrada';
import { Providers } from './providers/providers';

function App() {
  return (
    <div className="App">
      <Providers>
        <EstoqueEntrada/>
      </Providers>
    </div>
  )
}

export default App;
