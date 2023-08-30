import React, { useEffect } from 'react'
// import { requestAuthPaginate } from '../../../../http/httpRequest'
// import { TableContainer } from '../../../../components/table/TableContainer'
// import { Paginator } from '../../../../components/table/Paginator'
// import { formatFilters } from '../../../../utils/defaulStates'
// import { Searcher } from '../../../../components/form/Searcher'
// import { FilterSelect } from '../../../../components/form/FilterSelect'
// import { RangeDate } from '../../../../components/datePicker/CustomDateRangePicker'
// import { Actions } from '../../../../components/form/actions'
// import { TableSection } from '../../../../components/table/TableSection'
// import { ActionSection } from '../../../../components/table/ActionSection'
// import { Section } from '../../../../components/table/Section'
// import { ModalForm } from '../../../../components/modals/ModalForm'
// import { UpdateValuesModal } from '../../../../FormSchemes/GeneralFunctions'
import { useGeneralParams } from '../../../../hooks/useDataPaginate'
import { CreateValues, DeleteValues, UpdateValues } from '../../../../FormSchemes/AlmacenScheme'

export const ListAlmacenTable = () => {
    const {
        dispatch,
        navigate,
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
        Paginator,
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
    } = useGeneralParams('nombre')

    const getDataPaginate = async () => {
        await requestAuthPaginate(
            'get',
            `/almacens/pag`,
            null,
            paginate,
            setData,
            setStateData,
            setPaginate,
            dispatch
        )
    }
    useEffect(() => {
        getDataPaginate();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters]);

    useEffect(() => {
        setSelectAllChecked(false)
        setIsChecked(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters]);

    const recall = () => {
        getDataPaginate()
    }

    const redirect = (id) => {
        navigate(`productos/${id}`)
    }
    return (
        <Section>
            <ActionSection>
                <Actions
                    buttons={[
                        {
                            icon: 'repeat',
                            label: '',
                            action: recall
                        },
                        {
                            icon: 'add',
                            label: 'Crear',
                            action: () => setCreateModal(true)
                        },
                    ]}
                />
                <Searcher
                    paginate={paginate}
                    setPaginate={setPaginate}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    options={[
                        {
                            label: "Nombre",
                            value: "nombre"
                        },
                        {
                            label: "Código",
                            value: "codigo"
                        }
                    ]}
                />
                <div className="flex gap-2 flex-wrap">
                    <RangeDate
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        paginate={paginate}
                        setPaginate={setPaginate}
                    />
                    <FilterSelect
                        paginate={paginate}
                        setPaginate={setPaginate}
                        formatFilter={formatFilters}
                        name='estado'
                        options={[
                            {
                                label: "Estado",
                                value: ""
                            },
                            {
                                label: "Activo",
                                value: "activo"
                            },
                            {
                                label: "Inactivo",
                                value: "inactivo"
                            }
                        ]}
                    />
                </div>
            </ActionSection>
            <TableSection
                stateData={stateData}
                paginator={Paginator}
            >
                <TableContainer
                    headers={[
                        {
                            label: 'Nombre',
                            columns: ['nombre']
                        },
                        {
                            label: 'Encargado',
                            columns: ['nombres','apellido_paterno:apellido_materno']
                        },
                        {
                            label: 'Acciones',
                            actions: [
                                {
                                    type: 'view',
                                    icon: 'fa-eye',
                                    action: (data) => redirect(data.id),
                                    reference: 'id'
                                },
                                {
                                    type: 'edit',
                                    icon: 'fa-edit',
                                    action: (data) => UpdateValuesModal(data, setCurrentData, setUpdateModal),
                                },
                                {
                                    type: 'delete',
                                    icon: 'fa-trash',
                                    action: (data) => UpdateValuesModal(data, setCurrentData, setDeleteModal),
                                    reference: 'id'
                                },
                            ],
                            // stickyR: true
                        },
                    ]}
                    data={data.data}
                    checkList={true}
                    selecteds={selecteds}
                    setSelecteds={setSelecteds}
                    selectAllChecked={selectAllChecked}
                    setSelectAllChecked={setSelectAllChecked}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                    stateData={stateData}
                />
            </TableSection>
            {
                createModal &&
                <ModalForm
                    setModal={setCreateModal}
                    label="Crear almacén"
                    dataValues={CreateValues()}
                    urlApi={'/almacen'}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {
                updateModal &&
                <ModalForm
                    setModal={setUpdateModal}
                    label="Editar almacén"
                    dataValues={UpdateValues(currentData)}
                    urlApi={'/almacen'}
                    method={'put'}
                    call={recall}
                    buttonLabel='Editar'
                />
            }
            {
                deleteModal &&
                <ModalForm
                    setModal={setDeleteModal}
                    label="Eliminar almacén"
                    dataValues={DeleteValues(currentData)}
                    urlApi={`/almacen/${currentData.id}`}
                    method={'delete'}
                    call={recall}
                    buttonLabel='Eliminar'
                />
            }
        </Section>
    )
}