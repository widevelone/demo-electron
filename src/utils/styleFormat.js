export function badgeStaticFormatStyle(value) {
    const TagsDictionary = {
        'creado': 'bg-green-200 dark:bg-green-700 font-semibold',
        'modificado': 'bg-violet-300 dark:bg-violet-600 font-semibold',
        'eliminado': 'bg-red-200 dark:bg-red-700 font-semibold',
        'inicio': 'bg-green-200 dark:bg-green-700 font-semibold',
        'cierre': 'bg-red-200 dark:bg-red-700 font-semibold',
        'activo': 'bg-green-200 dark:bg-green-700 font-semibold',
        'inactivo': 'bg-red-200 dark:bg-red-700 font-semibold',
    };
    return TagsDictionary[value] ? TagsDictionary[value] : 'bg-gray-300 dark:bg-gray-800'
}

export function badgeBooleanStyle(value) {
    if (value) {
        return 'text-green-500 font-semibold'
    }
    else {
        return 'text-red-500 font-semibold'
    }
}

export function badgeBooleanValue(value, options) {
    if (value) {
        return <span><i className="fa-solid fa-check text-sm" /> {options[0]}</span>
    }
    else {
        return <span><i className="fa-solid fa-xmark text-sm" /> {options[1]}</span>
    }
}