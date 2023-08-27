import React from 'react'
import useMenuHandling from '../../hooks/useMenuHandling'

export const SubtitleRol = () => {
    // const dispatch = useDispatch()
    // const currentRol = useSelector(state => state.login.currentRol)
    // const currentMenu = useSelector(state => state.login.currentMenu)
    // const clicMenu = (menu) => {
    //     dispatch(addCurrentMenu(menu))
    // }
    const { params } = useMenuHandling()
    return (
        <div className="mb-2">
            <h1 className='dark:text-gray-200 font-semibold text-md'>
                {/* <Link
                    to={`/rol/${currentRol?.nombre}`}
                    // onClick={() => clicMenu(null)}
                >
                    {currentRol?.etiqueta}
                </Link>
                {
                    currentMenu?.nombre && currentRol.menus.find(m => m.nombre === currentMenu?.nombre) ?
                        <span className='dark:text-gray-400 text-gray-600 font-semibold text-md'>{` / ${currentMenu.etiqueta}`}</span>
                        :
                        ""
                } */}
                {params.rolname} / {params.menuname}
            </h1>
        </div>
    )
}
