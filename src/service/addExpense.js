import axios from "axios";

const AddExpenseService = async (email, date, reason, amount, onClose, setAmount, setDate, setReason) => {
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

export default AddExpenseService;