import axios from "axios";

const GetExpenseService = (setExpenses, setGraphData, mapTableData, mapGraphData, currentMonth, currentYear, location) => {
    axios.get(`http://localhost:8000/api/get-expenses/${location.state.id}`)
    .then((response) => {
        if (response.data.expenses) {
            setExpenses(mapTableData(response.data.expenses, currentMonth, currentYear));
            setGraphData(mapGraphData(response.data.expenses, currentYear))
        }
    })
    .catch((error) => {
        console.error("Error fetching expenses:", error);
    });
}

export default GetExpenseService;