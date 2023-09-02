import React, { useState } from "react";
import "./style.css";
import Button from "../button";

import axios from "axios";

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
      try {
        const userEmail = email;
        onClose();
        const expenseData = {
            email: userEmail,
            date,
            reason,
            amount: parseFloat(amount),
        };
    
        const response = await axios.post("http://localhost:8000/api/submit-expense", expenseData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        if (response.status === 200) {
            alert("Expense saved successfully");
            setAmount("");
            setDate("");
            setReason("");
        } else {
            alert("Error saving expense");
        }
    } catch (error) {
        alert("Error saving expense: " + error.message);
    }
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
