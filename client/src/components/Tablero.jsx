import Header from "./micro_components/Header.jsx"
import TableroCard from "./micro_components/TableroCard.jsx"
import '../../public/CSS/tablero.css'

export default function Tablero() {
    return (
        <section>
            <Header></Header>
            <section className="Tableros">
                <TableroCard/>
            </section>
        </section>
    )
}
