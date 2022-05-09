import React from "react";
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface Props {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>> //1
}

export default function Buscador({ busca, setBusca }: Props) {
    
    return (
        <div className={styles.buscador}>
            <input 
                value={busca} 
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder='Buscar' 
            />

            <CgSearch 
                size={20}
                color="#4c4d5e"
            />
        </div>
    )
}

//1. Adicionamos o tipo do 'setBusca', caso tenhamos alguma dúvida sobre qual o tipo estamos trabalhando 
//basta passar o mouse sobre o nome 'setBusca' onde criamos o "useState" la no index.tsx do 'Cardapio'
