import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Inicio from 'Inicio';
import Cardapio from 'pages/Cardapio';
import NotFound from 'pages/Cardapio/NotFound';
import Sobre from 'pages/Cardapio/Sobre';
import Prato from 'pages/Prato';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </ Route>
                    <Route path='prato/:id' element={<Prato />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}


//O "Router" desconsidera "#" dos links antes da barra.
//O 'Routes' funciona como se o "Switch", ou seja ele sempre para na primeira rota que encontra
//O 'Route' é o restante so link, que vem depois da barra, e o 'element' é o elemento que será renderizado quando chamarmos o link

//No "Route path='/'" já uma 

