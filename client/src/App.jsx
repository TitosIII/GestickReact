import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./components/Index.jsx";
import SingUp from "./components/SingUp.jsx";
import LoginEmpleado from "./components/LoginEmpleado.jsx";
import LoginAdmin from "./components/LoginAdmin.jsx";
import Tablero from "./components/Tablero.jsx";
import EstadoGeneralAdmin from "./components/EstadoGeneralAdmin.jsx";
import Productos from "./components/Productos.jsx";
import HistorialVenta from "./components/HistorialVenta.jsx";
import EmpleadosTablero from "./components/EmpleadosTablero.jsx";
import EditarEmpleado from "./components/EditarEmpleado.jsx";
import GestickAdmin from "./components/GestickAdmin.jsx";
import Inventario from "./components/Inventario.jsx";
import GraficasAdministrador from "./components/GraficasGestick.jsx";
import { AdminsContextPrvider } from "./context/adminsContext.jsx";
import Cart from "./components/Cart.jsx";
import { ReactSession } from "react-client-session";

export default function App() {
  ReactSession.setStoreType("sessionStorage");

  return (
    <AdminsContextPrvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/TitosChampionsSonicAdrianJoshuaGael"
          element={<GestickAdmin />}
        />
        <Route path="/EditarAdministrador/:idAdmin" element={<SingUp />} />
        <Route path="/GraficasGestick" element={<GraficasAdministrador />} />
        <Route path="/signAdministrador" element={<SingUp />} />
        <Route path="/loginAdiministrador" element={<LoginAdmin />} />
        <Route path="/Tablero" element={<Tablero />} />
        <Route path="/Empleados" element={<EmpleadosTablero />} />
        <Route path="/AgregarEmpleado" element={<EditarEmpleado />} />
        <Route path="/EditarEmpleado" element={<EditarEmpleado />} />
        <Route path="/InventarioProductos" element={<Inventario />} />
        <Route path="/Product" element={<Productos />} />
        <Route path="/HistorySell" element={<HistorialVenta />} />
        <Route path="/EstadoGeneralAdmin" element={<EstadoGeneralAdmin />} />
        <Route path="/loginEmpleado" element={<LoginEmpleado />} />
        <Route path="/Carrito" element={<Cart />} />
      </Routes>
    </AdminsContextPrvider>
  );
}
