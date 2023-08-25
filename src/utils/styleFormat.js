export function badgeStaticFormatStyle(value) {
    const TagsDictionary = {
        'creado':'bg-green-200 dark:bg-green-700 font-semibold',
        'modificado':'bg-violet-300 dark:bg-violet-600 font-semibold',
        'eliminado':'bg-red-200 dark:bg-red-700 font-semibold',
        'inicio':'bg-green-200 dark:bg-green-700 font-semibold',
        'cierre':'bg-red-200 dark:bg-red-700 font-semibold',
        'activo':'bg-green-200 dark:bg-green-700 font-semibold',
        'inactivo':'bg-red-200 dark:bg-red-700 font-semibold',
    };
    return TagsDictionary[value] ? TagsDictionary[value] : 'bg-gray-300 dark:bg-gray-800'
}