import { Link } from "react-router-dom";

export default function HeaderOpcionesAdmin() {



    var paginas = ""
    var items = ""

    var urlActual = window.location.href

    console.log(urlActual)

    if (urlActual === "http://127.0.0.1:5173/InventarioProductos") {
        paginas = "Productos"
        items = "Producto"
    } else if (urlActual === "http://127.0.0.1:5173/Empleados") {
        paginas = "Empleados"
        items = "Empleado"
    } else if(urlActual === "http://127.0.0.1:5173/TitosChampionsSonicAdrianJoshuaGael"){
        paginas = "Administradores"
        items = "Administrador"
    }

    console.log(urlActual)

    return (
        <div className="Header-Opciones">
            <h2 className="logo2">{paginas}</h2>
            <nav className="menu">

                <div className="buscar">
                    <input type="text" placeholder="      Buscar" required id="inputbuscar" />
                    <div className="btnBuscar">
                        <i className="fas fa-search icon"></i>
                    </div>
                </div>

                <Link to="#" id="BotonActivo" className="Separado">Agregar {items}</Link>
            </nav>
        </div>
    )
}
