import './App.css';
import DadosUsuario from './components/DadosUsuario';
import Formulario from './components/FormularioCadastro';

function App() {
  return (
    <div className="App">      
      <h1>Cadastro</h1>
      <Formulario />
      <DadosUsuario />
    </div>
  );
}

export default App;
