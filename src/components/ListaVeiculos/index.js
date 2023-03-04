function ListaVeiculos ({listaVeiculos, veiculo, aoAlterado}) {
    return (        
        <div>
            <ul>
                {listaVeiculos.filter(item => item.toUpperCase().includes(veiculo.toUpperCase())).map(item => <li onClick={() => aoAlterado(item) }>{item}</li> )}
            </ul>
        </div>
    )

}

export default ListaVeiculos