import axios from "axios";

export const getAdminRequest = async () => {
  return await axios.get(
    "http://localhost:3000/TitosChampionsSonicAdrianJoshuaGael"
  );
};

export const createAdminRequest = async (data) =>
  await axios.post("http://localhost:3000/signAdministrador", data);

export const deleteAdmins = async (idAdmin) => {
  await axios.delete(
    `http://localhost:3000/TitosChampionsSonicAdrianJoshuaGael/${idAdmin}`
  );
};

export const getAdminsRequest = async (idAdmin) =>
  await axios.get(`http://localhost:3000/EditarAdministrador/${idAdmin}`);

export const updateAdminRequest = async (idAdmin, newFieldAdmin) =>
  await axios.put(
    `http://localhost:3000/EditarAdministrador/${idAdmin}`,
    newFieldAdmin
  );

export const logAdmin = async (data) =>
  await axios.post("http://localhost:3000/loginAdiministrador", data);

export const logEmp = async (data) =>
  await axios.post("http://localhost:3000/logEmpleado", data);

export const signEmp = async (data) =>
  await axios.post("http://localhost:3000/signEmpleado", data);

export const uploadImage = async (data) =>
  await axios.post("https://api.cloudinary.com/v1_1/dkhzhsqzh/image/upload", data);

export const getProducts = async (data) =>
  await axios.post("http://localhost:3000/inventario", data);

export const getEmp = async (data) =>
  await axios.post("http://localhost:3000/getEmpleados", data);

export const addProduct = async (data) =>
  await axios.post("http://localhost:3000/addProduct", data);

export const procesSale = async (data) =>
  await axios.post("http://localhost:3000/procesSale", data);

export const deleteEmpleado = async (data) =>
  await axios.post("http://localhost:3000/deleteEmpleado", data);

export const getAnEmp = async (data) =>
  await axios.post("http://localhost:3000/getAnEmp", data);

export const modifyEmp = async (data) =>
  await axios.post("http://localhost:3000/modifyEmp", data);

export const getAProduct = async (data) =>
  await axios.post("http://localhost:3000/getAProduct", data);

export const modifyProduct = async (data) =>
await axios.post("http://localhost:3000/modifyProduct", data);

export const deleteProduct = async (data) =>
  await axios.post("http://localhost:3000/deleteProduct", data);

export const dashboardDUENNO = async (data) =>
  await axios.post("http://localhost:3000/EstadoGeneralAdmin", data);

export const dashboardADMIN = async (data) =>
  await axios.post("http://localhost:3000/GraficasGestick", data);

export const getTradeMark = async () =>
  await axios.get("http://localhost:3000/getTradeMark");

export const historyPRODUCT = async (data) =>
    await axios.get("http://localhost:3000/historialVENTA", data)
