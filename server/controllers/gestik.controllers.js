import { db } from "../db.js";

///Guardar al admin en la base de datos.
export const signAdmin = async (req, res) => {
    var idAdmin = 0;
    var existingId = true;
    var data;

    try {
        while (existingId || idAdmin < 100000) {
            existingId = false;
            idAdmin = Math.floor(Math.random() * 1000000);
            [data] = await db.query(`select idAdmin from admin;`);
            data.forEach((row) => {
                if (idAdmin === row.idAdministrador) {
                    existingId = true;
                }
            });
        }

        const { Name, AP, AM, PW } = req.body
        const result = await db.query('INSERT INTO admin(idAdmin,AdNombre,AdAppat,AdApmat,AdContrasenna,Gestick_idGestick) VALUES (?,?,?,?,?,?)', [
            idAdmin,
            Name,
            AP,
            AM,
            PW,
            1
        ]);
        console.log(result);
        res.send("creando admin")
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
};

///Inicio de sesión para el administrador.
export const logAdmin = async (req, res) => {
    console.log(req.body);
    const { idAdmin, password } = req.body

    try{
        const [results] = await db.query(`SELECT * FROM Admin WHERE idAdmin = ${idAdmin} AND AdContrasenna = "${password}"`, [
            idAdmin,
            password
        ])

        console.log(results);

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.json({error: 'ID Incorrectos O Contraseña Incorrecta'});
        }
    }catch(error){
        res.json({error: "Hubo un error en el servidor. Vuelva a intentarlo más tarde."});
        console.log(error)
    }

};

//tablero Sesión

export const tableroAdmin = async (req, res) => {
}

//ObtenerAdministradores

export const getAdministradores = async (req, res) => {
    const [result] = await db.query("SELECT * FROM admin")
    console.log(result);
    res.json(result)
};

//Obtener Un Administrador

export const getAdministrador = async (req, res) => {
    const [result] = await db.query('SELECT * FROM admin WHERE idAdmin = ?', [req.params.idAdmin])

    if (result.length === 0) {
        return res.status(404).json({ message: "Administrador No Encontrado" });
    }

    res.json(result[0])
}

//Eliminar Administrador

export const deleteAdministrador = async (req, res) => {
    const [result] = await db.query('DELETE FROM Admin WHERE idAdmin = ?', [req.params.idAdmin]);

    if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Administrador No existe" })
    }

    return res.sendStatus(204)
}

//Modificar Administrador

export const updateAdministrador = async (req, res) => {
    const { Name, AP, AM, PW } = req.body;

    const result = await db.query("UPDATE admin SET ? WHERE idAdmin =?", [req.body, req.params.idAdmin])
    res.json(result)
}

export const signEmp = async (req, res) => {
    try {
        var id;
        var existingId = true;
        const banco =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let aleatoria = "";
        for (let i = 0; i < 10; i++) {
            aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
        }

        while (existingId) {
            existingId = false;
            id = Math.floor(Math.random() * 1000000);

            [results] = await db.query(`select idEmpleado from Empleado;`);

            results.forEach((row) => {
                if (row.idEmpleado == id) {
                    existingId = true;
                    id = Math.floor(Math.random() * 1000000);
                }
            });
        }

        var setString = `insert into Empleado (idEmpleado, EApellido_Paterno, EApellido_Materno, ENombre, EContraseña, Administrador_idAdministrador) values (${id},"${req.body.AP}","${req.body.AM}","${req.body.Name}","${aleatoria}", ${sesion.userid})`;
        db.query(setString);
        res.json({ id: id, aleatoria: aleatoria });
    } catch (error) {
        console.log(error);
        res.json({
            error: "Hubo un error en el servidor. Vuelva a intentarlo más tarde.",
        });
    }
};

export const logEmpleado = async (req, res) => {
    var data;
    try {
        [data] = await db.query(
            `select * from Empleado where idEmpleado = ${req.body.id} ;`
        );

        if (data.length === 0) {
            res.json({ error: "ID no registrado." });
        } else {
            data.forEach((row) => res.json(row));
        }
    } catch (error) {
        console.log(error);
        res.json({
            error: "Hubo un error en el servidor. Vuelva a intentarlo más tarde.",
        });
    }
};

export const stockPage = async (req, res) => {
    var sesion = req.body;
    if (sesion.type === "a") {
        var data;
        var admindata;
        try {
            [data] = await db.query(
                `SELECT * from Productos a INNER JOIN Marca b on a.Marca_idMarca = b.idMarca where Admin_idAdmin = ${sesion.userid} ;`
            );

            admindata = {
                nombre: sesion.name,
                AP: sesion.AP,
                AM: sesion.AM,
                ID: sesion.userid,
                Contraseña: sesion.PW,
                table: data,
            };

            res.json(admindata);
        } catch (error) {
            console.log(error);
        }
    } else if (sesion.type === "e") {
        var data;
        try {
            [data] = await db.query(
                `SELECT * from Producto a INNER JOIN Marca b on a.Marca_idMarca = b.idMarca where Administrador_idAdministrador = ${sesion.idAdmin} ;`
            );

            empdata = {
                nombre: sesion.name,
                AP: sesion.AP,
                AM: sesion.AM,
                ID: sesion.userid,
                Contraseña: sesion.PW,
                table: data,
            };

            res.json(empdata);
        } catch (error) {
            console.log(error);
            res.json({
                error: "Hubo un error en el servidor. Vuelva a intentarlo más tarde.",
            });
        }

        res.json(empdata);
    }
};

export const addProduct = async (req, res) => {
    var id = Math.floor(Math.random() * 1000000);
    var setString = `insert into Producto (idProducto, PNombre, Precio, Descripcion, Imagen, Administrador_idAdministrador, Marca_idMarca, Existencias) values (${id},"${req.body.nombreP}",${req.body.PrecioP},"${req.body.DesPro}","uploads/${req.body.FileNameIMG}",${sesion.userid}, ${req.body.Marcas}, ${req.body.ExisP});`;
    try {
        await db.query(setString);
        res.redirect("/stock");
    } catch (error) {
        console.log(error);
        res.json({
            error: "Hubo un error en el servidor. Vuelva a intentarlo más tarde.",
        });
    }
};

export const modifyProduct = async (req, res) => {
    try {
        await db.query(
            `update producto SET PNombre = "${req.body.nombreP}", Descripcion = "${req.body.DesPro}", Precio =${req.body.PrecioP}, Existencias =${req.body.ExisP}, Marca_idMarca =${req.body.Marcas} where idProducto = ${req.body.idP}`
        );
        res.redirect("/stock");
    } catch (error) {
        console.log(error);
        res.json({
            error: "Hubo un error en el servidor. Vuelva a intentarlo más tarde.",
        });
    }
};

export const deleteProduct = (req, res) => {
    try {
        db.query(`DELETE from Producto where idProducto = ${req.body.idP}`);

        res.redirect("/stock");
    } catch (error) {
        console.log(error);
        res.json({
            error: "Hubo un error en el servidor. Vuelva a intentarlo más tarde.",
        });
    }
};
