export function calcDateRange(period) {

    const date = new Date()
    let dateMin
    let dateMax
    let yearMin
    let monthMin

    switch (period) {
        case 'month' :
            dateMin = new Date(date.getFullYear(), date.getMonth(), 1)
            dateMax = new Date()
            break
        case 'last-month' :
            yearMin = date.getFullYear()
            monthMin = date.getMonth() - 1
            if (monthMin < 0) {
                --yearMin
                monthMin = 11
            }
            dateMin = new Date(yearMin, monthMin, 1)
            dateMax = new Date(date.getFullYear(), date.getMonth(), 1)
            break
        case 'half-year' :
            yearMin = date.getFullYear()
            monthMin = date.getMonth() - 6
            if (monthMin < 0) {
                --yearMin
                monthMin = 11 - -monthMin
            }
            dateMin = new Date(yearMin, monthMin, 1)
            dateMax = new Date(date.getFullYear(), date.getMonth(), 1)
            break
        case 'year' :
            dateMin = new Date(date.getFullYear(), 0, 1)
            dateMax = new Date()
            break
        default :
            dateMin = new Date(date.getFullYear(), date.getMonth(), 1)
            dateMax = new Date()
    }
    return {dateMin: dateMin, dateMax: dateMax}
}