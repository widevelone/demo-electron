export function defaultPaginateParams(filterBy) {
    return {
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10,
        filterBy: filterBy,
        filterParam: '',
        filters: '',
        initial: '',
        final: ''
    }
}

export const formatFilters = (name, value, paginate, setPaginate) => {
    let filterSplit = paginate.filters.split('&')
    let replaced = ''

    filterSplit.forEach(element => {
        let nameParam = element.split('=')

        if (nameParam.find(n => n === name)) {
            replaced = element
        }
    });

    if (replaced !== null && replaced !== '') {
        if (value === '') {
            setPaginate({ ...paginate, filters: `${paginate.filters.replace(`&${replaced}`, ``)}` })
        }
        else {
            setPaginate({ ...paginate, filters: `${paginate.filters.replace(replaced, `${name}=${value}`)}` })
        }
    }
    else {
        setPaginate({ ...paginate, filters: `${paginate.filters}&${name}=${value}` })
    }
}