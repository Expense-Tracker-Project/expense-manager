import Graph from "../../components/graph";
import Table from "../../components/table";
import graphData from "../../data/graph";
import './style.css';
import tableData from "../../data/table";
import headerData from "../../data/header";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";

const Dashboard = ( props ) => {
    const location = useLocation();
return (
    <div className="dashboard-container">
    <Header headerData={headerData} user={location?.state?.id} />
    <Graph data={graphData} />
    <Table data={tableData} />
    <img src="./piggi.png" className="piggi-image" />
    </div>
)
}

export default Dashboard;