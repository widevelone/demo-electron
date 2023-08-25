import React, { useEffect } from 'react';
import { badgeStaticFormatStyle } from '../../utils/styleFormat';

const TableCell = ({ head, item, selecteds, setSelecteds, isChecked, setIsChecked, rowIndex, checkList, clickFunc }) => {
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

        if (!isChecked) {
            setSelecteds(prevSelecteds => [...prevSelecteds, item]);
        } else {
            setSelecteds(prevSelecteds => prevSelecteds.filter(selectedItem => selectedItem !== item));
        }
    };

    const renderCellContent = () => {
        if (head.icon) {
            return (
                <>
                    <i className={`${head?.icon} hidden sm:block`} />
                    <div className="sm:pl-3">
                        {
                            head?.columns?.map((h, idw) => (
                                <div
                                    key={idw}
                                    className={idw === 0 ? 'font-semibold' : 'font-normal dark:text-gray-300 text-gray-600'}
                                >
                                    {
                                        h?.split(':')?.map((i) => (
                                            <React.Fragment
                                                key={i}
                                            >
                                                <CellFormat global={head} data={item[i]} />{' '}
                                            </React.Fragment>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </>
            )
        } else if (head.actions) {
            return <div className='flex flex-row gap-2'>
                {head.actions && (
                    <ActionButtonsGroup actions={head.actions} item={item} />
                )}
            </div>
        } else if (head.tag) {
            return <span className={`text-xs mr-2 px-2.5 py-0.5 rounded ${badgeStaticFormatStyle(item[head.columns[0]])}`}>{item[head.columns[0]]}</span>
        } else {
            // return <CellFormat global={head} data={item[head.columns[0]]} />;
            return <div>
                {
                    head?.columns?.map((h, idw) => (
                        <div
                            key={idw}
                            className={idw === 0 ? 'font-semibold' : 'font-normal dark:text-gray-300 text-gray-600'}
                        >
                            {
                                h?.split(':')?.map((i) => (
                                    <React.Fragment
                                        key={i}
                                    >
                                        <CellFormat global={head} data={item[i]} />{' '}
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    ))
                }
            </div>;
        }
    };

    return (
        <td
            className={`${head.stickyL || head.stickyR
                ? 'sticky px-0 bg-gray-800 max-w-[100px] overflow-hidden'
                : ''
                }`}
            onClick={clickFunc}
        >
            <div className={`px-2 py-1 text-gray-900 dark:text-white ${head?.className}`}>
                {checkList && (
                    <div className="flex items-center">
                        <input
                            id={`checkbox-table-search-${rowIndex}`}
                            type="checkbox"
                            className="w-5 h-5 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`checkbox-table-search-${rowIndex}`} className="sr-only">checkbox</label>
                    </div>
                )}
                {renderCellContent()}
            </div>
        </td>
    );
};

const CellFormat = ({ global, data }) => {
    return global.transform ? global.func(data) : data
};

const TableRow = ({ headers, item, indexRow, selectAllChecked, checkList, selecteds, setSelecteds, isChecked, setIsChecked }) => {
    // const rowClass = indexRow % 2 === 0 ? 'bg-white dark:bg-[rgba(55,65,81,.9)]' : 'bg-yellow-50 dark:bg-[rgba(55,65,81,.6)]'
    const rowClass = indexRow % 2 === 0 ? 'bg-white dark:bg-[rgba(55,65,81,.9)]' : 'bg-yellow-50 dark:bg-[rgba(55,65,81,.6)]'
    // const [isChecked, setIsChecked] = useState(false)

    // const handleRowClick = () => {
    //     setIsChecked(!isChecked)

    //     if (!isChecked) {
    //         setSelecteds(prevSelecteds => [...prevSelecteds, item])
    //     } else {
    //         setSelecteds(prevSelecteds => prevSelecteds.filter(selectedItem => selectedItem !== item))
    //     }
    // }

    // const handleCheckboxChange = (event) => {
    //     setIsChecked(event.target.checked)
    // };

    useEffect(() => {
        setIsChecked(selectAllChecked)

        if (selectAllChecked) {
            setSelecteds(prevSelecteds => [...prevSelecteds, item]);
        } else {
            setSelecteds(prevSelecteds => prevSelecteds.filter(selectedItem => selectedItem !== item))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectAllChecked]);

    return (
        <tr
            className={`border-b dark:border-gray-700 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 ${rowClass}`}
        // onClick={() => setSelecteds(prevSelecteds => prevSelecteds.includes(item) ? prevSelecteds.filter(selectedItem => selectedItem !== item) : [...prevSelecteds, item])}
        >
            {
                checkList &&
                <td className="w-4 px-4 py-2">
                    <div className="flex items-center">
                        <input
                            id={`checkbox-table-search-${indexRow}`}
                            type="checkbox"
                            className="w-5 h-5 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={selecteds.includes(item)}
                            onChange={
                                () => {
                                    setSelecteds(prevSelecteds => prevSelecteds.includes(item) ? prevSelecteds.filter(selectedItem => selectedItem !== item) : [...prevSelecteds, item])
                                }
                            }
                        />
                        <label htmlFor={`checkbox-table-search-${indexRow}`} className="sr-only">checkbox</label>
                    </div>
                </td>
            }
            {headers?.map((head, idy) => (
                <TableCell
                    key={idy}
                    head={head}
                    item={item}
                    selecteds={selecteds}
                    setSelecteds={setSelecteds}
                    clickFunc={() => setSelecteds(prevSelecteds => prevSelecteds.includes(item) ? prevSelecteds.filter(selectedItem => selectedItem !== item) : [...prevSelecteds, item])}
                />
            ))}
        </tr>
    );
};


const ActionButton = ({ type, action, data, icon, reference }) => {
    const getButtonColor = () => {
        if (type === 'edit') {
            return 'yellow';
        } else if (type === 'delete') {
            return 'red';
        }
        return '';
    };

    return (
        <button
            className={`dark:bg-gray-700 bg-gray-50 py-1 px-2 rounded-md dark:hover:bg-gray-800 hover:bg-gray-200 border dark:border-gray-500 border-gray-400`}
            onClick={() => action(data)}
        >
            <i className={`fa-solid ${icon} text-lg dark:text-${getButtonColor()}-500 text-${getButtonColor()}-500`} />
        </button>
    );
};

const ActionButtonsGroup = ({ actions, item }) => {
    return (
        <div className='flex flex-row gap-2 justify-start'>
            {actions.map((action, index) => (
                <ActionButton
                    key={index}
                    type={action.type}
                    action={action.action}
                    data={item}
                    icon={action.icon}
                    reference={action.reference ? item[action.reference] : null}
                />
            ))}
        </div>
    );
};

export const TableContainer = ({
    headers,
    data,
    checkList,
    selecteds,
    setSelecteds,
    selectAllChecked,
    setSelectAllChecked,
    isChecked,
    setIsChecked,
    stateData
}) => {
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-100 uppercase bg-gray-600 dark:bg-gray-700 dark:text-gray-300">
                <tr>
                    {
                        checkList &&
                        <th scope="col" className="px-4 py-2 dark:bg-gray-800 bg-gray-600">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-5 h-5 text-yellow-600 bg-gray-800 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
                                    checked={selecteds.length === 0 ? false : selectAllChecked}
                                    // checked={selectAllChecked}
                                    onChange={() => setSelectAllChecked(!selectAllChecked)}
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                    }
                    {headers?.map((head, index) => (
                        <th
                            key={index}
                            scope="col"
                            className={`px-2 py-3 bg-gray-600 dark:bg-gray-800 ${head.stickyL ? 'sticky left-0 px-2 max-w-[150px] overflow-hidden' : head.stickyR ? 'sticky right-0 px-2 max-w-[150px] overflow-hidden' : ''}`}
                        >
                            {head.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    Array.isArray(data) && data?.map((item, idx) => (
                        <TableRow
                            key={idx}
                            headers={headers}
                            item={item}
                            indexRow={idx}
                            selectAllChecked={selectAllChecked}
                            checkList={checkList}
                            selecteds={selecteds}
                            setSelecteds={setSelecteds}
                            isChecked={isChecked}
                            setIsChecked={setIsChecked}
                            rowIndex={idx} // Pasa el índice de la fila al componente TableCell
                        />
                    ))
                }
            </tbody>
        </table>
    );
};

export default TableContainer;