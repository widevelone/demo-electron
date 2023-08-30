import React, { useEffect } from 'react'
import { useGeneralParams } from '../../../../hooks/useDataPaginate'

export const ListChangeHistorialTable = () => {
    const {
        dispatch,
        data, setData,
        paginate, setPaginate,
        selectedDay, setSelectedDay,
        selecteds, setSelecteds,
        selectAllChecked, setSelectAllChecked,
        isChecked, setIsChecked,
        stateData, setStateData,
        // imports
        requestAuthPaginate,
        TableContainer,
        formatDateWithTime,
        Paginator,
        formatFilters,
        Searcher,
        FilterSelect,
        RangeDate,
        TableSection,
        ActionSection,
        Section,
    } = useGeneralParams('nombres')

    const getDataPaginate = async () => {
        await requestAuthPaginate(
            'get',
            `/auth/changes/pag`,
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

    return (
        <Section>
            <ActionSection>
                <Searcher
                    paginate={paginate}
                    setPaginate={setPaginate}
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    width='6/12'
                    options={[
                        {
                            label: "Nombre",
                            value: "nombres"
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
                        name='tipo_accion'
                        options={[
                            {
                                label: "Tipo de acción",
                                value: ""
                            },
                            {
                                label: "Creado",
                                value: "creado"
                            },
                            {
                                label: "Modificado",
                                value: "modificado"
                            },
                            {
                                label: "Eliminado",
                                value: "eliminado"
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
                            label: 'Autor',
                            columns: ['codigo', 'nombres:apellido_paterno:apellido_materno'],
                            // icon: 'fa-solid fa-user-circle text-lg',
                            // skipLine: true,
                            className: 'flex items-center',
                            // stickyL: true
                        },
                        {
                            label: 'Descripción',
                            columns: ['descripcion'],
                        },
                        {
                            label: 'Tipo de acción',
                            columns: ['tipo_accion'],
                            tag: true
                        },
                        {
                            label: 'Fecha',
                            columns: ['fecha_accion'],
                            transform: true,
                            func: formatDateWithTime
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
        </Section>
    )
}
