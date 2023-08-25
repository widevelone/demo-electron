import React from 'react'
import { useSelector } from 'react-redux'
import { HistorialDeSesiones } from './historial_de_sesiones'
import { Users } from './users'
import { HistorialDeCambios } from './historial_de_cambios'
import { Roles } from './roles'
// import { Usuarios } from '../menus/Usuarios'
// import { Roles } from '../menus/Roles'
// import { Menus } from '../menus/Menu'

export const Menu = () => {
    const currentMenu = useSelector(state => state.login.currentMenu)
    return (
        <>
            {
                currentMenu?.nombre === "usuarios" &&
                <Users />
            }
            {
                currentMenu?.nombre === "roles" &&
                <Roles />
            }
            {
                currentMenu?.nombre === "menus" &&
                // <Menus />
                <div>menus</div>
            }
            {
                currentMenu?.nombre === "historial-de-sesiones" &&
                // <Menus />
                <HistorialDeSesiones />
            }
            {
                currentMenu?.nombre === "historial-de-cambios" &&
                // <Menus />
                <HistorialDeCambios />
            }
        </>
    )
}
