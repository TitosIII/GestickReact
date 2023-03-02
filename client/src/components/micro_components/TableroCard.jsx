import '../../../public/CSS/TableroCard.css'

export default function TableroCard() {
    return (

        <div className="tarjetaTablero">
            <div className="imgTarjetaTablero"></div>
            <div className="contentTarjetaTablero">
                <div className="tituloTarjetaTablero">
                    <h3>Gestick</h3>
                </div>
                <div className="btn-containerTarjetaTablero">
                    <button className="button2">Crear Sesión</button>
                    <a href="/EstadoGeneralAdmin">
                        <button className="button2"><span> Finanzas</span></button>
                    </a>
                </div>
            </div>
        </div>

    )
}
