import React, { useEffect } from 'react'
import { useGeneralParams } from '../../../../../hooks/useDataPaginate'
import { CreateValues, DeleteValues } from '../../../../../FormSchemes/AlmacenProductoScheme'

export const ListAlmacenProductoTable = () => {
    const {
        dispatch,
        params,
        navigate,
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
            `/almacen/${params.almacen_id}/productos/pag`,
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
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters, params.almacen_id]);

    useEffect(() => {
        setSelectAllChecked(false)
        setIsChecked(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters]);

    const recall = () => {
        getDataPaginate()
    }

    const redirect = (id) => {
        navigate(`historial/${id}`)
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
                            label: 'Nombre del producto',
                            columns: ['producto_nombre']
                        },
                        {
                            label: 'Estado del producto',
                            columns: ['estado_nombre'],
                            tag:true
                        },
                        {
                            label: 'Total',
                            columns: ['total']
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
                                    type: 'view',
                                    icon: 'fa-eye',
                                    action: (data) => redirect(data.id),
                                    reference: 'id'
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
            {/* <Paginator
                paginate={paginate}
                setPaginate={setPaginate}
            /> */}
            {
                createModal &&
                <ModalForm
                    setModal={setCreateModal}
                    label="Crear almacén"
                    dataValues={CreateValues(params?.almacen_id)}
                    urlApi={`/almacen_producto`}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {/*{
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
            }*/}
            {
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
            }
        </Section>
    )
}