import './Select.css'

function Select ({titulo, opcoes, valor, aoAlterado}) {
    return (
        <div className="select-container">
        <label>{titulo}</label>
        <select onChange={evento => aoAlterado(evento.target.value)} value={valor}>
            <option value={''}></option>
            {opcoes.map(item => <option value={item}>{item}</option>)}
        </select>
        </div>
    )

}

export default Select