import Header from "./micro_components/Header.jsx"
import '../../public/CSS/empleadoTarjetas.css'
import '../../public/CSS/tablero.css'
import HeaderOpcionesAdmin from "./micro_components/HeaderOpcionesAdmin.jsx"

export default function EmpleadosTablero() {
    return (
        <section>
            <Header></Header>
            <HeaderOpcionesAdmin/>
            <section className="Tableros">
            <div className="Servicio">
                <div className="cover">
                    <img src="Equipo/CanoFoto.jpeg" alt="Persona junto a una pagina web en formato SVG"/>
                    <div className="img_back"></div>
                </div>
                <div className="descripcion">
                    <h2>Sanchez Cano Alejandro</h2>
                    <p>Contraseña: <span>ejemplo</span></p>
                    <a href="/EditarEmpleado" className="saber-mas">Editar</a>
                </div>
            </div>
            <div className="Servicio">
                <div className="cover">
                    <img src="Equipo/GaelFoto.jpeg" alt="Persona junto a una pagina web en formato SVG"/>
                    <div className="img_back"></div>
                </div>
                <div className="descripcion">
                    <h2>Peréz Calderon Alejandro Gael</h2>
                    <p>Contraseña: <span>ejemplo</span></p>
                    <a href="/EditarEmpleado" className="saber-mas">Editar</a>
                </div>
            </div>
            <div className="Servicio">
                <div className="cover">
                    <img src="Equipo/TitosFoto.jpeg" alt="Persona junto a una pagina web en formato SVG"/>
                    <div className="img_back"></div>
                </div>
                <div className="descripcion">
                    <h2>López Lozano Carlos Enrique</h2>
                    <p>Contraseña: <span>ejemplo</span></p>
                    <a href="/EditarEmpleado" className="saber-mas">Editar</a>
                </div>
            </div>
            <div className="Servicio">
                <div className="cover">
                    <img src="Equipo/AdriánFoto.jpeg" alt="Persona junto a una pagina web en formato SVG"/>
                    <div className="img_back"></div>
                </div>
                <div className="descripcion">
                    <h2>Vázquez Montero Carlos Adrián</h2>
                    <p>Contraseña: <span>ejemplo</span></p>
                    <a href="/EditarEmpleado" className="saber-mas">Editar</a>
                </div>
            </div>
            <div className="Servicio">
                <div className="cover">
                    <img src="Equipo/RobertoFoto.jpeg" alt="Persona junto a una pagina web en formato SVG"/>
                    <div className="img_back"></div>
                </div>
                <div className="descripcion">
                    <h2>Solis Dominguéz Roberto Carlos</h2>
                    <p>Contraseña: <span>ejemplo</span></p>
                    <a href="/EditarEmpleado" className="saber-mas">Editar</a>
                </div>
            </div>
            <div className="Servicio">
                <div className="cover">
                    <img src="Equipo/JoshuaFoto.jpeg" alt="Persona junto a una pagina web en formato SVG"/>
                    <div className="img_back"></div>
                </div>
                <div className="descripcion">
                    <h2>Riveron Martinez Joshua Israel</h2>
                    <p>Contraseña: <span>ejemplo</span></p>
                    <a href="/EditarEmpleado" className="saber-mas">Editar</a>
                </div>
            </div>
            </section>
        </section>
    )
}

