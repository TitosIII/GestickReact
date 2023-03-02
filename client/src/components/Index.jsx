import '../../public/CSS/index.css'
import '../../public/JS/Script.js'
import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader"

function Index() {


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        window.onload = function(){
            setLoading(false)
        }
    }, [])

    return (
        <section>

            {
                loading ?

                <div className="contenedorCarga">
                    <ClockLoader
                    color="#01a7c2"
                    size={100}
                    
                    loading={loading}
                />
                </div>
                

                :
                <section>
                <header>
                <h2 className="logo">GESTICK</h2>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="mostrar-menu">
                    &#8801
                </label>
                <nav className="menu">
                    <a href="/">Inicio</a>
                    <a href="/contactUs">Contactanos</a>
                    <a href="/loginEmpleado">Iniciar Sesión</a>
                    <label htmlFor="check" className="esconder-menu">
                        &#215
                    </label>
                </nav>
                </header>
                <div className="container">
                <header className="showcase">
                    <h2>Crea Tu Propio Inventario Ahora</h2>
                    <p>Con Gestick Todo es posible, Ordena tus Productos y Vendelos En ¡LINEA!
                        Olvidate de comisiones altas, Obten Tu propio Inventario a un super Precio
                    </p>

                    <a href="/signAdministrador">
                        <button className="button2" type="submit">
                            <span>Registrate</span>
                        </button>
                    </a>
                </header>
                <div className="news-cards">
                    <div>
                        <img src="/Decoration/negocio.webp" alt="" />
                        <h3>Crea Tu Propio Inventario Para Tu Negocio</h3>
                        <p>Con Nuestra Herramienta Gestick, puedes tener una mejor organización
                            y mejor rendimiento debido a sus mmultiples herramientas las cuales te permitiran
                            vender en linea para tu pequeño o gran negocio
                        </p>
                        <a href="#">Explora Más <i className="fas fa-angle-double-right"></i></a>
                    </div>
                    <div>
                        <img src="/Decoration/Empleados.jpg" alt="" />
                        <h3>Gestiona Tus Empleados</h3>
                        <p>Con Gestick puedes Gestionar a todos tus empleados y así poder expandir tu negocio
                            , lo que permite mejor organización y así mayor rendimiento
                        </p>
                        <a href="#">Explora Más <i className="fas fa-angle-double-right"></i></a>
                    </div>
                    <div>
                        <img src="/Decoration/Personalizacion.webp" alt="" />
                        <h3>Personaliza Tu Espacio.</h3>
                        <p>Tienes la libertad de personalizar tu espacio de trabajo y así tener más
                            pertenencia con el inventario que te da GESTICK
                        </p>
                        <a href="#">Explora Más <i className="fas fa-angle-double-right"></i></a>
                    </div>
                    <div>
                        <img src="/Decoration/E-Commerce.webp" alt="" />
                        <h3>Crea Tu E-Commerce</h3>
                        <p>Con Gestick puedes crear tu propia E-Commerce facíl y rapido, deja de pagar comisiones altas
                            a comparación de mercado libre o amazon, rapido y personalizado solo para ti
                        </p>
                        <a href="#">Proximamente<i className="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
                <section className="cards-banner-one">
                    <div className="content">
                        <h2>Prueba Tu Mes Gratis</h2>
                        <p>Prueba Gestick por todo un mes de htmlForma gratuita,
                            y obtén todos los benficios que ofrece este software.
                            Gestick tan solo cuesta MXN x cantidad/mes. Durante el periodo de
                            prueba, no se te cobrará, puedes cancelar en cualquier momento.
                        </p>

                        <button className="button" type="submit" id="myBtn">
                            <span>Explora</span>
                        </button>
                        <div id="myModal" className="modal">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Plan 1</h3>
                                </div>
                                <div className="modal-body">
                                    <ul className="price">
                                        <li className="header">Basico</li>
                                        <li className="grey">$400MX / Mes</li>
                                        <li>Creación de Puntos De Venta Ilimitados</li>
                                        <li>10 Empleados</li>
                                        <li>50 Productos</li>
                                        <li>5GB de Almacenamiento</li>
                                        <li className="grey"><a href="/signAdmin" className="button2">Ingresar</a></li>
                                    </ul>
                                </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="news-cards">
                    <div>
                        <img src="/Decoration/Cliente_1.webp" alt="" />
                        <h3>RC DUDE MX</h3>
                        <p>"Es una empresa totalmente responsble con una atención excelente y una manera de organizar mis
                            productos de manera eficaz
                            a un super precio"
                        </p>
                    </div>
                    <div>
                        <img src="/Decoration/Cliente_2.webp" alt="" />
                        <h3>Baratus</h3>
                        <p>"Ahora es más sencillo organizar mis productos listos para la compra de estos, facil de capacitación
                            para los empleados a un buen precio
                            . No puedo esperar a ver la opción de E-Commerce"
                        </p>
                    </div>
                    <div>
                        <img src="/Decoration/Cliente_3.webp" alt="" />
                        <h3>El Cuartel Secreto</h3>
                        <p>"Es el mejor inventario que he tenido, mis prodcutos son más organizados y es más facil que usar
                            hojas de calculo, puedo gestionar bien a mis empleados"
                        </p>
                    </div>
                    <div>
                        <img src="/Decoration/Cliente_4.webp" alt="" />
                        <h3>Guitar Store</h3>
                        <p>"Me siento increiblemente feliz de la htmlForma tan sencilla y amigable por la cual Gestick me ha
                            beneficiado para mi micro empresa"
                        </p>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col">
                                <h4>Planes</h4>
                                <ul>
                                    <li><a href="#" id="btn-AddDate" className=" btn btn-xs btn-success" data-toggle="modal"
                                        data-target="#AddDate">
                                        Plan1
                                    </a>
                                        <div className="modal fade" id="AddDate" tabIndex="-1" role="dialog"
                                            aria-labelledby="myModalLabel">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                        <h4 className="modal-title" id="myModalLabel">Titulo</h4>
                                                        <div className="modal-content">
                                                            <div className="modal-header">

                                                                <h3>Plan 1</h3>
                                                            </div>
                                                            <div className="modal-body">
                                                                <ul className="price">
                                                                    <li className="header">Basico</li>
                                                                    <li className="grey">$400MX / Mes</li>
                                                                    <li>Creación de Puntos De Venta Ilimitados</li>
                                                                    <li>10 Empleados</li>
                                                                    <li>50 Productos</li>
                                                                    <li>5GB de Almacenamiento</li>
                                                                    <li className="grey"><a href="/signAdmin"
                                                                        className="button2">Ingresar</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="modal-footer">
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js"></script>
                                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                                            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                                            crossOrigin="anonymous"></script>

                                    </li>
                                    <li><a href="#" id="btn-AddDate" className=" btn btn-xs btn-success" data-toggle="modal"
                                        data-target="#AddDate2">
                                        Plan2
                                    </a>
                                        <div className="modal fade" id="AddDate2" tabIndex="-1" role="dialog"
                                            aria-labelledby="myModalLabel">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                        <h4 className="modal-title" id="myModalLabel">Titulo</h4>
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h3>Plan 2</h3>
                                                            </div>
                                                            <div className="modal-body">
                                                                <ul className="price">
                                                                    <li className="header">Pro</li>
                                                                    <li className="grey">$600 / Mes</li>
                                                                    <li>Puntos De Venta Ilimitados</li>
                                                                    <li>Creación de E-Commerce</li>
                                                                    <li>Empleados Ilimitados</li>
                                                                    <li>Productos Ilimitados</li>
                                                                    <li>Personalización</li>
                                                                    <li>60GB de Almacenamiento</li>
                                                                    <li className="grey"><a href="/signAdmin"
                                                                        className="button2">Ingresar</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="modal-footer">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.1/jquery.min.js"></script>
                                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                                            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
                                            crossOrigin="anonymous"></script>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Sobre nosotros</h4>
                                <ul>
                                    <li><a href="SobreNosotros.html">Nosotros</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Siguenos en</h4>
                                <div className="social-links">
                                    <a href="https://es-la.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a href="https://wa.me/5610336646?text=Hola%20Este%20Soy%20Un%20Cliente%20De%20Gestick%20"><i
                                        className="fab fa-whatsapp"></i></a>
                                    <a href="https://mx.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <script src="https://unpkg.com/scrollreveal"></script>
                </div>
                </section>
            }

        </section>
    )
}

export default Index;