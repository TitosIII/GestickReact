import '../../../../public/CSS/CSS_Gestick.css'
import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader"

function Index() {


    const [loading, setLoading] = useState(true);
    window.addEventListener("load", () => setLoading(false));

    useEffect(() => {
        if(document.readyState == "complete"){
            setLoading(false);
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
                <header className='HeaderPrincipal'>
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
                <div className="showcase">
                    <h1>Gestick</h1>
                    <h2 className='slogan'>"Gestionar para avanzar"</h2>
                    <h2>Crea Tu Propio Inventario Ahora</h2>
                    <p>Con Gestick Todo es posible, Ordena tus Productos y Vendelos En ¡LINEA!
                        Olvidate de comisiones altas, Obten Tu propio Inventario a un super Precio
                    </p>

                    <a href="/signAdministrador">
                        <button className="button2" type="submit">
                            <span>Registrate</span>
                        </button>
                    </a>
                </div>

                <section class="knowledge">
            <div class="knowledge__container container">
                <div class="knowledege__texts">
                    <h2 class="subtitle">¿Qué es Gestick?</h2>
                    <p class="knowledge__paragraph">Gestick es un programa enfocado en la gestion de inventarios y puntos de venta, esto con el objetivo de tener 
                    una mejor administración de los productos que se llevan en cualquier negocio, ahora enfocado en papelerias
                    aparte de brindar un punto de venta rapido y eficaz</p>
                    <button href="#" class="button2"><span>Entra</span></button>
                </div>

                <figure class="knowledge__picture">
                    <img src="../IMG/Decoration/negocio.webp" class="knowledge__img"></img>
                </figure>
            </div>
        </section>


    <section id="nuestros-programas">
        <div class="container">
            <h2>¿Que es lo que puedes hacer con Gestick?</h2>
            <div class="programas">
                <div class="carta">
                    <div className='tittle'><h3>Crea Tu Propio Inventario Para Tu Negocio</h3></div>
                    <div className='contenidotittle'><p>Con Nuestra Herramienta Gestick, puedes tener una mejor organización
                            y mejor rendimiento debido a sus multiples herramientas las cuales te permitiran
                            vender en linea para tu pequeño o gran negocio</p></div>
                    <div><button className='button2'><span>Explorar</span></button></div>
                </div>
                <div class="carta">
                    <h3>Gestiona Tus Empleados</h3>
                    <p>Con Gestick puedes Gestionar a todos tus empleados y así poder expandir tu negocio
                            , lo que permite mejor organización y así mayor rendimiento
                        </p>
                        <div><button className='button2'><span>Explorar</span></button></div>
                </div>
                <div class="carta">
                    <h3>Personaliza Tu Espacio.</h3>
                    <p>
                    Tienes la libertad de personalizar tu espacio de trabajo y así tener más
                            pertenencia con el inventario que te da GESTICK
                        </p>
                        <div><button className='button2'><span>Explorar</span></button></div>
                </div>  
                <div class="carta">
                    <h3>Crea Tu E-Commerce</h3>
                    <p>Con Gestick puedes crear tu propia E-Commerce facíl y rapido, deja de pagar comisiones altas
                            a comparación de mercado libre o amazon, rapido y personalizado solo para ti
                        </p>
                        <div><button className='button2'><span>Explorar</span></button></div>
                </div>  
            </div>
        </div>
    </section>

    <section class="banner-2">
    <h3>Prueba Tu Mes Gratis
    <p>Prueba Gestick por todo un mes de htmlForma gratuita,
                            y obtén todos los benficios que ofrece este software.
                            Gestick tan solo cuesta MXN x cantidad/mes. Durante el periodo de
                            prueba, no se te cobrará, puedes cancelar en cualquier momento.
                            <p><button className="button" type="submit" id="myBtn">
                            <span>Explora</span>
                        </button></p></p>
                        
                        </h3>
                        

</section>



<section class="galeria">
            <div class="sesgoarriba"></div>
            <div class="imagenes none">
                <img src="../IMG/Decoration/Cliente_1.webp" alt="#"></img>
            </div>
            <div class="imagenes">
            <img src="../IMG/Decoration/Cliente_2.webp" alt=""></img>
                <div class="encima">
                    <h2>AlexCG Design</h2>
                </div>
            </div>
            <div class="imagenes">
                <img src="../IMG/Decoration/Cliente_3.webp" alt=""></img>
            </div>
            <div class="imagenes">
                <img src="../IMG/Decoration/Cliente_4.webp" alt=""></img>

            </div>
            <div class="imagenes none">
                <img src="../IMG/Decoration/Cliente_1.webp" alt=""></img>
            </div>
            <div class="sesgoabajo"></div>
        </section>


            
                <section class="course" id="course">
<div class="box-container">

    <div class="box">
        
        <img src="../IMG/Decoration/Cliente_1.webp" alt="" />
                        <h3>RC DUDE MX</h3>
                        <p>"Es una empresa totalmente responsble con una atención excelente y una manera de organizar mis
                            productos de manera eficaz
                            a un super precio"
                        </p>
    </div>

    <div class="box">
    <img src="../IMG/Decoration/Cliente_2.webp" alt="" />
                        <h3>Baratus</h3>
                        <p>"Ahora es más sencillo organizar mis productos listos para la compra de estos, facil de capacitación
                            para los empleados a un buen precio
                            . No puedo esperar a ver la opción de E-Commerce"
                        </p>
    </div>

    <div class="box">
    <img src="../IMG/Decoration/Cliente_3.webp" alt="" />
                        <h3>El Cuartel Secreto</h3>
                        <p>"Es el mejor inventario que he tenido, mis prodcutos son más organizados y es más facil que usar
                            hojas de calculo, puedo gestionar bien a mis empleados"
                        </p>
    </div>

    <div class="box">
    <img src="../IMG/Decoration/Cliente_4.webp" alt="" />
                        <h3>Guitar Store</h3>
                        <p>"Me siento increiblemente feliz de la htmlForma tan sencilla y amigable por la cual Gestick me ha
                            beneficiado para mi micro empresa"
                        </p>
            </div>
</div>



</section>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col">
                            <h4>Planes</h4>
                            <ul>
                                <li><button className='btn'><a href="#Plan1">Plan 1</a></button></li>
                                <li><button className='btn'><a href="#Plan2">Plan 2</a></button></li>
                            </ul>
                        <div id="Plan1" class="modalmask">
                            <div class="modalbox movedown">
                            <a href="#close" title="Close" class="close">X</a>
                                <h2>Plan1</h2>
                                <p>cuarenta pesitos :)</p>
                            </div>
                        </div>
                        <div id="Plan2" class="modalmask">
                            <div class="modalbox movedown">
                            <a href="#close" title="Close" class="close">X</a>
                                <h2>Plan2</h2>
                                <p>Ochenta pesitos :D</p>
                            </div>
                        </div>
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
                                    <a href="https://www.facebook.com/profile.php?id=100091645518649"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Finstagram.com%2F__gestick%3Figshid%3DOTJhZDVkZWE%253D&h=AT3FnETkYhgQVNxuLMGGp9jp1w-p7m3YaZ38vQClW3ZbWvOorvQ6tnW_7l8AnxnREbffC_YJ7JUyFWBqJle1Ns4qPLinRrpoNiYYbmYiONOMqBiR6Wwg1XA7qKKOC444kRfwvA"><i className="fab fa-instagram"></i></a>
                                    <a href="https://wa.me/5610336646?text=Hola%20Este%20Soy%20Un%20Cliente%20De%20Gestick%20"><i
                                        className="fab fa-whatsapp"></i></a>
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