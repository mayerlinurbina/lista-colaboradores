const listado = ({listado}) => {
    return (
        <ul>
            {
                listado.map((colaborador) => {
                    return(
                    <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>
                    )
                }

                )
            }
        </ul>
    )
}
export default listado