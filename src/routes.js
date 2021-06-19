import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Mainproduto from './pages/produtos/main';
import Detalhesproduto from './pages/produtos/detalhes';
import Criarproduto from './pages/produtos/criar';
import Editarproduto from './pages/produtos/editar';
import Deletarproduto from './pages/produtos/deletar';

 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/produtos" component={Mainproduto} />
            <Route path="/produtos/:id" component={Detalhesproduto} />
            <Route path="/criarproduto" component={Criarproduto} />
            <Route path="/editarProduto/:id" component={Editarproduto} />
            <Route path="/deletarproduto/:id" component={Deletarproduto} />

        </Switch>
    </BrowserRouter>
)
 
export default Routes;
