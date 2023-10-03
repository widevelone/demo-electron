import React, { useEffect } from 'react'
import { useGeneralParams } from '../../../../../../hooks/useDataPaginate'
import { formatDateWithTime } from '../../../../../../utils/dateFormat'
import { CreateValues, DeleteValues } from '../../../../../../FormSchemes/EfectivoCierreScheme'

export const ListEfectivoBancoCierreTable = ({
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
            `/efectivo/${params.efectivo_id}/cierres/pag`,
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
                            icon: 'shop-lock',
                            label: 'Crear cierre',
                            action: () => setCreateModal(true)
                        },
                        // {
                        //     icon: 'plus-minus',
                        //     label: 'Traspaso interno',
                        //     action: () => setModalTraspaso(true),
                        //     className: 'bg-sky-400 dark:bg-sky-600'
                        // },
                        // {
                        //     icon: 'plus-minus',
                        //     label: 'Traspaso a otro almacén',
                        //     action: () => setModalTraspasoExterno(true),
                        //     className: 'bg-green-400 dark:bg-green-700'
                        // },
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
                            label: 'Monto inicial',
                            columns: ['monto_inicial'],
                            tag: true
                        },
                        {
                            label: 'Monto final',
                            columns: ['monto_final'],
                            tag: true
                        },
                        {
                            label: 'Monto ingreso',
                            columns: ['monto_total_ingreso'],
                            tag: true
                        },
                        {
                            label: 'Monto egreso',
                            columns: ['monto_total_egreso'],
                            tag: true
                        },
                        {
                            label: 'Fecha de inicio',
                            columns: ['fecha_inicio'],
                            transform: true,
                            func: formatDateWithTime
                        },
                        {
                            label: 'Fecha de fin',
                            columns: ['fecha_fin'],
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
                                    reference: 'id',
                                    tooltipText: 'Eliminar'
                                },
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
                    label="Crear cierre"
                    dataValues={CreateValues(params?.efectivo_id)}
                    urlApi={`/efectivo_cierre`}
                    method={'post'}
                    call={recall}
                    buttonLabel='Crear cierre'
                />
            }
            {/* <div className="absolute z-10 bg-white text-xs font-bold dark:bg-gray-700 dark:text-gray-300 shadow-lg w-fit mt-1 rounded-md">
                <DayPicker
                    locale={es}
                    mode="range"
                    selected={selectedDay}
                    onSelect={setSelectedDay}
                    className="custom-day-picker"
                    modifiersClassNames={{
                        selected: 'my-selected',
                        today: 'my-today',
                        outside: 'days'
                    }}
                    modifiersStyles={{
                        disabled: { fontSize: '75%' }
                    }}
                />
            </div> */}

            {
                deleteModal &&
                <ModalForm
                    setModal={setDeleteModal}
                    label="Eliminar cierre"
                    dataValues={DeleteValues(currentData)}
                    urlApi={`/efectivo_cierre/${currentData.id}`}
                    method={'delete'}
                    call={recall}
                    buttonLabel='Eliminar'
                />
            }
        </Section>
    )
}