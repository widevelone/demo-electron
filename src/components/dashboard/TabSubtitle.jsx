import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const TabSubtitle = () => {
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
                to={`/rol/${tab?.nombrerol}`}
            >
                <TabSlash
                    val={tab?.etiquetarol}
                    validate={tab?.etiquetarol}
                />
            </Link>
            <Link
                to={`/rol/${tab?.nombrerol}/menu/${tab?.nombremenu}`}
            >
                <TabSlash
                    val={tab?.etiquetamenu}
                    validate={tab?.etiquetamenu}
                />
            </Link>
            <Link
                to={`/rol/${tab?.nombrerol}/menu/${tab?.nombremenu}/${partial[4]}/${partial[5]}`}
            >
                <TabSlash
                    val={partial[4]}
                    validate={partial[5]}
                />
            </Link>
            <Link
                to={`/rol/${tab?.nombrerol}/menu/${tab?.nombremenu}/${partial[4]}/${partial[5]}/${partial[6]}/${partial[7]}`}
            >
                <TabSlash
                    val={`${partial[6]}`}
                    validate={partial[7]}
                />
            </Link>
        </div>
    );
}

const TabSlash = ({ val, validate }) => {
    return (
        validate &&
        <span className='dark:text-gray-200 font-semibold text-md'>
            <span className='text-yellow-600'> / </span> {val}
        </span>
    )
}