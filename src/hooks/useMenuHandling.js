import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCurrentMenu } from '../store/slices/auth';

const useMenuHandling = (menuNameCurrent) => {
    const params = useParams();
    const dispatch = useDispatch();
    const currentRol = useSelector(state => state.login.currentRol);
    const currentMenu = useSelector(state => state.login.currentMenu);

    const [menuName, setMenuName] = useState(params["*"]);

    useEffect(() => {
        if (params["*"] === menuNameCurrent) {
            if (currentRol?.menus.find(r => r.nombre === menuNameCurrent)) {
                dispatch(addCurrentMenu(currentRol?.menus.find(r => r.nombre === menuName)));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (currentMenu.nombre != null && currentMenu.nombre !== params["*"]) {
            dispatch(addCurrentMenu(currentRol?.menus.find(r => r.nombre === params["*"])));
        }
    })


    return {
        menuName,
        setMenuName
    };
};

export default useMenuHandling;