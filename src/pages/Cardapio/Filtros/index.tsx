import React from 'react';
import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {

    function selecionarFiltro(opcao: IOpcao) {
        if(filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }

    return <div className={styles.filtros}>
        {filtros.map((opcao) => (
            <button 
                className={classNames({
                    [styles.filtros__filtro] : true,
                    [styles['filtros__filtro--ativo']] : filtro === opcao.id //1
                })} 
                key={opcao.id} 
                onClick={() => selecionarFiltro(opcao)}
            >
                {opcao.label}
            </button>
        ))}
    </div>
}

//1. Levando em consideração o que o filtro é igual a opção.id, (ou seja a opção selecionada).
//Usamos os colchetes como vimos nos exemplos, para conseguirmos acessar as variáveis (que no caso estão la no "Filtros.module.scss")
//sem os '[]' não conseguimos acessa-las diretamente desta maneira 
