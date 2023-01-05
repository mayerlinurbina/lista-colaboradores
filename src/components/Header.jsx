const Header = ({reset, referencia, buscar}) => {
    return (
        <header>
            <h3>Buscador de colaboradores</h3>
            <input 
                type="text" 
                placeholder= " Buscar colaborador"
                onChange={reset}
                onKeyDown={buscar}
                ref={referencia}
            />
        </header>
    )
}
export default Header