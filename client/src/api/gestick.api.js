import axios from 'axios'

export const getAdminRequest = async ()=>{
    return await axios.get("http://localhost:3000/TitosChampionsSonicAdrianJoshuaGael")
}

export const createAdminRequest = async(data)=>
    await axios.post('http://localhost:3000/signAdministrador', data)

export const deleteAdmins = async(idAdmin) =>{
    await axios.delete(`http://localhost:3000/TitosChampionsSonicAdrianJoshuaGael/${idAdmin}`)}

export const getAdminsRequest = async (idAdmin) =>
    await axios.get(`http://localhost:3000/EditarAdministrador/${idAdmin}`)

export const logAdmin = async(data) =>
    await axios.post('http://localhost:3000/loginAdiministrador',data)