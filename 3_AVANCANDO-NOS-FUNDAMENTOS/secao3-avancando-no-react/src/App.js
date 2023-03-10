import './App.css';

import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';

import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>      
      <div>
        {/*Imagem em public */}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        {/*Imagem em src > assets a importação é dinâmica, com o nome da importação.
        Isso é melhor pra manutenção, caso troca a pasta de local por exemplo, será alterado em um local apenas.*/}
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />

      <ListRender />

      <ConditionalRender />
    </div>
  );
}

export default App;