import HeaderAdmin from "./micro_components/HeaderAdmin";
import { Link } from "react-router-dom";
import GestickAdminTable from "./micro_components/GestickAdminTable";
import HeaderOpcionesAdmin from "./micro_components/HeaderOpcionesAdmin";

export default function GestickAdmin() {

    return (
        <section>
            <HeaderAdmin/>
            <HeaderOpcionesAdmin/>
            <section className="Tableros">
                <GestickAdminTable/>
            </section>
        </section>
    )
}
