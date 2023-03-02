import Header from './micro_components/Header'
import '../../public/CSS/Inventario.css'
import CardsProducto from './micro_components/CardsProducto'
import HeaderOpcionesAdmin from './micro_components/HeaderOpcionesAdmin'

export default function Inventario() {
    return (
        <section>
            <Header/>
            <HeaderOpcionesAdmin/>
            <section className="cardscontainer">
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>
                    <CardsProducto/>

            </section>
        </section>

    )
}
