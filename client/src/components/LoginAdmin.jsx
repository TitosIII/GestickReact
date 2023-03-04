import { Form, Formik } from 'formik'
import { logAdmin } from '../api/gestick.api'
import '../../public/CSS/login.css'
import { useState } from 'react'

export default function LoginAdmin() {
    const [message, setMessage] = useState("");

    return (
        <section id='login'>
            <div className="login-root">
                <div className="box-root flex-flex flex-direction--column" id='primero'>
                    <div className="loginbackground box-background--white padding-top--64">
                        <div className="loginbackground-gridContainer">
                            <div className="box-root flex-flex" id='segundo'>
                                <div className="box-root" id='tercero'>
                                </div>
                            </div>
                            <div className="box-root flex-flex" id='cuarto'>
                                <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" id='quinto'></div>
                            </div>
                            <div className="box-root flex-flex" id='sexto'>
                                <div className="box-root box-background--blue800" id='quinto'></div>
                            </div>
                            <div className="box-root flex-flex" id='septimo'>
                                <div className="box-root box-background--blue animationLeftRight" id='quinto'></div>
                            </div>
                            <div className="box-root flex-flex" id='octavo'>
                                <div className="box-root box-background--gray100 animationLeftRight tans3s" id='quinto'></div>
                            </div>
                            <div className="box-root flex-flex" id='noveno'>
                                <div className="box-root box-background--cyan200 animationRightLeft tans4s" id='quinto'></div>
                            </div>
                            <div className="box-root flex-flex" id='decimo'>
                                <div className="box-root box-background--blue animationRightLeft" id='quinto'></div>
                            </div>
                            <div className="box-root flex-flex" id='oonceavo'>
                                <div className="box-root box-background--gray100 animationRightLeft tans4s" id='quinto'></div>
                            </div>
                            <div className="box-root flex-flex" id='doceavo'>
                                <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" id='quinto'></div>
                            </div>
                        </div>
                    </div>
                    <div className="box-root padding-top--24 flex-flex flex-direction--column" id='trece'>
                        <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                            <h1 id="h1Login"><a id="linksLogin" href="http://blog.stackfindover.com/" rel="dofollow">GESTICK</a></h1>
                        </div>
                        <div className="formbg-outer">
                            <Formik
                                initialValues={{
                                    idAdmin: null,
                                    password: null
                                }}

                                

                                onSubmit={async (values) => {
                                    console.log(values)
                                    values.idAdmin = parseInt(values.idAdmin);
                                    try {
                                        const response = await logAdmin(values);
                                        console.log(response);
                                        if(response.data.error){
                                            setMessage(response.data.error);
                                            console.log(response.data.error);
                                        }else{
                                            ///window.location.href = "http://localhost:5173/Tablero";
                                        }
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                            >
                                {({ handleChange, handleSubmit, isSubmitting }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="formbg">
                                            <div className="formbg-inner padding-horizontal--48">
                                                <span id="spanLogin" className="padding-bottom--15">Iniciar sesion Administrador</span>
                                                    <div className="field padding-bottom--24">
                                                        <label id="labelLogin" htmlFor="idAdmin">ID Administrador O Nombre De Usuario</label>
                                                        <input type="number" name="idAdmin" id="idAdmin" required onChange={handleChange}/>
                                                    </div>
                                                    <div className="field padding-bottom--24">
                                                        <div className="grid--50-50">
                                                            <label id="labelLogin" htmlFor="password">Contraseña</label>
                                                        </div>
                                                        <input type="password" name="password" id="password" required onChange={handleChange}/>
                                                    </div>
                                                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                                        {message}
                                                    </div>
                                                    <div className="field padding-bottom--24">
                                                        <button className="button" type="submit" disabled={isSubmitting}>
                                                            {isSubmitting ? "Cargando" : "Ingresar"}
                                                        </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            <div className="footer-link padding-top--24">
                                <span id="spanLogin">No tienes cuenta? <a id="linksLogin" href="/signAdministrador">Registrate</a></span>
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span id="spanLogin"><a id="linksLogin" href="LoginEmpleado">¿Eres Empleado?</a></span>
                                    <span id="spanLogin"><a id="linksLogin" href="#" className="terms__cta">Terminos y privacidad</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
