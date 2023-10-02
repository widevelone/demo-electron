import React, { useEffect } from 'react'
import { useGeneralParams } from '../../../../../hooks/useDataPaginate'
import { formatDateWithTime } from '../../../../../utils/dateFormat'
import { CreateValues, DeleteValues } from '../../../../../FormSchemes/EfectivoCierreBancoScheme'
// import { CreateValues, DeleteValues } from '../../../../../FormSchemes/EfectivoCierreBancoScheme'

export const ListEfectivoBancoTable = ({ mainReloadTable }) => {
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
        redirect

    } = useGeneralParams('nombre')

    let recallCount =1

    const getDataPaginate = async () => {
        await requestAuthPaginate(
            'get',
            `/efectivos/banco/pag`,
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
    useEffect(() => {
        if (recallCount > 1) {
            recall()
        }
        recallCount++
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mainReloadTable])
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
                            label: 'Efectivo inicial',
                            columns: ['efectivo_inicial']
                        },
                        {
                            label: 'Efectivo final',
                            columns: ['efectivo_final']
                        },
                        {
                            label: 'Abierto / cerrado',
                            columns: ['abierto'],
                            booleanState: true,
                            booleanOptions: ['abierto', 'cerrado']
                        },
                        {
                            label: 'fecha de inicio',
                            columns: ['fecha_inicio'],
                            transform: true,
                            func: formatDateWithTime
                        },
                        {
                            label: 'fecha de cierre',
                            columns: ['fecha_fin'],
                            transform: true,
                            func: formatDateWithTime
                        },
                        {
                            label: 'Acciones',
                            actions: [
                                {
                                    type: 'green',
                                    icon: 'fa-square-plus',
                                    action: (data) => redirect(`ingresos/${data.id}`),
                                    reference: 'id'
                                },
                                {
                                    type: 'yellow',
                                    icon: 'fa-square-minus',
                                    action: (data) => redirect(`egresos/${data.id}`),
                                    reference: 'id'
                                },
                                {
                                    type: 'delete',
                                    icon: 'fa-trash',
                                    action: (data) => UpdateValuesModal(data, setCurrentData, setDeleteModal),
                                    reference: 'id',
                                    validate: { value: 'abierto', validator: true }
                                }
                            ],
                            // stickyR: true
                        },
                    ]}
                    data={data.data}
                    checkList={false}
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
                    label="Crear efectivo banco"
                    dataValues={CreateValues()}
                    urlApi={'/efectivo/banco'}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {
                deleteModal &&
                <ModalForm
                    setModal={setDeleteModal}
                    label="Eliminar efectivo"
                    dataValues={DeleteValues(currentData)}
                    urlApi={`/efectivo/${currentData.id}`}
                    method={'delete'}
                    call={recall}
                    buttonLabel='Eliminar'
                />
            }
        </Section>
    )
}