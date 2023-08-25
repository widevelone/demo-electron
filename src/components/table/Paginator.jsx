import React from 'react'

export const Paginator = ({ paginate, setPaginate }) => {

    return (
        <TableNavigator
            paginate={paginate}
            setPaginate={setPaginate}
        >
            <ItemNavigator
                data={1}
                classStyle={'ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                func={() => setPaginate({ ...paginate, currentPage: 1 })}
            />
            <ItemNavigator
                data={<i className="fa-solid fa-angle-left" />}
                classStyle={'leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                func={() => setPaginate({ ...paginate, currentPage: ((paginate.currentPage - 1) < 1 ? paginate.currentPage : paginate.currentPage - 1) })}
            />
            <ItemNavigator
                data={paginate.currentPage}
                classStyle={'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'}
            />
            <ItemNavigator
                data={<i className="fa-solid fa-angle-right" />}
                classStyle={'leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                func={() => setPaginate({ ...paginate, currentPage: ((paginate.currentPage + 1) > paginate.totalPages ? paginate.currentPage : paginate.currentPage + 1) })}
            />
            <ItemNavigator
                data={paginate.totalPages}
                classStyle={'leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                func={() => setPaginate({ ...paginate, currentPage: paginate.totalPages })}
            />
        </TableNavigator>
    )
}

const TableNavigator = ({ children, paginate, setPaginate }) => {
    return (
        <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                <select
                    className="bg-gray-50 text-gray-900 text-sm rounded-md p-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    value={paginate.pageSize}                    
                    onChange={(event) => setPaginate({ ...paginate, pageSize: parseInt(event.target.value) })}
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={150}>150</option>
                </select>{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {((paginate.currentPage * paginate.pageSize) - paginate.pageSize) + 1}-{(((paginate.currentPage * paginate.pageSize) > paginate.totalItems ? paginate.totalItems : (paginate.currentPage * paginate.pageSize)))}
                </span> de <span className="font-semibold text-gray-900 dark:text-white">
                    {paginate.totalItems}
                </span>
            </span>
            <ul className="inline-flex -space-x-px text-sm h-8">
                {children}
            </ul>
        </nav>
    )
}

const ItemNavigator = ({ data, func, classStyle }) => {
    return (
        <li>
            <span
                className={`flex items-center justify-center px-3 h-8 cursor-pointer ${classStyle}`}
                onClick={func}
            >
                {data}
            </span>
        </li>
    )
}
