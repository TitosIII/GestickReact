import HeaderPro from "./micro_components/HeaderPro";
import { useState } from 'react'
import BarChartsJS from "./chartJS/BarChartsJS";
import { UserProduct } from '../../public/JS/Data.js'

export default function HistorialVenta() {

    const [userProduct, setUserProduct] = useState({
        labels: UserProduct.map((data) => data.Productos_idProductos),
        datasets: [{
            label: "Ventas",
            data: UserProduct.map((data) => data.CantidadVendida),

        }]
    })

    return (
        <section>
            <HeaderPro/>
            <section className="Tableros">
                <BarChartsJS charData={userProduct} />
            </section>
        </section>
    )
}
