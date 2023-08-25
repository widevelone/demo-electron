import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubtitleRol } from "../../components/dashboard/SubTitleRol";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Menu } from "./menu";
import { ErrorPage } from "../error/errorPage";
import { addCurrentMenu } from "../../store/slices/auth";
import { ListMenus } from "./ListMenus";

export const Rol = () => {
    const rol = useSelector(state => state.login.currentRol)
    const dispatch = useDispatch()
    useEffect(() => {
        if (sessionStorage.getItem("currentMenu")) {
            // console.log(rol?.listMenus?.find(r => r.name === sessionStorage.getItem("currentMenu")))
            if (rol?.menus?.find(m => m.nombre === sessionStorage.getItem("currentMenu"))) {
                dispatch(addCurrentMenu(rol?.menus?.find(m => m.nombre === sessionStorage.getItem("currentMenu"))))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rol]);
    return (
        <>
            <SubtitleRol />
            <Routes>
                <Route>
                    <Route index path='/' element={
                        <ListMenus
                            description={rol?.description}
                        />
                    } />
                    {
                        rol?.menus.map((menu, index) => (
                            <Route
                                key={index}
                                path={`${menu.nombre}`}
                                element={<Menu />}
                            // <Route path='roles' element={<Rol />} />
                            />
                        ))
                    }
                    {
                        sessionStorage.getItem("currentMenu") &&
                        < Route
                            path={`${sessionStorage.getItem("currentMenu")}/*`}
                            element={<Menu />}
                        />
                    }
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}
