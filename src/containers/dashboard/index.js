import Graph from "../../components/graph";
import Table from "../../components/table";
import './style.css';
import headerData from "../../data/header";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { mapTableData } from "../../data/table";
import mapGraphData from "../../data/graph";
import Button from "../../components/button";
import GetExpenseService from "../../service/getExpense";

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [expenses, setExpenses] = useState(mapTableData([]));
    const [graphData, setGraphData] = useState(mapGraphData([]));

    useEffect(() => {
        if(location?.state?.id === undefined) {
            navigate("/login");
        } else {
            GetExpenseService(setExpenses, setGraphData, mapTableData, mapGraphData, location);
        }
    }, [location, location?.state?.id, navigate]);

return (
    <div className="dashboard-container">
    <Header headerData={headerData} id={location?.state?.id} name={location?.state?.name} />
    <img src="./piggi.png" className="piggi-image" alt="logo" />
    <div className="lower-container">
    <div className="expense-group">
    <div className='table-title'>This Month's Expenses 💸</div>
    <Button title="Click Here" className="check-expense-btn" />
    </div>
    <div className="expense-group">
    <div className='table-title'>This Years's Expenses 💸</div>
    <Button title="Click Here" className="check-expense-btn" />
    </div>
    </div>
    </div>
)
}

export default Dashboard;