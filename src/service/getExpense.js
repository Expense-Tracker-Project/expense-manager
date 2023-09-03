import axios from "axios";

const GetExpenseService = (setExpenses, setGraphData, mapTableData, mapGraphData, location) => {
    axios.get(`http://localhost:8000/api/get-expenses/${location.state.id}`)
    .then((response) => {
        if (response.data.expenses) {
            setExpenses(mapTableData(response.data.expenses));
            setGraphData(mapGraphData(response.data.expenses))
        }
    })
    .catch((error) => {
        console.error("Error fetching expenses:", error);
    });
}

export default GetExpenseService;