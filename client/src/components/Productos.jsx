import HeaderPro from "./micro_components/HeaderPro.jsx";
import ImagenPro from "./micro_components/ImgenPro.jsx"
import '../../public/CSS/ProductosInfo.css'

export default function Productos() {
    return (

        <section>
            <HeaderPro />
            <nav className="NavProductoInfo">
                <div className="nombreProductoContent">
                    <label htmlFor="NombreProducto">Nombre Del Producto</label>
                    <input type="text" name="NombreProducto" id="NombreProducto" className="form-control" placeholder="Ejemplo: Pan Con Queso Y Aderezo" />
                </div>
                <div className="imagenPro">
                    <ImagenPro />
                </div>
            </nav>
            <section className="InformacionPro">
                <div className="TipoProContenedor">
                    <div className="tipoProContent">
                        <label htmlFor="tipoDeproducto">Tipo de Producto</label>
                        <select name="tipoDeproducto" id="tipoDeproducto" className="selectBonito">
                            <option value="*" defaultValue>
                                No Aplicable
                            </option>
                        </select>
                    </div>
                    <div className="DescripcionProContenedor">
                        <label htmlFor="DescripcionPro">Descripción Del Producto</label>
                        <textarea name="DescripcionPro" id="DescripcionPro" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="InformacionGeneral">
                    <div className="PrecioVentaContenedor">
                        <label htmlFor="PrecioVenta" >Precio De Venta</label>
                        <input type="text" id="PrecioVenta" />
                    </div>

                    <div className="MarcaContenedor">
                        <label htmlFor="MarcaPro">Marca:</label>
                        <select name="" id="MarcaPro" className="selectBonito">
                            <option>Soy Una Marca</option>
                        </select>
                    </div>
                    <div className="ExistenciasContenedor">
                        <label htmlFor="ExistenciasPro">Existencias</label>
                        <input type="number" id="ExistenciasPro" />
                    </div>

                </div>
                <div className="ExistenciasContenedor">
                    <button className="button2" type="submit"><span>Crear</span></button>
                    <a href="/InventarioProductos">
                        <button className="button3"> <span>Cancelar</span> </button>
                    </a>
                </div>

            </section>
        </section>
    )
}
