import { useState } from 'react'
import BarChartsJS from "./chartJS/BarChartsJS";
import { UserProduct } from '../../public/JS/Data.js'
import Header from './micro_components/Header';

export default function EstadoGeneralAdmin() {

    const [userProduct, setUserProduct] = useState({
        labels: UserProduct.map((data) => data.Productos_idProductos),
        datasets: [{
            label: "Ventas",
            data: UserProduct.map((data) => data.CantidadVendida),

        }]
    })

    return (
        <section>
            <Header/>
            <section className="Tableros">
                <BarChartsJS charData={userProduct} />
            </section>
        </section>
    )
}
