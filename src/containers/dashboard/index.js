import Graph from "../../components/graph";
import Table from "../../components/table";
import "./style.css";
import headerData from "../../data/header";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { mapTableData } from "../../data/table";
import mapGraphData from "../../data/graph";
import Button from "../../components/button";
import GetExpenseService from "../../service/getExpense";
import Popup from "../../components/CommonPopUp";

const Dashboard = () => {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const location = useLocation();
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState(mapTableData([]));
  const [graphData, setGraphData] = useState(mapGraphData([]));

  const [isTableVisible, setTableVisible] = useState(false);
  const [isGraphVisible, setGraphVisible] = useState(false);

  const openTable = () => {

    if (location?.state?.id === undefined) {
      navigate("/login");
    } else {
      GetExpenseService(
        setExpenses,
        setGraphData,
        mapTableData,
        mapGraphData,
        currentMonth,
        currentYear,
        location
      );
    }
    setTableVisible(true);
  };

  const closeTable = () => {
    setTableVisible(false);
  };

  const openGraph = () => {
    if (location?.state?.id === undefined) {
      navigate("/login");
    } else {
      GetExpenseService(
        setExpenses,
        setGraphData,
        mapTableData,
        mapGraphData,
        currentMonth,
        currentYear,
        location
      );
    }
    setGraphVisible(true);
  };

  const closeGraph = () => {
    setGraphVisible(false);
  };

  const handleTableDateLeft = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const handleTableDateRight = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  const handleGraphDateLeft = () => {
    setCurrentYear(currentYear - 1);
  };
  
  const handleGraphDateRight = () => {
    setCurrentYear(currentYear + 1);
  };
  
  useEffect(() => {
   if (isTableVisible) {
    openTable();
   }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMonth, currentYear]);
  
  useEffect(() => {
    if (isGraphVisible) {
      openGraph();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  return (
    <div className="dashboard-container">
      <Header
        headerData={headerData}
        id={location?.state?.id}
        name={location?.state?.name}
      />
      <div className="middle-container">
        <div className="middle-container-left">
          <div className="welcome-text">
            <div className="first-line">Welcome to ExpenseTrackr -</div>
            <div className="second-line">Your Daily Expense Companion</div>
          </div>
          <div className="middle-container-left-div2">
            <h3>Track Every Penny, Every Day</h3>
            <p>
              ExpenseTracker is your one-stop solution for effortlessly
              monitoring <br />
              your daily expenses.
            </p>
          </div>
          <div className="middle-container-left-div3">
            <p>
              Click on <span>Add New Expense </span>button to start tracking
              your expenses now.
            </p>
          </div>
        </div>
        <div className="middle-container-right">
          <div>
            <img src="./piggi.png" className="piggi-image" alt="logo" />
          </div>
        </div>
      </div>
      <div className="lower-container">
        <div className="expense-group">
          <div className="table-title">This Month's Expenses 💸</div>
          <Button
            title="Click Here"
            className="check-expense-btn"
            onClick={openTable}
          />
          {isTableVisible 
          && <Popup onClose={closeTable} leftArrow={handleTableDateLeft} rightArrow={handleTableDateRight}>
            <Table data={expenses} month={currentMonth} year={currentYear} />
          </Popup>}
        </div>
        <div className="expense-group">
          <div className="table-title">This Years's Expenses 💸</div>
          <Button
            title="Click Here"
            className="check-expense-btn"
            onClick={openGraph}
          />
          {isGraphVisible && <Popup onClose={closeGraph} leftArrow={handleGraphDateLeft} rightArrow={handleGraphDateRight}>
            <Graph data={graphData} year={currentYear} />
          </Popup>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
