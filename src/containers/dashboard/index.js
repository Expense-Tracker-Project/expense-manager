import Graph from "../../components/graph";
import Table from "../../components/table";
import graphData from "../../data/graph";
import './style.css';
import tableData from "../../data/table";
import headerData from "../../data/header";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = ( props ) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location?.state?.id)

    useEffect(() => {
        if(location?.state?.id === undefined) {
            navigate("/login");
        }
    }, [location?.state?.id, navigate]);

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