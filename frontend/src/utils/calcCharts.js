export function calcCharts(data) {

    let income = 0
    let expense = 0
    data.result.categorys.map((categoryId) => {
        if (data.entities.categorys[categoryId].type === `income`) {
            income += data.entities.categorys[categoryId].totalSum
        } else {
            expense += data.entities.categorys[categoryId].totalSum
        }
    })

    const onePersent = (income >= expense) ? 100 / income : 100 / expense
    let incomePersents = Math.ceil((income > expense) ? 100 : income * onePersent)
    let expensePersents = Math.ceil((income < expense) ? 100 : expense * onePersent)
    let savingsPersents = Math.ceil((income - expense) * onePersent)

    if (incomePersents < 1) incomePersents = 1
    if (expensePersents < 1) expensePersents = 1
    if (savingsPersents < 1) savingsPersents = 1

    return ({
        charts: [
            {title: `Доход`, type: `income`, sum: income, persent: incomePersents},
            {title: `Расход`, type: `expense`, sum: expense, persent: expensePersents},
            {title: `Накопления`, type: `savings`, sum: income - expense, persent: savingsPersents}
        ]
    })
}