import React, { useEffect } from 'react'
import { useGeneralParams } from '../../../../../../hooks/useDataPaginate'
import { formatDateWithTime } from '../../../../../../utils/dateFormat'
import { CreateValues } from '../../../../../../FormSchemes/EfectivoCierreGeneralHistorialScheme'
import { DeleteValues } from '../../../../../../FormSchemes/EfectivoCierreGeneralScheme'

export const ListEfectivoBancoHistorialTable = ({
    reload,
    setReload,
    dataCard,
    mainReloadTable,
    setMainReloadTable
}) => {
    const {
        dispatch,
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
        // UpdateValuesModal,
        // redirect
    } = useGeneralParams('nombre')

    const getDataPaginate = async () => {
        await requestAuthPaginate(
            'get',
            `/efectivo/${params.efectivo_id}/historials/pag`,
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
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters, params.efectivo_id]);

    useEffect(() => {
        setSelectAllChecked(false)
        setIsChecked(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters]);

    const recall = () => {
        getDataPaginate()
        setReload(!reload)
        setMainReloadTable(!mainReloadTable)
    }

    return (
        <Section>
            <ActionSection>
                {
                    dataCard?.abierto ?
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
                                {
                                    icon: 'lock',
                                    label: 'Cerrar',
                                    action: () => setUpdateModal(true),
                                    className: 'bg-lightBlue-400 dark:bg-lightBlue-600'
                                },
                            ]}
                        />
                        :
                        <Actions
                            buttons={[
                                {
                                    icon: 'repeat',
                                    label: '',
                                    action: recall
                                }
                            ]}
                        />
                }
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
                            label: "Estado",
                            value: "estado"
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
                            label: 'Monto Bs.',
                            columns: ['monto']
                        },
                        {
                            label: 'Billetes',
                            columns: ['billetes']
                        },
                        {
                            label: 'Monedas',
                            columns: ['monedas']
                        },
                        {
                            label: 'Dolar en Bs.',
                            columns: ['dolares_en_bs']
                        },
                        {
                            label: 'Dolar en Bs.',
                            columns: ['dolares_en_bs']
                        },
                        {
                            label: 'fecha de registro',
                            columns: ['createdAt'],
                            transform: true,
                            func: formatDateWithTime
                        },
                        // {
                        //     label: 'Acciones',
                        //     actions: [
                        // {
                        //     type: 'edit',
                        //     icon: 'fa-edit',
                        //     // action: (data) => UpdateValuesModal(data, setCurrentData, setUpdateModal),
                        // },
                        // {
                        //     type: 'view',
                        //     icon: 'fa-eye',
                        //     action: (data) => redirect(`historial/${data.id}`),
                        //     reference: 'id'
                        // },
                        // {
                        //     type: 'delete',
                        //     icon: 'fa-trash',
                        //     action: (data) => UpdateValuesModal(data, setCurrentData, setDeleteModal),
                        //     reference: 'id'
                        // },
                        // ],
                        // stickyR: true
                        // },
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
            {/* <Paginator
                paginate={paginate}
                setPaginate={setPaginate}
            /> */}
            {
                createModal &&
                <ModalForm
                    setModal={setCreateModal}
                    label="Registrar Ingreso de efectivo"
                    dataValues={CreateValues(params?.efectivo_id)}
                    urlApi={`/efectivo_historial/general`}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {
                updateModal &&
                <ModalForm
                    setModal={setUpdateModal}
                    label="Cerrar efectivo"
                    dataValues={DeleteValues({})}
                    urlApi={`/efectivo/${params.efectivo_id}/close`}
                    method={'put'}
                    call={recall}
                    buttonLabel='Cerrar'
                />
            }
            {/* {
                deleteModal &&
                <ModalForm
                    setModal={setDeleteModal}
                    label="Eliminar producto del almacén"
                    dataValues={DeleteValues(currentData)}
                    urlApi={`/almacen_producto/${currentData.id}`}
                    method={'delete'}
                    call={recall}
                    buttonLabel='Eliminar'
                />
            } */}
        </Section>
    )
}