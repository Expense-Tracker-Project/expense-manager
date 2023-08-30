import React, { useState } from "react";
import "./style.css";
import axios from "axios";

const ExpenditureForm = ({onClose, email}) => {
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

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/", {
        email, date, reason, amount
      })
      .then(res => {
        if (res.data === "data added") {
          alert("New expense added");
        }
      })
      .catch(e => {
        alert("Something went wrong");
        console.log(e);
      })
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="popup">
      <button className="close-button" onClick={onClose}>
      ❌
      </button>
      <h2>Expenditure Form</h2>
      <form onSubmit={handleSubmit} className="expenditure-form">
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
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
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenditureForm;
