import React, { useEffect } from 'react'
import { useGeneralParams } from '../../../../hooks/useDataPaginate'
import { CreateValues } from '../../../../FormSchemes/CuadernoScheme'
import { formatDateWithTime } from '../../../../utils/dateFormat'

export const ListCuadernoTable = () => {
    const {
        dispatch,
        data, setData,
        paginate, setPaginate,
        selectedDay, setSelectedDay,
        selecteds, setSelecteds,
        selectAllChecked, setSelectAllChecked,
        isChecked, setIsChecked,
        stateData, setStateData,
        createModal, setCreateModal,
        // updateModal, setUpdateModal,
        // deleteModal, setDeleteModal,
        // currentData, setCurrentData,
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
        redirect
        
    } = useGeneralParams('nombre')

    const getDataPaginate = async () => {
        await requestAuthPaginate(
            'get',
            `/cuadernos/pag`,
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

    // useEffect(() => {
    //     console.log(selecteds)
    // }, [selecteds]);

    useEffect(() => {
        setSelectAllChecked(false)
        setIsChecked(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paginate.currentPage, paginate.pageSize, paginate.filterBy, paginate.filterParam, paginate.initial, paginate.final, paginate.filters]);

    const recall = () => {
        getDataPaginate()
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
                            label: 'Aperturar',
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
                            label: 'Código',
                            columns: ['codigo']
                        },
                        {
                            label: 'Responsable',
                            columns: ['nombres','apellido_paterno:apellido_materno']
                        },
                        {
                            label: 'Efectivo Bs.',
                            columns: ['efectivo_total'],
                            tag: true
                        },
                        {
                            label: 'fecha de registro',
                            columns: ['createdAt'],
                            transform: true,
                            func: formatDateWithTime
                        },
                        {
                            label: 'Acciones',
                            actions: [
                                {
                                    type: 'cyan',
                                    icon: 'fa-eye',
                                    action: (data) => redirect(`historial/${data.id}`),
                                    reference: 'id'
                                },
                                // {
                                //     type: 'delete',
                                //     icon: 'fa-trash',
                                //     action: (data) => UpdateValuesModal(data, setCurrentData, setDeleteModal),
                                //     reference: 'id',
                                //     validate: { value: 'abierto', validator: true }
                                // }
                            ],
                            // stickyR: true
                        },
                        // {
                        //     label: 'Acciones',
                        //     actions: [
                        //         {
                        //             type: 'edit',
                        //             icon: 'fa-edit',
                        //             action: (data) => UpdateValuesModal(data, setCurrentData, setUpdateModal),
                        //         },
                        //         {
                        //             type: 'delete',
                        //             icon: 'fa-trash',
                        //             action: (data) => UpdateValuesModal(data, setCurrentData, setDeleteModal),
                        //             reference: 'id'
                        //         }
                        //     ],
                        //     // stickyR: true
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
            {
                createModal &&
                <ModalForm
                    setModal={setCreateModal}
                    label="Aperturar cuaderno"
                    dataValues={CreateValues()}
                    urlApi={'/cuaderno'}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {/* {
                updateModal &&
                <ModalForm
                    setModal={setUpdateModal}
                    label="Editar cuenta bancaria"
                    dataValues={UpdateValues(currentData)}
                    urlApi={'/cuenta_bancaria'}
                    method={'put'}
                    call={recall}
                    buttonLabel='Editar'
                />
            }
            
            {
                deleteModal &&
                <ModalForm
                    setModal={setDeleteModal}
                    label="Eliminar cuenta bancaria"
                    dataValues={DeleteValues(currentData)}
                    urlApi={`/cuenta_bancaria/${currentData.id}`}
                    method={'delete'}
                    call={recall}
                    buttonLabel='Eliminar'
                />
            } */}
        </Section>
    )
}