import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const useMenuHandling = () => {
    const params = useParams()
    const rols = useSelector(state => state.login.userDetail?.rols)
    const [menus, setMenus] = useState([])

    useEffect(() => {
        setMenus([])
    }, [params.rolname])

    useEffect(() => {
        rols?.forEach(rol => {
            if (rol.nombre === params.rolname) {
                setMenus(rol.menus)
            }
        })
    }, [rols, params.rolname, params.menuname])


    return {
        rols,
        menus,
        params
    }
}

export default useMenuHandling