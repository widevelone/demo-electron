export function validationDateParam(date) {
    let year = new Date(date).getFullYear()
    let month = new Date(date).getMonth() + 1
    let day = new Date(date).getDate()

    year = year.toString().length < 4 ? "000" + year.toString() : year.toString()
    month = month.toString().length < 2 ? ("0" + month.toString()) : month.toString()
    day = day.toString().length < 2 ? ("0" + day.toString()) : day.toString()
    return year + "-" + month + "-" + day
}

export function formatDateWithTime(dateString) {
    if (!dateString)
        return '-'
    const date = new Date(dateString);

    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${dayOfWeek} ${day}, ${month} de ${year} ${hours}:${minutes}`;
}

export function formatDate(dateString) {
    if (!dateString)
        return '-'
    const date = new Date(dateString);

    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayOfWeek} ${day}, ${month} de ${year}`;
}