import './Select.css'

function Select ({titulo, opcoes, valor, aoAlterado, tamanho}) {
    return (
        <div className="select-container">
        <label>{titulo}</label>
        <select size={tamanho} onChange={evento => aoAlterado(evento.target.value)} value={valor}>
            <option value={''}></option>
            {opcoes.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        </div>
    )

}

export default Select