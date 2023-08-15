import Graph from "../../components/graph";
import Table from "../../components/table";
import graphData from "../../data/graph";
import './style.css';
import tableData from "../../data/table";

const Dashboard = ( props ) => {
return (
    <div className="dashboard-container">
    <Graph data={graphData} />
    <Table data={tableData} />
    <img src="./piggi.png" className="piggi-image" />
    </div>
)
}

export default Dashboard;