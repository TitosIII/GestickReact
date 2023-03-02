import '../../public/CSS/login.css'

export default function LoginEmpleado() {

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
                            <div className="formbg">
                                <div className="formbg-inner padding-horizontal--48">
                                    <span id="spanLogin" className="padding-bottom--15">Iniciar sesion empleado</span>
                                    <form id="stripe-login" action="/logEmpleado" method="post">
                                        <div className="field padding-bottom--24">
                                            <label id="labelLogin" htmlFor="id">ID Empleado O Nombre De Usuario</label>
                                            <input type="id" name="id" id="id" />
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <div className="grid--50-50">
                                                <label id="labelLogin" htmlFor="password">Contraseña</label>
                                            </div>
                                            <input type="password" name="password" id="password" />
                                        </div>
                                        <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                        </div>
                                        <div className="field padding-bottom--24">
                                            <button className="button" type="submit">
                                                <span id="spanLogin">Ingresar</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-link padding-top--24">
                                <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                    <span id="spanLogin"><a id="linksLogin" href="/loginAdiministrador">¿Eres Administrador?</a></span>
                                    <span id="spanLogin"><a id="linksLogin" href="#" className="terms__cta">Terminos y privacidad</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="modal ">
                <div class="modal__container">
                    <div class="part_container">
                        <h2 class="modal__title">Terminos y Condiciones</h2>
                    </div>
                    <hr/>
                        <div class="part_container">
                            <p class="modal__paragraph">GESTICK es una web para papelerías, creada por GESTICK Team, antes de acceder a ella
                                debes saber que tendrás que llenar un formulario con datos básicos, además para usar la página DEBES PERMITIR
                                el acceso automático a la cámara y la galería fotográfica de tu dispositivo. Todos los productos ofrecidos en
                                la aplicación tienen un costo que deberá cancelar electrónicamente en el caso de desear adquirirlos.</p>
                        </div>
                        <a href="#" class="modal__close">Aceptar terminos y condiciones</a>
                </div>
            </section>
        </section >
    )
}
