import cardapio from 'data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss'
import { useEffect, useState } from 'react';
import { Cardapio } from 'types/Prato';

interface Props {
    busca: string
    filtro: number | null
    ordenador: string
}

export default function Itens(props: Props) {

    const [lista, setLista] = useState(cardapio);
    const { busca, filtro, ordenador } = props

    const ordenarPrioridadeCrescente = (
        lista: typeof cardapio,
        propriedade: 'size' | 'serving' | 'price'
    ) => {
        return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
    }

    const ordenarPrioridadeDecrescente = (
        lista: typeof cardapio,
        propriedade: 'size' | 'serving' | 'price'
    ) => {
        return lista.sort((a, b) => (a [propriedade] > b [propriedade] ? -1 : 1))
    }

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i') //O "i" estamos dizendo que tudo é 'caseInsensetive', ou seja não diferencia letras maiúsculas e minúsculas
        return regex.test(title)
    }

    function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id;
        return true
    }

    function ordenar(novaLista: Cardapio) {
        switch(ordenador) {
            case 'porcao':
                return ordenarPrioridadeCrescente(novaLista, 'size');
            case 'qtd_pessoas':
                return ordenarPrioridadeCrescente(novaLista, 'serving');
            case 'preco':
                return ordenarPrioridadeDecrescente(novaLista, 'price');
            default:
                return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
        setLista(ordenar(novaLista))
    }, [busca, filtro, ordenador]) //Fator de dependência para rodar o "useEffect"

    return (
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item
                    key={item.id} 
                    {...item}
                />
            ))}
        </div>
    )
}


//Se abrirmos uma '{}' (chaves),  após o "cardapio.map((item) =>" é necessário adicionar uma 'return' no "map" após a ArrowFunction.


