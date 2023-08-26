import React from 'react'
import { useSelector } from 'react-redux'
import { HistorialDeSesiones } from './historial_de_sesiones'
import { Users } from './users'
import { HistorialDeCambios } from './historial_de_cambios'
import { Roles } from './roles'
import { Productos } from './productos'
import { Almacenes } from './almacenes'
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
                currentMenu?.nombre === "productos" &&
                <Productos />
            }
            {
                currentMenu?.nombre === "almacenes" &&
                <Almacenes />
            }
            {
                currentMenu?.nombre === "historial-de-sesiones" &&
                <HistorialDeSesiones />
            }
            {
                currentMenu?.nombre === "historial-de-cambios" &&
                <HistorialDeCambios />
            }
        </>
    )
}
