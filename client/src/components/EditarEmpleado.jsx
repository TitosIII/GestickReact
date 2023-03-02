import Header from "./micro_components/Header";
import '../../public/CSS/editarEmpleado.css'

export default function EditarEmpleado() {
    return (
        <div>
            <Header />
            <section id="pruebas">
                <div className="contenedroAgregar">
                    <div className="Drag_Drop">
                        <h3>Sube La Imagen De Tu Empleado</h3>
                        <div className="drag-area">
                            <div className="icon">
                                <i className="fa-solid fa-image"></i>
                            </div>
                            <span className="headerD">
                                Arrastra y suelta
                            </span>
                            <span className="headerD">O <span className="buttonD">Seleciona Un Archivo</span></span>

                            <span className="support">Se acepta: JPEG, JPG, PNG</span>
                        </div>
                    </div>
                    <div className="formulario-Producto">
                        <form action="/addProduct" method="post" enctype="multipart/form-data">
                            <input type="file" hidden name="ImaP" id="ImaP" />
                            <h3>Registra Empleado</h3>
                            <label htmlFor="nombreP">Nombre(s)</label>
                            <input type="text" id="nombreP" name="nombreP" />
                            <label htmlFor="PrecioP">Appellido Paterno</label>
                            <input type="text" id="PrecioP" name="PrecioP" />
                            <label htmlFor="ExisP">Apellido Materno</label>
                            <input type="text" id="ExisP" name="ExisP" />
                            <input type="submit" className="enviar" />
                        </form>
                    </div>
                </div>
            </section>
        </div>


    )
}
