import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import React, { useState } from 'react'
import classNames from 'classnames'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador}: Props) {

    const [aberto, setAberto] = useState(false);//4
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome //5

    return (
        <button 
            className={classNames({
                [styles.ordenador]: true,
                [styles["ordenador--ativo"]]: ordenador !== '', //Comando do efeito para exibir a lista com os nomes na tela
            })} 
            onClick={() => setAberto(!aberto)} 
            onBlur={() => setAberto(false)} //1
        >

            <span>{nomeOrdenador || 'Ordenar por' /**7 */}</span>
            {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20} />/**6 */}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto, //2
            })}>

                {opcoes.map(opcao => (
                    <div 
                        className={styles.ordenador__option} 
                        key={opcao.value} 
                        onClick={() => setOrdenador(opcao.value)}
                    >
                        {opcao.nome /**3 */}
                    </div>
                ))}

            </div>
        </button>
    )
}


//1. Evento para quando clicarmos fora do "Ordenador" ele sair do local selecionado 

//2. No caso estamos dizendo que se ele estiver aberto iremos usar o "styles["ordenador__options--ativo"]"
//e o "[styles.ordenador__options]: true," sempre usaremos

//3. Exibindo o nome de cada classe na 'lista'

//4. Criando o "state" para exibirmos quando o 

//5. O "opcoes.find" está 'varrendo' o Array do "opcoes.json" e quando encontrar um valor igual ao valor que temos no Array "ordenador"
//(que está no index.tsx do cardapio) iremos selecionar o nome deste (7).

//7. E adiciona-lo no topa da 'lista', aparecer o nome la na listinha que selecionamos. 

//6. Exibindo a "seta" pra cima ou pra "baixo" na seta que estamos selecionando.
