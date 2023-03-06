import './Formulario.css'
import CampoDeInput from "../CampoDeInput"
import Select from "../Select"
import { useState } from 'react'
import { cpfMask } from '../../helpers/CpfMask'
import ListaVeiculos from '../ListaVeiculos'

function Formulario () {

    let anos = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    const [genero, setGenero] = useState ('')
    const [ano, setAno] = useState ('')
    const [nome, setNome] = useState ('')
    const [dataNasc, setDataNasc] = useState ('')
    const [cpf, setCpf] = useState ('')
    const [veiculo, setVeiculo] = useState ('')
    const [placa, setPlaca] = useState ('')
    const carros = ['Gol', 'Uno', 'Ford Ka', 'Fox', 'IX35', 'HB20']
    console.log(veiculo)
    return (
        
        <div>
            <h1 className='title'>Cadastro</h1>
            <form id='form-cadastro'>
                <div className='container-usuario'>
                    
                <CampoDeInput 
                    nome="Nome"
                    id="nome"
                    aoAlterado={valor => setNome(valor)}
                    valor = {nome}
                />
                    <CampoDeInput 
                    nome="Data Nascimento"
                    id="dataNasc"
                    tipo='date'
                    aoAlterado={valor => setDataNasc(valor)}
                    valor = {dataNasc}
                />

                <CampoDeInput 
                    nome="CPF"
                    id="cpf"
                    aoAlterado={valor => setCpf(cpfMask(valor))}
                    valor = {cpf}
                />
                    <Select
                    titulo="Gênero"                    
                    opcoes={['m', 'f']}
                    aoAlterado={valor => setGenero(valor)}
                    valor={genero}
                    />

                </div>
                
                <div className='container-veiculo'>
                <CampoDeInput 
                    nome="Veículo"
                    id="veiculo"
                    aoAlterado={valor => setVeiculo(valor)}
                    valor = {veiculo}
                                        
                />
                {veiculo.length > 0 ?
                <ListaVeiculos                
                    listaVeiculos={carros}
                    aoAlterado = {setVeiculo}
                    veiculo={veiculo}
                /> : ''}


                <CampoDeInput 
                    nome="Placa"
                    id="placa"
                    aoAlterado={valor => setPlaca(valor)}
                    valor = {placa}
                />
                    
                <Select
                titulo="Ano Modelo"
                tamanho={5}
                opcoes={anos}
                aoAlterado={valor => setAno(valor)}
                valor={ano}
                />

                    <button id='btnSalvar'>Salvar</button>
                </div>
                
            </form>
        </div>
    )
}

export default Formulario