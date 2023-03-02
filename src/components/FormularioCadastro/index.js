import './Formulario.css'

function Formulario () {

    return (
        <div>
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
            <div class="lineInput">
                <label for="veiculo">Veículo </label>
                <input type="text" id="veiculo" />
            </div>
            <div class="lineInput">
                <label for="placa">Placa </label>
                <input type="text" id="placa" />
            </div>
            <div class="lineInput">
                <label for="anoModelo">Ano Modelo: </label>
                <input type="text" id="anoModelo" />
            </div>
        </div>
    )
}

export default Formulario