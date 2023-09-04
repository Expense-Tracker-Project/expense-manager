const mapGraphData = (data = [], year) => {
    const currentDate = new Date();
    const currentYear = year ?? currentDate.getFullYear();

    const filteredData = data.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === currentYear;
    });

    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

    const monthlyExpenses = new Array(12).fill(0);

    filteredData.forEach(expense => {
        const expenseDate = new Date(expense.date);
        const month = expenseDate.getMonth();
        monthlyExpenses[month] += expense.amount;
    });

    return (
        [
            {
                month: 'JAN',
                expense: monthlyExpenses[0]
            },
            {
                month: 'FEB',
                expense: monthlyExpenses[1]
            },
            {
                month: 'MAR',
                expense: monthlyExpenses[2]
            },
            {
                month: 'APR',
                expense: monthlyExpenses[3]
            },
            {
                month: 'MAY',
                expense: monthlyExpenses[4]
            },
            {
                month: 'JUN',
                expense: monthlyExpenses[5]
            },
            {
                month: 'JUL',
                expense: monthlyExpenses[6]
            },
            {
                month: 'AUG',
                expense: monthlyExpenses[7]
            },
            {
                month: 'SEP',
                expense: monthlyExpenses[8]
            },
            {
                month: 'OCT',
                expense: monthlyExpenses[9]
            },
            {
                month: 'NOV',
                expense: monthlyExpenses[10]
            },
            {
                month: 'DEC',
                expense: monthlyExpenses[11]
            },
        ]
    )
}

export default mapGraphData;