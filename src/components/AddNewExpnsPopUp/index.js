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

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // You can perform further actions here, such as sending the data to a backend server

  //   // Reset the form fields
  //   setAmount("");
  //   setDate("");
  //   setReason("");
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(amount.trim() === "" || date.trim() === "" || reason.trim() === "" ) {
      alert("Incomplete form");
    } else {
     onClose();
    try {
      const userEmail = email; 
  
      const expenseData = {
        email: userEmail,
        date,
        reason,
        amount: parseFloat(amount), 
      };
  
      const response = await fetch("http://localhost:8000/api/submit-expense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(expenseData),
      });
  
      if (response.ok) {
        console.log("Expense saved successfully");
        setAmount("");
        setDate("");
        setReason("");
        onClose(); 
      } else {
        console.error("Error saving expense");
      }
    } catch (error) {
      console.error("Error saving expense:", error);
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
