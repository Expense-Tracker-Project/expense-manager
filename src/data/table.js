export const mapTableData = (data = [], month, year) => {
    const currentDate = new Date();
    const currentYear = year ?? currentDate.getFullYear();
    const currentMonth = month ?? currentDate.getMonth();

    const filteredData = data.filter(expense => {
        const expenseDate = new Date(expense.date);
        return expenseDate.getFullYear() === currentYear && expenseDate.getMonth() === currentMonth;
    });

    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
    return (
        {
            tableData: filteredData?.map?.(expense => ({
                date: expense.date,
                amount: expense.amount,
                reason: expense.reason
            }))
        }
    )
}
