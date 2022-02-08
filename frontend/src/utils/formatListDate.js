export function formatDate(dateString) {
    const dateArr = dateString.slice(0, 10).split('-')
    return `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`
}