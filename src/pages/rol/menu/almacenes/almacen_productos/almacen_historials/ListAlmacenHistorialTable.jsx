import React, { useEffect } from 'react'
import { useGeneralParams } from '../../../../../../hooks/useDataPaginate'
import { CreateValues, DeleteValues } from '../../../../../../FormSchemes/AlmacenHistorialScheme'
import { formatDateWithTime } from '../../../../../../utils/dateFormat'
// import { useGeneralParams } from '../../../../../hooks/useDataPaginate'
// import { CreateValues, DeleteValues } from '../../../../../FormSchemes/AlmacenProductoScheme'

export const ListAlmacenHistorialTable = ({
    reload,
    setReload
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
            `/almacen_producto/${params.almacen_producto_estado_id}/historials/pag`,
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
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters, params.almacen_producto_estado_id]);

    useEffect(() => {
        setSelectAllChecked(false)
        setIsChecked(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters]);

    const recall = () => {
        getDataPaginate()
        setReload(!reload)
    }

    // const redirect = (id) => {
    //     navigate(`productos/${id}`)
    // }
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
                            label: 'Responsable',
                            columns: ['user_nombres', 'user_apellido_paterno:user_apellido_materno']
                        },
                        {
                            label: 'Cantidad',
                            columns: ['cantidad'],
                            tag: true
                        },
                        {
                            label: 'ingreso / egreso',
                            columns: ['ingreso'],
                            booleanState: true,
                            booleanOptions: ['ingreso', 'egreso']
                        },
                        {
                            label: 'Código de transacción',
                            columns: ['transaccion_id'],
                        },
                        {
                            label: 'Fecha de registro',
                            columns: ['createdAt'],
                            transform: true,
                            func: formatDateWithTime
                        },
                        {
                            label: 'Acciones',
                            actions: [
                                // {
                                //     type: 'edit',
                                //     icon: 'fa-edit',
                                //     // action: (data) => UpdateValuesModal(data, setCurrentData, setUpdateModal),
                                // },
                                {
                                    type: 'delete',
                                    icon: 'fa-trash',
                                    action: (data) => UpdateValuesModal(data, setCurrentData, setDeleteModal),
                                    reference: 'id'
                                },
                                // {
                                //     type: 'other',
                                //     icon: 'fa-eye',
                                //     // action: (data) => redirect(data.id),
                                //     reference: 'id'
                                // }
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
                    label="Crear movimiento"
                    dataValues={CreateValues(params?.almacen_producto_estado_id)}
                    urlApi={`/almacen_historial`}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {
                deleteModal &&
                <ModalForm
                    setModal={setDeleteModal}
                    label="Eliminar movimiento del almacén"
                    dataValues={DeleteValues(currentData)}
                    urlApi={`/almacen_historial/${currentData.id}`}
                    method={'delete'}
                    call={recall}
                    buttonLabel='Eliminar'
                />
            }
        </Section>
    )
}