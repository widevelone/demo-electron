import { useState } from "react";
import { useDispatch } from "react-redux";
import { defaultPaginateParams } from "../utils/defaulStates";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { requestAuthPaginate } from '../http/httpRequest'
import { TableContainer } from '../components/table/TableContainer'
import { Paginator } from '../components/table/Paginator'
import { formatFilters } from '../utils/defaulStates'
import { formatDateWithTime } from '../utils/dateFormat'
import { Searcher } from '../components/form/Searcher'
import { FilterSelect } from '../components/form/FilterSelect'
import { RangeDate } from '../components/datePicker/CustomDateRangePicker'
import { Actions } from '../components/form/actions'
import { TableSection } from '../components/table/TableSection'
import { ActionSection } from '../components/table/ActionSection'
import { Section } from '../components/table/Section'
import { ModalForm } from '../components/modals/ModalForm'
import { UpdateValuesModal } from '../FormSchemes/GeneralFunctions'

export const useGeneralParams = (defaultPaginate) => {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const params = useParams()

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
        navigate,
        params,
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
        // imports
        requestAuthPaginate,
        TableContainer,
        formatDateWithTime,
        Paginator: <Paginator
            paginate={paginate}
            setPaginate={setPaginate}
        />,
        formatFilters,
        Searcher,
        FilterSelect,
        RangeDate,
        Actions,
        TableSection,
        ActionSection,
        Section,
        ModalForm,
        UpdateValuesModal,
    }
}