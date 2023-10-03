import React, { useEffect, useState } from 'react'
import { useGeneralParams } from '../../../../../hooks/useDataPaginate'
import { formatDateWithTime } from '../../../../../utils/dateFormat'
import { CreateValues } from '../../../../../FormSchemes/EfectivoCierreGeneralHistorialScheme'

export const ListCuadernoHistorialTable = ({
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

    const [egresoDirectoModal, setEgresoDirectoModal] = useState(false);

    const getDataPaginate = async () => {
        await requestAuthPaginate(
            'get',
            `/cuaderno/${params.cuaderno_id}/historial/pag`,
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
                    <Actions
                        buttons={[
                            {
                                icon: 'repeat',
                                label: '',
                                action: recall
                            },
                            // {
                            //     icon: 'add',
                            //     label: 'Ingreso directo',
                            //     action: () => setCreateModal(true),
                            //     className: 'dark:bg-green-700 bg-green-500'
                            // },
                            // {
                            //     icon: 'minus',
                            //     label: 'Egreso directo',
                            //     action: () => setEgresoDirectoModal(true),
                            //     className: 'dark:bg-red-700 bg-red-500'
                            // },
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
                            label: 'Responsable',
                            columns: ['user_nombres', 'user_apellido_paterno:user_apellido_materno']
                        },
                        {
                            label: 'Monto anterior',
                            columns: ['monto_anterior'],
                            tag: true
                        },
                        {
                            label: 'Monto',
                            columns: ['monto'],
                            tag: true
                        },
                        {
                            label: 'Monto actual',
                            columns: ['monto_actual'],
                            tag: true
                        },
                        {
                            label: 'Billetes',
                            columns: ['billetes'],
                            tag: true
                        },
                        {
                            label: 'Monedas',
                            columns: ['monedas'],
                            tag: true
                        },
                        {
                            label: 'Dolares en Bs.',
                            columns: ['dolares_en_bs'],
                            tag: true
                        },
                        {
                            label: 'ingreso / egreso',
                            columns: ['ingreso'],
                            booleanState: true,
                            booleanOptions: ['ingreso', 'egreso']
                        },
                        {
                            label: 'CÓDIGO DE TRANSACCIÓN',
                            columns: ['transaccion_id'],
                        },
                        {
                            label: 'fecha de registro',
                            columns: ['createdAt'],
                            transform: true,
                            func: formatDateWithTime
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
                    label="Registrar Ingreso directo de efectivo"
                    dataValues={CreateValues(params?.efectivo_id, true)}
                    urlApi={`/efectivo_historial`}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {
                egresoDirectoModal &&
                <ModalForm
                    setModal={setEgresoDirectoModal}
                    label="Registrar Egreso directo de efectivo"
                    dataValues={CreateValues(params?.efectivo_id, false)}
                    urlApi={`/efectivo_historial`}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
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