import { SubtitleRol } from "../../components/dashboard/SubTitleRol";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./menu";
import { ErrorPage } from "../error/errorPage";
import { ListMenus } from "./ListMenus";

export const Rol = () => {

    return (
        <>
            <SubtitleRol />
            <Routes>
                <Route path='/' element={
                    <ListMenus
                        description={"demo"}
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
