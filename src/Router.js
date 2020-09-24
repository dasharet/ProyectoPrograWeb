import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importar componentes
import SeccionPruebas from './components/SeccionPruebas'
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Formulario from './components/Formulario';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />

                <Slider />
                <div className="center">

                    {/*CONFIGURAR RUTAS Y PAGINAS*/}
                    <Switch>
                        <Route exact path="/" component={SeccionPruebas} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/ruta-blog" component={SeccionPruebas} />
                        <Route exact path="/ruta-form" component={Formulario} />
                    </Switch>
                    <Sidebar />
                    <div className="clearfix"></div>
                </div> {/* END DIV CENTER*/}

                <Footer />
            </BrowserRouter>

        );

    }
}

export default Router;