import BarChartsJS from "./chartJS/BarChartsJS";
import HeaderAdmin from "./micro_components/HeaderAdmin";
import { useState } from 'react'
import { UserProduct } from '../../public/JS/Data.js'

export default function GraficasAdministrador() {

    const [userProduct, setUserProduct] = useState({
        labels: UserProduct.map((data) => data.Productos_idProductos),
        datasets: [{
            label: "Ventas",
            data: UserProduct.map((data) => data.CantidadVendida),

        }]
    })

    return (
        <section>
            <HeaderAdmin />
            <section className="Tableros">
                <BarChartsJS charData={userProduct} />
            </section>
        </section>

    )
}
