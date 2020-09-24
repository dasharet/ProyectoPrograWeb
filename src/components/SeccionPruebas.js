import React, { Component } from 'react';

class SeccionPruebas extends Component {

    render() {
        var nombre = "Joselyn";

        return (
            <section id="content">
                <h2 class="subheader">Ultimos articulos</h2>

                {/*<!--Listado articulos-->*/}
                <div id="articles">
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            <img src="https://blogapi.uber.com/wp-content/uploads/2019/03/5-iglesias-en-Antigua-Guatemala-llenas-de-historia.png"
                                alt="Paisaje" />
                        </div>
                        <h2>ANTIGUA GUATEMALA</h2>
                        <span className="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer más</a>
                        <div className="clearfix"></div>
                    </article>

                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            <img src="https://blogs.egu.eu/network/gfgd/files/2014/11/Picture1-1400x800.jpg"
                                alt="Paisaje" />
                        </div>
                        <h2>ATITLAN</h2>
                        <span className="date">
                            Hace 10 minutos
                        </span>
                        <a href="#">Leer más</a>
                        <div className="clearfix"></div>
                    </article>

                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            <img src="https://media.tacdn.com/media/attractions-splice-spp-360x240/08/3a/87/df.jpg"
                                alt="Paisaje" />
                        </div>
                        <h2>SEMUC CHAMPEY</h2>
                        <span className="date">
                            Hace 15 minutos
                        </span>
                        <a href="#">Leer más</a>
                        <div className="clearfix"></div>
                    </article>
                </div>
                {/* <!--Añadir articulos via JS-->*/}
            </section>
        );
    }
}

export default SeccionPruebas;