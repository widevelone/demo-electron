import { useState } from "react";
import { useDispatch } from "react-redux";
import { defaultPaginateParams } from "../utils/defaulStates";

export const useGeneralParams = (defaultPaginate) => {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);

    const [paginate, setPaginate] = useState(defaultPaginateParams(defaultPaginate));
    const [selectedDay, setSelectedDay] = useState();
    const [selecteds, setSelecteds] = useState([]);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false)
    const [stateData, setStateData] = useState('loading')

    // create modal form
    const [createModal, setCreateModal] = useState(false);
    // update modal form
    const [updateModal, setUpdateModal] = useState(false);
    const [currentData, setCurrentData] = useState({});
    // delete modal form
    const [deleteModal, setDeleteModal] = useState(false);

    return {
        dispatch,
        data, setData,
        paginate, setPaginate,
        selectedDay, setSelectedDay,
        selecteds, setSelecteds,
        selectAllChecked, setSelectAllChecked,
        isChecked, setIsChecked,
        stateData, setStateData,
        createModal, setCreateModal,
        updateModal, setUpdateModal,
        deleteModal, setDeleteModal,
        currentData, setCurrentData,
    }
}