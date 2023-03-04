import './Formulario.css'
import CampoDeInput from "../CampoDeInput"
import Select from "../Select"
import { useState } from 'react'

function Formulario () {

    const [genero, setGenero] = useState ('')
    console.log(genero)

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
                    <Select
                    titulo="Gênero"
                    opcoes={['m', 'f']}
                    aoAlterado={valor => setGenero(valor)}
                    valor={genero}
                    />

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
                    <button id='btnSalvar'>Salvar</button>
                </div>
                
            </form>
        </div>
    )
}

export default Formulario