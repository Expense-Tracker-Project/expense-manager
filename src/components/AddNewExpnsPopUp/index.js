import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import AddExpenseService from "../../service/addExpense";

const ExpenditureForm = ({ onClose,email }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(amount.trim() === "" || date.trim() === "" || reason.trim() === "" ) {
      alert("Incomplete form");
    } else {
      await AddExpenseService(email, date, reason, amount, onClose, setAmount, setDate, setReason);
  }
  };
  
  return (
    <div className="popup">
      <button className="close-button" onClick={onClose}>
        ❌
      </button>
      <div className="title">Add Expense</div>
      <form onSubmit={handleSubmit} className="expenditure-form">
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            className="expenseAmount"
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            className="expenseDate"
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea
            className="form-textArea"
            id="reason"
            value={reason}
            onChange={handleReasonChange}
            rows={4} // Adjust the number of rows as needed
          />
        </div>
        <Button className="form-button" type="submit"
        title="Submit"/>
      </form>
    </div>
  );
};

export default ExpenditureForm;
