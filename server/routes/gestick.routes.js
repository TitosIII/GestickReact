import { Router } from "express";
import {
    signAdmin,
    logAdmin,
    signEmp,
    logEmpleado,
    addProduct,
    modifyProduct,
    deleteProduct,
    getAdministradores,
    getAdministrador,
    deleteAdministrador,
    updateAdministrador,
    tableroAdmin
} from "../controllers/gestik.controllers.js";

const rout = Router();

//Obtención de administradores por parte de GESTICK
rout.get("/TitosChampionsSonicAdrianJoshuaGael", getAdministradores);

//Obtención de UN administrador
rout.get("/EditarAdministrador/:idAdmin", getAdministrador)

//Eliminar UN Administrador
rout.delete("/TitosChampionsSonicAdrianJoshuaGael/:idAdmin", deleteAdministrador)

//Editar UN Administrador
rout.put("/TitosChampionsSonicAdrianJoshuaGael/:idAdmin", updateAdministrador)

///Registro del Admin : Regresa un json con id generado del admin
rout.post("/signAdministrador", signAdmin);

///Inicio de sesión del Admin : Regresa un json con los datos del Admin, entre ellos un json del inventario.
rout.post("/loginAdiministrador", logAdmin);

//Tablero Inicial Del Administrador

rout.get("/Tablero", tableroAdmin)

///Registro del empleado : Regresa el id y contraseña generados.
rout.post("/signEmpleado", signEmp);

///Inicio de sesion del empleado : Regresa el los datos
rout.post("/logEmpleado", logEmpleado);

///Añade producto al inventario : Redirige a stock
rout.post("/addProduct", addProduct);

///Modifica producto al inventario : Redirige a stock
rout.post("/modifyProduct", modifyProduct);

///Borra producto al inventario : Redirige a stock
rout.post("/deleteProduct", deleteProduct);

export default rout;
