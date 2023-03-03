import './Formulario.css'

function Formulario () {

    return (
        <div>
            <h1 className='title'>Cadastro</h1>
            <form id='form-cadastro'>
                <div className='container-usuario'>
                    <div class="lineInput">
                        <label for="nome">Nome </label>
                        <input type="text" id="nome" />
                    </div>
                    <div class="lineInput">
                        <label for="dataNasc">Data Nascimento </label>
                        <input type="date" id="dataNasc" />
                    </div>
                    <div class="lineInput">
                        <label for="cpf">CPF </label>
                        <input type="text" id="cpf" />
                    </div>
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
                    <div class="lineInput">
                        <label for="placa">Placa </label>
                        <input type="text" id="placa" />
                    </div>
                    <div class="lineInput">
                        <label for="anoModelo">Ano Modelo </label>
                        <input type="text" id="anoModelo" />
                    </div>
                    </div>
            </form>
        </div>
    )
}

export default Formulario