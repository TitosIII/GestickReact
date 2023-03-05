import Header from "./micro_components/Header.jsx";
import TableroCard from "./micro_components/TableroCard.jsx";
import "../../public/CSS/tablero.css";
import { ReactSession } from "react-client-session";

export default function Tablero() {
  console.log(ReactSession.get("idAdmin"));
  if (ReactSession.get("idAdmin") === undefined) {
    window.location.href = "http://localhost:5173/loginAdiministrador";
  } else {
    return (
      <section>
        <Header></Header>
        <section className="Tableros">
          <TableroCard />
        </section>
      </section>
    );
  }
}
