import React, { useEffect } from 'react'
import { requestAuthPaginate } from '../../../../http/httpRequest'
import { TableContainer } from '../../../../components/table/TableContainer'
import { formatDateWithTime } from '../../../../utils/dateFormat'
import { Paginator } from '../../../../components/table/Paginator'
import { formatFilters } from '../../../../utils/defaulStates'
import { Searcher } from '../../../../components/form/Searcher'
import { FilterSelect } from '../../../../components/form/FilterSelect'
import { RangeDate } from '../../../../components/datePicker/CustomDateRangePicker'
import { Actions } from '../../../../components/form/actions'
import { TableSection } from '../../../../components/table/TableSection'
import { ActionSection } from '../../../../components/table/ActionSection'
import { Section } from '../../../../components/table/Section'
import { ModalForm } from '../../../../components/modals/ModalForm'
import { CreateValues, UpdateValues } from '../../../../FormSchemes/UserScheme'
import { UpdateValuesModal } from '../../../../FormSchemes/GeneralFunctions'
import { useGeneralParams } from '../../../../hooks/useDataPaginate'

export const ListUserTable = () => {
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
        updateModal, setUpdateModal,
        currentData, setCurrentData
    } = useGeneralParams('nombres')

    const getDataPaginate = async () => {
        await requestAuthPaginate(
            'get',
            `/users/pag`,
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
            >
                <TableContainer
                    headers={[
                        {
                            label: 'Código',
                            columns: ['codigo']
                        },
                        {
                            label: 'Nombre',
                            columns: ['nombres', 'apellido_paterno:apellido_materno'],
                            icon: 'fa-solid fa-user-circle text-lg',
                            className: 'flex items-center',
                            tag: true
                            // stickyL: true
                        },
                        {
                            label: 'Estado',
                            columns: ['estado'],
                            tag: true
                        },
                        {
                            label: 'Fecha de creación',
                            columns: ['createdAt'],
                            transform: true,
                            func: formatDateWithTime
                        },
                        {
                            label: 'Acciones',
                            actions: [
                                {
                                    type: 'edit',
                                    icon: 'fa-edit',
                                    action: (data) => UpdateValuesModal(data, setCurrentData, setUpdateModal),
                                },
                                {
                                    type: 'delete',
                                    icon: 'fa-trash',
                                    // action: (id) => deleteUser(id),
                                    reference: 'id'
                                }
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
            <Paginator
                paginate={paginate}
                setPaginate={setPaginate}
            />
            {
                createModal &&
                <ModalForm
                    setModal={setCreateModal}
                    label="Crear usuario"
                    dataValues={CreateValues()}
                    urlApi={'/user'}
                    method={'post'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
            {
                updateModal &&
                <ModalForm
                    setModal={setUpdateModal}
                    label="Editar usuario"
                    dataValues={UpdateValues(currentData)}
                    urlApi={'/user'}
                    method={'put'}
                    call={recall}
                    buttonLabel='Registrar'
                />
            }
        </Section>
    )
}