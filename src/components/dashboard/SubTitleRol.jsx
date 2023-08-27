import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SubtitleRol = () => {
    const location = useLocation();
    const [tab, setTab] = useState({});
    const [partial, setPartial] = useState([]);
    const rols = useSelector(state => state.login.userDetail?.rols);

    useEffect(() => {
        setPartial(location.pathname.slice(1).split('/'));
    }, [location]);

    useEffect(() => {
        let foundMenus = [];

        const rolEncontrado = rols?.find(rol => rol.nombre === decodeURIComponent(partial[1]));
        if (rolEncontrado) {
            setTab(prevTab => ({
                ...prevTab,
                nombrerol: rolEncontrado.nombre,
                etiquetarol: rolEncontrado.etiqueta,
                nombremenu: null,
                etiquetamenu: null
            }));
            foundMenus = rolEncontrado?.menus || [];
        }
        const menuEncontrado = foundMenus.find(menu => menu.nombre === decodeURIComponent(partial[3]));
        if (menuEncontrado) {
            setTab(prevTab => ({
                ...prevTab,
                nombremenu: menuEncontrado.nombre,
                etiquetamenu: menuEncontrado.etiqueta
            }));
        }
    }, [partial, rols]);

    return (
        <div className="mb-2">
            <Link
                className='dark:text-gray-200 font-semibold text-md'
                to={`/rol/${tab?.nombrerol}`}
            >
                {' / ' + (tab?.etiquetarol || '')}
            </Link>
            <Link
                className='dark:text-gray-200 font-semibold text-md'
                to={`/rol/${tab?.nombrerol}/menu/${tab?.nombremenu}`}
            >
                {tab?.etiquetamenu ? (' / ' + tab?.etiquetamenu) : ''}
            </Link>
            <Link
                className='dark:text-gray-200 font-semibold text-md'
                to={`/rol/${tab?.nombrerol}/menu/${tab?.nombremenu}/${partial[4]}/${partial[5]}`}
            >
                {partial[5] ? (' / ' + partial[5]) : ''}
            </Link>
        </div>
    );
}
