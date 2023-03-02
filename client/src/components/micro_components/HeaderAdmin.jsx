export default function HeaderAdmin() {

    return (
        <div><header>
            <h2 className="logo">GESTICK</h2>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="mostrar-menu">
                &#8801
            </label>
            <nav className="menu">
                <a href="/TitosChampionsSonicAdrianJoshuaGael">Administradores</a>
                <a href="/GraficasGestick">DashBoard</a>
            </nav>
        </header></div>
    )
}
