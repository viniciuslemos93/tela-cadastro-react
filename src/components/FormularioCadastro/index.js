import './Formulario.css'
import CampoDeInput from "../CampoDeInput"

function Formulario () {

    return (
        
        <div>
            <h1 className='title'>Cadastro</h1>
            <form id='form-cadastro'>
                <div className='container-usuario'>
                    
                <CampoDeInput 
                    nome="Nome"
                    id="nome"
                />
                    <div class="lineInput">
                        <label for="dataNasc">Data Nascimento </label>
                        <input type="date" id="dataNasc" />
                    </div>
                <CampoDeInput 
                    nome="CPF"
                    id="cpf"
                />
                    <div class="lineInput">
                        <label for="genero">Gênero </label>
                        <input type="" id="genero" />
                    </div>
                </div>
                
                <div className='container-veiculo'>
                    <div class="lineInput">
                        <label for="veiculo">Veículo </label>
                        <input type="text" id="veiculo" />
                    </div>
                    
                <CampoDeInput 
                    nome="Placa"
                    id="placa"
                />
                    <div class="lineInput">
                        <label for="anoModelo">Ano Modelo </label>
                        <input type="text" id="anoModelo" />                        
                    </div>                    
                </div>
                <button id='btnSalvar'>Salvar</button>
            </form>
        </div>
    )
}

export default Formulario