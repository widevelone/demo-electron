import { Routes, Route } from "react-router-dom";
import { Menu } from "./menu";
import { ErrorPage } from "../error/errorPage";
import { ListMenus } from "./ListMenus";
import { TabSubtitle } from "../../components/dashboard/TabSubtitle";

export const Rol = () => {

    return (
        <>
            <TabSubtitle />
            <Routes>
                <Route path='/' element={
                    <ListMenus
                        description={`Lista de los menus disponibles:`}
                    />
                } />
                <Route
                    path={`menu/:menuname/*`}
                    element={<Menu />}
                />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </>
    )
}
