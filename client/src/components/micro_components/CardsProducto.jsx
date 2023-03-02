export default function CardsProducto() {
    return (
        <a className="card">
            <div className="cont-tarjeta__logo">
                <img src="ARTICULOS/Colores_PrismaColor.jpg" className="articuloIMG" alt="Articulo" />
            </div>
            <center>
                <p><span id="Nombre">Nombre Del Producto</span></p>
                <p><span id="PrecioDemanda">Existencias</span></p>
                <p id="cantidad" className="ceros">0</p>
            </center>
            
        </a>
    )
}
